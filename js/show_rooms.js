var rooms_dict = {'AB': {'Completed': {}, 'Ongoing': {'114': '1/2-2019'}, 'Pilot': {}}, 'BA': {'Completed': {}, 'Ongoing': {'2139': '1/2-2019', '2145': '1/2-2019', '2155': '1/2-2019', '2165': '1/2-2019', '2175': '1/2-2019', '2185': '1/2-2019', '2195': '1/2-2019'}, 'Pilot': {}}, 'BF': {'Completed': {}, 'Ongoing': {'214': '4/1-2018', '215': '4/1-2018', '315': '4/1-2018', '316': '4/1-2018', '323': '4/1-2018'}, 'Pilot': {}}, 'GB': {'Completed': {}, 'Ongoing': {'303': '4/1-2018', '304': '4/1-2018'}, 'Pilot': {}}, 'HS': {'Completed': {}, 'Ongoing': {}, 'Pilot': {'100': '1/2-2015', '108': '1/2-2012', '614': '3/4-2012', '618': '2/3-2012', '696': '3/4-2012', '705': '4/1-2013', '715': '3/1-2014'}}, 'MC': {'Completed': {}, 'Ongoing': {}, 'Pilot': {}}, 'MP': {'Completed': {}, 'Ongoing': {}, 'Pilot': {}}, 'OI': {'Completed': {}, 'Ongoing': {}, 'Pilot': {'2205': '1/2-2012', '2211': '1/2-2012', '4414': '2/3-2013', '4416': '1/2-2012', '5260': '4/1-2014', '5270': '1/2-2014', '5280': '2/3-2013', '5290': '3/1-2014'}}, 'WB': {'Completed': {}, 'Ongoing': {'119': '4/1-2018', '130': '4/1-2018', '219': '4/1-2018'}, 'Pilot': {}}, 'WW': {'Completed': {}, 'Ongoing': {'119': '1/2-2019', '120': '1/2-2019', '121': '1/2-2019', '126': '1/2-2019'}, 'Pilot': {}}};

var fullform = {'AB': 'Astronomy and Astrophysics', 'BA': 'Bahen Centre', 'BF': 'Bancroft Building', 'GB': 'Galbraith', 'HS': 'Health Sciences', 'MC': 'Mechanical Engineering', 'MP': 'McLennan Physical Laboratories', 'OI': 'O.I.S.E', 'WB': 'Wallberg', 'WW': 'Woodsworth College'};

var seasons_fullform = {
  1: 'Winter',
  2: 'Spring',
  3: 'Summer',
  4: 'Fall'
};


function Room(room_number, building, type, date) {
  this.room_number = room_number;
  this.building = building;
  this.type = type; //type is 'Pilot', 'Completed', or 'Ongoing'
  this.date = date; // format: 'Season1/Season2-Year' Ex: 'F/W-2018'
}

Room.prototype.make_card = function() {
  var card = document.createElement('DIV');
  card.className = 'card';
  if (this.type == 'Ongoing') {
    card.className += ' card-incomplete'
  }

  var room_image = document.createElement('IMG');
  room_image.src = 'images/room_images/' + this.building + '-' + fullform[this.building] +
    '/' + this.type + '/' + this.room_number + '_' + this.date.split('/')[0] + '-' + this.date.split('/')[1] + '.jpg';
  room_image.alt = this.building + ' ' + this.room_number;
  card.appendChild(room_image);

  var text_div = document.createElement('DIV');
  text_div.className = 'text-div';

  var card_heading = document.createElement('H4');
  card_heading.textContent = room_image.alt;
  text_div.appendChild(card_heading);

  if (this.type == 'Ongoing') {
    var date_heading = document.createElement('p');
    var temp = this.date.split('/');
    var formatted_date = seasons_fullform[temp[0]];
    var temp2 = temp[1].split('-');
    formatted_date += '/' + seasons_fullform[temp2[0]] + ' ' + temp2[1];
    date_heading.textContent = formatted_date;
    text_div.appendChild(date_heading);
  }

  card.appendChild(text_div);

  // clicking a card to open the before/after slider
  card.addEventListener('click', addViewer.bind(this, card));
  return card;
}

