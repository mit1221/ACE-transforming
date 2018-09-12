from os import walk
import pandas as pd
from pandas import ExcelWriter
from pandas import ExcelFile

rooms_dict = {}
fullforms = {}
rooms_with_360_images = {}
rooms_to_scope_dict = {}

seasons_fullform = {
  'winter': '1',
  'spring': '2',
  'summer': '3',
  'fall': '4'
}

# Get the scope for all the rooms
df = pd.read_excel('scope.xlsx', sheet_name='Sheet1')
columns = list(df.columns)
for i in range(df.shape[0]):
    row = df.loc[i, : ]

    #removes the space between building name and room number
    key = ('').join(row[0].split(' '))

    if str(row[-1]) == 'nan':
        rooms_to_scope_dict[key] = []
        list_ref = rooms_to_scope_dict[key]

    else:
        if key not in rooms_to_scope_dict:
            rooms_to_scope_dict[key] = {}
        date = str(row[-1])
        if len(date) > 4:
            temp = date.split(' ')[0].split('/')
            date = seasons_fullform[temp[0]] + '/' + seasons_fullform[temp[1]] + '-' + date.split(' ')[1]
        rooms_to_scope_dict[key][date] = []
        list_ref = rooms_to_scope_dict[key][date]

    for j in range(1, df.shape[1] - 1):
        if str(row[j]) != 'nan':
            list_ref.append(1)
        else:
            list_ref.append(0)

# Gets all the rooms added to the room_images directory
for (dirpath, dirnames, filenames) in walk('./TIL Website/images/room_images'):
    if not('Before' in dirpath or 'After' in dirpath):
        if 'completed' in dirpath.lower() or 'ongoing' in dirpath.lower() or 'pilot' in dirpath.lower():
            type_dict = {}

            splitted_path = dirpath.split('\\')
            building = splitted_path[-2].split('-')[0]

            for pic in filenames:
                if '.jpg' in pic.lower():
                    temp = pic.split('_')
                    room_number = temp[0]

                    temp2 = temp[1].split('-')
                    season1 = temp2[0]
                    season2 = temp2[1]
                    year = temp2[2].split('.')[0]

                    if room_number not in type_dict:
                        type_dict[room_number] = []
                    type_dict[room_number].append(season1 + '/' + season2 + '-' + year)
                    if not isinstance(rooms_to_scope_dict[building + room_number], list):
                        # this means there are multiple dates for the room
                        keys = rooms_to_scope_dict[building + room_number].keys()
                        for key in keys:
                            if 'ongoing' in dirpath.lower() and key != '2017' and key not in type_dict[room_number]:
                                type_dict[room_number].append(key)

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

# Updates the JavaScript file with the new data
with open('./TIL Website/js/rooms_data.js', 'w') as f:
    f.write('var roomsDict = ' + str(rooms_dict) + ';\n\n')
    f.write('var roomsWith360Images = ' + str(rooms_with_360_images) + ';\n\n')
    f.write('var roomsToScopeDict = ' + str(rooms_to_scope_dict) + ';\n\n')
    f.write('var fullform = ' + str(fullforms) + ';')


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
