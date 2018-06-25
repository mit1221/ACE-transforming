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

var current_type = null;
function show_rooms(type) {
  // type is either 'completed' or 'ongoing'
  var content = document.getElementById('content');
  content.innerHTML = '';

  if (current_type != type) {
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
          card.className = 'card' + ' ' + building;

          var room_image = document.createElement('IMG');
          room_image.src = 'images/room_images/' + building +
          '/' + type + '/' + rooms[type][building][i] + '.jpg';
          room_image.alt = building + ' ' + rooms[type][building][i];
          card.appendChild(room_image);

          var card_heading = document.createElement('H4');
          card_heading.textContent = room_image.alt;
          card.appendChild(card_heading);
          rooms_in_building.appendChild(card);

          // clicking a card to open the before/after slider
          card.addEventListener('click', addViewer.bind(this, card, type));
        }

        content.appendChild(rooms_in_building);
      }
    }

    current_type = type;
  } else {
    current_type = null;
  }
}

// the room that the before/after viewer is currently open for
var current = null;

function addViewer(card, type) { // type is 'completed' or 'ongoing'
  // deactivate currently open card and close open container
  if (current != null) {
    current.parentElement.removeChild(current.parentElement.lastChild);
    current.classList.remove('card-active');
  }

  // add before/after container
  if (current != card) {
    card.classList.add('card-active');
    var container = document.createElement('DIV');
    container.className = 'ba-container';

    var title = document.createElement('p');
    title.className = 'ba-container-title';
    title.textContent = card.textContent;
    container.appendChild(title);

    if (type == 'completed') {
      container.appendChild(addContent(card));
    } else {
      container.appendChild(addImage(card, 'ongoing'));
    }
    card.parentElement.appendChild(container);
    add_sliding_functionality();
    current = card;
    return;
  }
  // if same card was clicked twice, then it removes the card from 'current'
  current = null;
}

function addContent(room) {
  var slider = document.createElement('DIV');
  slider.className = 'ba-slider';

  var before_text = document.createElement('DIV');
  var after_text = document.createElement('DIV');
  before_text.className = 'ba_text before_text';
  after_text.className = 'ba_text after_text';
  before_text.textContent = 'Before';
  after_text.textContent = 'After';

  var ba_images = addImage(room, 'completed');
  slider.appendChild(ba_images[1]);
  slider.appendChild(after_text);

  var resize = document.createElement('DIV');
  resize.className = 'resize';
  resize.appendChild(ba_images[0]);
  resize.appendChild(before_text);

  slider.appendChild(resize);

  var handle = document.createElement('SPAN');
  handle.className = 'handle';
  slider.appendChild(handle);
  return slider;
}

function addImage(room, type) {
  var building = room.classList[1];
  var room_number = room.textContent.split(' ').pop();
  var image_url = 'images/room_images/' + building +
  '/' + type + '/' + room_number;

  if (type == 'completed') {
    var before_image = document.createElement('IMG');
    var after_image = document.createElement('IMG');
    before_image.src = image_url + '_before.jpg';
    after_image.src = image_url + '.jpg';
    before_image.alt = building + ' ' + room_number + ' Before';
    after_image.alt = building + ' ' + room_number + ' After';
    return [before_image, after_image];
  } else {
    var image = document.createElement('IMG');
    image.className = 'ongoing-image';
    image.src = image_url + '.jpg';
    image.alt = room.textContent;
    return image;
  }
}
