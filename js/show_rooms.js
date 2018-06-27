var temp = {
  'OI': {
    'Pilot': {
      '2205': '1/2-2010',
      '2211': '2/3-2011',
      '4414': '3/4-2012',
    },
    'Completed': {
      '111': '2/3-2011',
      '222': '3/4-2012'
    },
    'Ongoing': {
      '000': '4/1-2019',
      '333': '1/2-2021'
    }
  },
  'HS': {
    'Pilot': {
      '100': '1/2-2010',
      '108': '4/1-2013',
    },
    'Completed': {
      '-111': '4/1-2013'
    },
    'Ongoing': {
      '-222': '1/2-2020',
      '-333': '4/1-2019'
    }
  }
};

var fullform = {
  'BA': 'Bahen Centre Information Tech',
  'HS': 'Health Sciences ',
  'MC': 'Mechanical Engineering ',
  'MP': 'McLennan Physical Laboratories',
  'OI': 'O.I.S.E.'
};

var seasons_fullform = {
  1: 'Winter',
  2: 'Spring',
  3: 'Summer',
  4: 'Fall'
};


function Room(room_number, building, type, date) {
  this.room_number = room_number;
  this.building = building;
  this.type = type; //type is 'pilot', 'completed', or 'ongoing'
  this.date = date; // format: 'Season1/Season2-Year' Ex: 'F/W-2018'
}

Room.prototype.make_card = function() {
  var card = document.createElement('DIV');
  card.className = 'card' + ' ' + this.building;

  var room_image = document.createElement('IMG');
  room_image.src = 'images/room_images/' + this.building +
  '/' + this.type + '/' + this.room_number + '.jpg';
  room_image.alt = this.building + ' ' + this.room_number;
  card.appendChild(room_image);

  var card_heading = document.createElement('H4');
  card_heading.textContent = room_image.alt;
  card.appendChild(card_heading);

  // clicking a card to open the before/after slider
  card.addEventListener('click', addViewer.bind(this, card));
  return card;
}

