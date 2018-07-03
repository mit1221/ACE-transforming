""" Gets the rooms added to the room_images directory and update the JavaScript file."""
from os import walk

rooms_dict = {}
fullforms = {}
for (dirpath, dirnames, filenames) in walk('./images/room_images'):
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

with open('js/show_rooms.js', 'r+') as f:
    content = f.read()
    append_text = content[content.find(';', content.find(';') + 1):]
    f.seek(0, 0)
    f.write('var rooms_dict = ' + str(rooms_dict) + ';\n\n')
    f.write('var fullform = ' + str(fullforms) + append_text)
