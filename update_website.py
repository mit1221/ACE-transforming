from os import walk
import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile

# Gets all the rooms added to the room_images directory
rooms_dict = {}
fullforms = {}
rooms_with_360_images = {}
rooms_to_scope_dict = {}

for (dirpath, dirnames, filenames) in walk('./TIL Website/images/room_images'):
    if not('Before' in dirpath or 'After' in dirpath):
        if 'completed' in dirpath.lower() or 'ongoing' in dirpath.lower() or 'pilot' in dirpath.lower():
            type_dict = {}
            for pic in filenames:
                if '.jpg' in pic.lower():
                    temp = pic.split('_')
                    room_number = temp[0]

                    temp2 = temp[1].split('-')
                    season1 = temp2[0]
                    season2 = temp2[1]
                    year = temp2[2].split('.')[0]
                    type_dict[room_number] = season1 + '/' + season2 + '-' + year

            splitted_path = dirpath.split('\\')
            building = splitted_path[-2].split('-')[0]
            fullforms[building] = '-'.join(splitted_path[-2].split('-')[1:])
            type = splitted_path[-1]
            if building not in rooms_dict:
                rooms_dict[building] = {}
            rooms_dict[building][type] = type_dict
        if '360_images' in dirpath.lower():
            splitted_path = dirpath.split('\\')
            building = splitted_path[-2].split('-')[0]
            for pic in filenames:
                if building not in rooms_with_360_images:
                    rooms_with_360_images[building] = []
                rooms_with_360_images[building].append(pic.split('.')[0])

# Get the scope for all the rooms
df = pd.read_excel('scope.xlsx', sheet_name='Sheet1')
columns = list(df.columns)
for i in range(df.shape[0]):
    row = df.loc[i, : ]
    rooms_to_scope_dict[row[0]] = []
    for j in range(1, df.shape[1]):
        if str(row[j]) != 'nan':
            rooms_to_scope_dict[row[0]].append(True)
        else:
            rooms_to_scope_dict[row[0]].append(False)
print(rooms_to_scope_dict)

# Updates the JavaScript file with the new data
with open('./TIL Website/js/show_rooms.js', 'r+') as f:
    content = f.read()
    index = 0
    for _ in range(3):
        index = content.find(';', index + 1)
    append_text = content[index:]
    f.seek(0, 0)
    f.write('var rooms_dict = ' + str(rooms_dict) + ';\n\n')
    f.write('var rooms_with_360_images = ' + str(rooms_with_360_images) + ';\n\n')
    f.write('var fullform = ' + str(fullforms) + append_text)


# Gets the totals from the stats spreadsheet and updates the HTML file with the data
df = pd.read_excel('stats.xlsx', sheet_name='Sheet1')
columns = list(df.columns)[1:]
totals = []

last_index = len(df.index)-1
for column in columns:
    totals.append(int(df[column][last_index]))

file_path = './TIL Website/index.html'
content = ''
with open(file_path, 'r') as f:
    content = f.read()

with open('./TIL Website/index.html', 'w') as f:
    return_string = ''
    return_string += content[:content.find('data-number') + 13]

    index = 0
    for i in range(3):
        return_string = return_string + str(totals[i]) + "'>" + str(totals[i])

        index = content.find('data-number', index + 1)
        split_string = content[index:]
        end = split_string[13:].find('data-number')
        if (end != -1):
            append_text = split_string[split_string.find('<'):end + 26]
            return_string += append_text
        else:
            return_string += split_string[split_string.find('<'):]
    f.write(return_string)