// the room that the before/after viewer is currently open for
var current = null;
function addViewer(card) {
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
    title.textContent = this.building + ' ' + this.room_number;
    container.appendChild(title);

    if (this.type == 'Ongoing') {
      container.appendChild(addImage(this));
    } else {
      container.appendChild(addContent(this));
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

  var ba_images = addImage(room); // returns an array with the before image and then the after image
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

function addImage(room) {
  var image_url = 'images/room_images/' + room.building +
  '/' + room.type + '/';
  var image_text = this.building + ' ' + this.room_number;

  if (room.type == 'Ongoing') {
    var image = document.createElement('IMG');
    image.className = 'ongoing-image';
    image.src = image_url + this.room_number + '.jpg';
    image.alt = image_text;
    return image;
  } else {
    var before_image = document.createElement('IMG');
    var after_image = document.createElement('IMG');
    before_image.src = image_url + 'before/' + this.room_number + '.jpg';
    after_image.src = image_url + 'after/' + this.room_number + '.jpg';
    before_image.alt = image_text + ' Before';
    after_image.alt = image_text + ' After';
    return [before_image, after_image];
  }
}


function Rooms(rooms_dict) {
  this.rooms = this.make_room_objects(rooms_dict);
  this.sort_rooms();
  this.categorized_by_date = {};
  this.categorized_by_building = {};
  if (rooms_dict != undefined) {
    this.categorize_rooms('date');
    this.categorize_rooms('building');
  }
}

Rooms.prototype.make_room_objects = function(dict) {
  var rooms = [];

  for (var building in dict) {
    for (var type in dict[building]) {
      for (var room in dict[building][type]) {
        var date = dict[building][type][room];
        rooms.push(new Room(room, building, type, date));
      }
    }
  }

  return rooms;
}

Rooms.prototype.add_room = function(room) {
  this.rooms.push(room);
  this.sort_rooms();
}

Rooms.prototype.remove_room = function(room_code) {
  //room_code has format 'building-room number', for example, 'BA-250'
  var separated = room_code.split('-');
  var building = separated[0], room_number = separated[1];
  for (var i = 0; i < this.rooms.length; i++) {
    if (this.rooms[i].building == building && this.rooms[i].room_number == room_number) {
      this.rooms.splice(i, 1);
      return;
    }
  }
}

Rooms.prototype.sort_rooms = function() {
  this.rooms.sort(function(a, b) {
    var building_a = a.building;
    var number_a = parseInt(a.room_number);
    var building_b = b.building;
    var number_b = parseInt(b.room_number);

    // first sort by building and then by room number
    return building_a < building_b ? -1 : building_a > building_b ? 1 : (number_a - number_b);
  });
}

Rooms.prototype.categorize_rooms = function(sort_type) { // sort_type is either 'date' or 'building'
  var dict_type = sort_type == 'date' ? this.categorized_by_date : this.categorized_by_building;

  for (var i = 0; i < this.rooms.length; i++) {
    if (dict_type[this.rooms[i][sort_type]] == undefined) {
      dict_type[this.rooms[i][sort_type]] = [];
    }
    dict_type[this.rooms[i][sort_type]].push(this.rooms[i]);
  }
}

Rooms.prototype.show_rooms_by = function(type) { // type is either 'date' or 'building'
  var dict_type = type == 'date' ? this.categorized_by_date :
    this.categorized_by_building;
  var categories = Object.keys(dict_type);

  var content = document.getElementById('content');
  content.innerHTML = '';
  current = null; // refers to currently active card

  if (type == 'date') {
    // sort by year first and then by season
    categories.sort(function(a, b) {
      var year_a = parseInt(a.slice(-4));
      var year_b = parseInt(b.slice(-4));
      var season_a = parseInt(a.charAt(0));
      var season_b = parseInt(b.charAt(0));

      return year_a - year_b != 0 ? (year_a - year_b) : (season_a - season_b);
    });
  } else if (type == 'building') {
    // sort alphabetically
    categories.sort();
  }

  // rendering the content (headings and the room cards)
  for (var i = 0; i < categories.length; i++) {
    // create heading for each
    var heading = document.createElement('H3');
    if (type == 'date') {
      var date = categories[i];
      heading.textContent = seasons_fullform[categories[i].charAt(0)] + '/' +
        seasons_fullform[categories[i].charAt(2)] + ' ' + date.slice(-4);
    } else if (type == 'building') {
      var building = categories[i];
      heading.textContent = fullform[building] + ' (' + building + ')';
    }
    content.appendChild(heading);

    // container for the rooms in each building
    var rooms_in_building = document.createElement('DIV');
    rooms_in_building.className = 'rooms';
    content.appendChild(rooms_in_building);
    heading.addEventListener('click', add_cards.bind(this, heading, dict_type, categories[i]));
  }
}

var currently_open = [];
function add_cards(heading, dict, category) {
  // create cards for the rooms and add to container
  var room_container = heading.nextSibling;
  if (!currently_open.includes(heading)) {
    dict[category].forEach(function(room) {
      room_container.appendChild(room.make_card());
    });
    currently_open.push(heading);
  } else {
    close_heading(heading);
  }
}

function close_heading(heading) {
  var room_container = heading.nextSibling;
  room_container.innerHTML = '';
  currently_open.splice(currently_open.indexOf(heading), 1);
  current = null;  // refers to currently active card
}


$(function() {
  var room_objects = new Rooms(temp);
  var default_sort = document.getElementsByClassName('default')[0].textContent.toLowerCase();
  room_objects.show_rooms_by(default_sort); // since Date is clicked by default
  document.getElementById('date_button').addEventListener('click', function() {room_objects.show_rooms_by('date')});
  document.getElementById('building_button').addEventListener('click', function() {room_objects.show_rooms_by('building')});
});
