var fullform = {
  'BA': 'Bahen Centre Information Tech',
  'HS': 'Health Sciences ',
  'MC': 'Mechanical Engineering ',
  'MP': 'McLennan Physical Laboratories'
}

var rooms = {
  'completed': {
    'BA': [2139, 2145, 2155, 2159, 2165],
    'HS': [106, 108, 610, 614],
    'MC': [254],
    'MP': [102, 103, 118]},
  'ongoing': {
    'BA': [1190, 1210, 1240, 2135],
    'HS': [100, 705, 715],
    'MC': [102, 252],
    'MP': [134, 137, 202]}
};

function show_rooms(type) {
  // type is either 'completed' or 'ongoing'
  var content = document.getElementById('content');
  content.innerHTML = '';
  for (var building in rooms[type]) {
    if (rooms[type].hasOwnProperty(building)) {
      // create heading for each
      var heading = document.createElement('H3');
      heading.textContent = fullform[building] + ' (' + building + ')';
      content.appendChild(heading);

      // container for the rooms in each
      var rooms_in_building = document.createElement('DIV');
      rooms_in_building.className = 'rooms';

      // create cards for the rooms
      for (var i = 0; i < rooms[type][building].length; i++) {
        var card = document.createElement('DIV');
        card.className = 'card';

        var room_image = document.createElement('IMG');
        room_image.src = 'images/room_images/' + building +
        '/' + type + '/' + rooms[type][building][i] + '.jpg';
        room_image.alt = building + ' ' + rooms[type][building][i];
        card.appendChild(room_image);

        var card_heading = document.createElement('H4');
        card_heading.textContent = room_image.alt;
        card.appendChild(card_heading);

        rooms_in_building.appendChild(card);
      }

      content.appendChild(rooms_in_building);
    }
  }

}
