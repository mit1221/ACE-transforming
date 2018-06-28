""" Gets the rooms added to the room_images directory and update the JavaScript file."""
from os import walk

f = []
for (dirpath, dirnames, filenames) in walk('./images/room_images'):
    f.extend(filenames)
    print(dirpath, filenames)

print(f);