// the room that the before/after viewer is currently open for
var current = null;
var parent = null;
function addViewer(card) {
  // deactivate currently open card and close open container
  if (current != null && parent.contains(current)) {
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

    var date_text = document.createElement('P');
    date_text.className = 'date-text';
    var temp = this.date.split('/');
    var formatted_date = seasons_fullform[temp[0]];
    var temp2 = temp[1].split('-');
    formatted_date += '/' + seasons_fullform[temp2[0]] + ' ' + temp2[1];
    date_text.innerHTML = this.type == 'Ongoing' ? '<strong>Scheduled to be Completed:</strong> ' + formatted_date : '<strong>Completed:</strong> ' + formatted_date;
    container.appendChild(date_text);

    if (this.type == 'Ongoing') {
      container.appendChild(addImage(this));
    } else {
      container.appendChild(addContent(this));
    }
    card.parentElement.appendChild(container);
    add_sliding_functionality();
    current = card;
    parent = card.parentElement;
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
  var image_url = 'images/room_images/' + room.building + '-' + fullform[room.building] +
  '/' + room.type + '/';
  var image_text = room.building + ' ' + room.room_number;

  if (room.type == 'Ongoing') {
    var image = document.createElement('IMG');
    image.className = 'ongoing-image';
    image.src = image_url + room.room_number + '_' + room.date.split('/')[0] + '-' + room.date.split('/')[1] + '.jpg';
    image.alt = image_text;
    return image;
  } else {
    var before_image = document.createElement('IMG');
    var after_image = document.createElement('IMG');
    before_image.src = image_url + 'before/' + room.room_number + '.jpg';
    after_image.src = image_url + 'after/' + room.room_number + '.jpg';
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
    if (this.rooms[i].type == 'Pilot' && sort_type == 'date') {
      if (dict_type['Pilot'] == undefined) {
        dict_type['Pilot'] = [];
      }
      dict_type['Pilot'].push(this.rooms[i]);
    } else {
      if (dict_type[this.rooms[i][sort_type]] == undefined) {
        dict_type[this.rooms[i][sort_type]] = [];
      }
      dict_type[this.rooms[i][sort_type]].push(this.rooms[i]);
    }
  }
}

Rooms.prototype.show_rooms_by = function(type) { // type is either 'date' or 'building'
  var content = document.getElementById('content');
  content.innerHTML = '';
  current = null; // refers to currently active card
  currently_open = []; // refers to currently open headings

  var dict_type = type == 'date' ? this.categorized_by_date :
    this.categorized_by_building;
  var categories = Object.keys(dict_type);

  if (type == 'date') {
    // sort by year first and then by season
    categories.sort(function(a, b) {
      var year_a = a == 'Pilot' ? 0 : parseInt(a.slice(-4));
      var year_b = b == 'Pilot' ? 0 : parseInt(b.slice(-4));
      var season_a_1 = parseInt(a.charAt(0));
      var season_a_2 = parseInt(a.charAt(2));
      var season_b_1 = parseInt(b.charAt(0));
      var season_b_2 = parseInt(b.charAt(2));

      return (year_a - year_b) != 0 ? (year_a - year_b) : (season_a_1 - season_b_1) != 0 ? (season_a_1 - season_b_1) : (season_a_2 - season_b_2);
    });
  } else if (type == 'building') {
    // sort alphabetically
    categories.sort();
  }

  // rendering the content (headings and the room cards)
  for (var i = 0; i < categories.length; i++) {
    // create heading for each
    var heading = document.createElement('DIV');
    heading.className = 'category-heading';

    var images_container = document.createElement('DIV');
    images_container.className = 'season-images-container';

    if (!isNaN(categories[i].charAt(0))) {
      var season_image1 = document.createElement('IMG');
      season_image1.src = 'images/' + seasons_fullform[categories[i].charAt(0)] + '.svg';
      season_image1.className = 'heading-image';

      var season_image2 = document.createElement('IMG');
      season_image2.src = 'images/' + seasons_fullform[categories[i].charAt(2)] + '.svg';
      season_image2.className = 'heading-image';

      images_container.appendChild(season_image1);
      images_container.appendChild(season_image2);
    } else {
      var image = document.createElement('IMG');
      image.src = 'images/building.svg';
      image.className = 'heading-image';
      images_container.appendChild(image);
    }


    if (type == 'date') {
      var date = categories[i];
      if (categories[i] != 'Pilot') {
        heading.textContent = seasons_fullform[categories[i].charAt(0)] + '/' +
          seasons_fullform[categories[i].charAt(2)] + ' ' + date.slice(-4);
      } else {
        heading.textContent = 'Pilot Project';
      }
    } else if (type == 'building') {
      var building = categories[i];
      heading.textContent = fullform[building] + ' (' + building + ')';
    }
    // adding the season images
    heading.appendChild(images_container);
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
  if (currently_open.indexOf(heading) == -1) {
    dict[category].forEach(function(room) {
      room_container.appendChild(room.make_card());
    });
    currently_open.push(heading);
    heading.classList.add('open');
  } else {
    close_heading(heading);
  }
}

function close_heading(heading) {
  var room_container = heading.nextSibling;
  room_container.innerHTML = '';
  currently_open.splice(currently_open.indexOf(heading), 1);
  heading.classList.remove('open');
}


$(function() {
  var room_objects = new Rooms(rooms_dict);
  var default_sort = document.getElementsByClassName('default')[0].textContent.toLowerCase();
  room_objects.show_rooms_by(default_sort); // since Date is clicked by default
  document.getElementById('date_button').addEventListener('click', function() {room_objects.show_rooms_by('date')});
  document.getElementById('building_button').addEventListener('click', function() {room_objects.show_rooms_by('building')});
});
