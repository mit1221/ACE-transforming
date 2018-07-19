var rooms_dict = {'AB': {'Completed': {}, 'Ongoing': {'114': '1/2-2019'}, 'Pilot': {}}, 'BA': {'Completed': {}, 'Ongoing': {'1130': '2/3-2019', '1160': '2/3-2020', '1170': '2/3-2020', '1180': '2/3-2020', '1190': '2/3-2019', '1200': '2/3-2019', '1210': '2/3-2020', '1220': '2/3-2020', '1230': '2/3-2020', '1240': '2/3-2020', '2139': '1/2-2019', '2145': '1/2-2019', '2155': '1/2-2019', '2165': '1/2-2019', '2175': '1/2-2019', '2185': '1/2-2019', '2195': '1/2-2019'}, 'Pilot': {}}, 'BF': {'Completed': {}, 'Ongoing': {'214': '4/1-2018', '215': '4/1-2018', '315': '4/1-2018', '316': '4/1-2018', '323': '4/1-2018'}, 'Pilot': {}}, 'BL': {'Completed': {}, 'Ongoing': {'113': '1/2-2021', '305': '1/2-2021', '306': '1/2-2021', '312': '1/2-2021', '327': '1/2-2021'}, 'Pilot': {}}, 'ES': {'Completed': {}, 'Ongoing': {'4001': '2/3-2019', 'B142': '2/3-2019'}, 'Pilot': {}}, 'GB': {'Completed': {}, 'Ongoing': {'303': '4/1-2018', '304': '4/1-2018'}, 'Pilot': {}}, 'HS': {'Completed': {}, 'Ongoing': {'106': '2/3-2020', '610': '1/2-2021', '614': '1/2-2021', '618': '1/2-2021', '696': '1/2-2021', '705': '1/2-2021', '715': '1/2-2021'}, 'Pilot': {'100': '2/3-2017', '108': '2/3-2017', '614': '2/3-2017', '618': '2/3-2017', '696': '2/3-2017', '705': '2/3-2017', '715': '2/3-2017'}}, 'LM': {'Completed': {}, 'Ongoing': {'123': '1/2-2020', '155': '1/2-2020', '157': '1/2-2020', '159': '2/3-2019'}, 'Pilot': {}}, 'MC': {'Completed': {}, 'Ongoing': {}, 'Pilot': {}}, 'MP': {'Completed': {}, 'Ongoing': {'202': '2/3-2019', '203': '2/3-2019'}, 'Pilot': {}}, 'MS': {'Completed': {}, 'Ongoing': {'2290': '2/3-2019', '2394': '2/3-2019', '3153': '4/1-2020', '3154': '4/1-2020', '3290': '2/3-2019'}, 'Pilot': {}}, 'OI': {'Completed': {}, 'Ongoing': {'11200': '2/3-2019', '2212': '4/1-2020', '2214': '4/1-2020', '2279': '4/1-2020', '2286': '4/1-2020', '2295': '4/1-2020', '2296': '4/1-2020', '3311': '4/1-2020', '4410': '4/1-2020', '4426': '4/1-2020', '5150': '4/1-2020', '5160': '4/1-2020', '5170': '4/1-2020', '5230': '4/1-2020', '5240': '4/1-2020', '5250': '4/1-2020', '8170': '4/1-2020', '8180': '4/1-2020', '8200': '4/1-2020', '8201': '4/1-2020', '8214': '2/3-2019', '8220': '2/3-2019', '8280': '2/3-2019', 'G162': '2/3-2019'}, 'Pilot': {'2205': '2/3-2017', '2211': '2/3-2017', '4414': '2/3-2017', '4416': '2/3-2017', '5260': '2/3-2017', '5270': '2/3-2017', '5280': '2/3-2017', '5290': '2/3-2017'}}, 'PB': {'Completed': {}, 'Ongoing': {'255': '2/3-2020', 'B150': '2/3-2020', 'B250': '2/3-2020'}, 'Pilot': {}}, 'SF': {'Completed': {}, 'Ongoing': {'1105': '2/3-2020', '3202': '2/3-2019'}, 'Pilot': {}}, 'SK': {'Completed': {}, 'Ongoing': {'100': '1/2-2021', '114': '1/2-2021', '218': '1/2-2021', '222': '1/2-2021', '346': '1/2-2021', '348': '1/2-2021', '418': '1/2-2021', '548': '1/2-2021', '702': '1/2-2021'}, 'Pilot': {}}, 'SS': {'Completed': {}, 'Ongoing': {'1070': '2/3-2019', '1078': '2/3-2019', '1080': '2/3-2019', '1083': '2/3-2019', '1084': '2/3-2019', '1085': '2/3-2019', '1086': '2/3-2019', '1087': '2/3-2019', '1088': '2/3-2019', '2101': '2/3-2019', '2104': '2/3-2019', '2105': '2/3-2019', '2106': '2/3-2019', '2108': '2/3-2019', '2110': '2/3-2019', '2112': '2/3-2019', '2114': '2/3-2019', '2116': '2/3-2019', '2119': '2/3-2019', '2120': '2/3-2019', '2125': '1/2-2021', '2135': '2/3-2019'}, 'Pilot': {}}, 'UC': {'Completed': {}, 'Ongoing': {'140': '2/3-2020', '144': '2/3-2020', '148': '2/3-2020', '152': '1/2-2021', '163': '4/1-2019', '175': '4/1-2019', '177': '4/1-2019', '244': '1/2-2020', '248': '1/2-2020', '255': '1/2-2020', '256': '1/2-2020', '257': '1/2-2020', '44': '4/1-2019', '51': '4/1-2019', '52': '4/1-2019', '53': '4/1-2019', '55': '4/1-2019', '57': '4/1-2019', '63': '4/1-2019', '65': '4/1-2019', '67': '4/1-2019', '69': '4/1-2019', '85': '4/1-2019', '87': '4/1-2019', 'B203': '1/2-2020', 'D301': '1/2-2020', 'F204': '1/2-2020'}, 'Pilot': {}}, 'WB': {'Completed': {}, 'Ongoing': {'119': '4/1-2018', '130': '4/1-2018', '219': '4/1-2018'}, 'Pilot': {}}, 'WE': {'Completed': {}, 'Ongoing': {'69': '2/3-2019', '74': '2/3-2019', '75': '2/3-2019', '76': '2/3-2019'}, 'Pilot': {}}, 'WI': {'Completed': {}, 'Ongoing': {'2006': '2/3-2019', '523': '4/1-2019', '524': '4/1-2019'}, 'Pilot': {}}, 'WW': {'Completed': {}, 'Ongoing': {'119': '1/2-2019', '120': '1/2-2019', '121': '1/2-2019', '126': '1/2-2019'}, 'Pilot': {}}};

var rooms_with_360_images = {'HS': ['100', '108'], 'OI': ['2211', '4414', '5270']};

var fullform = {'AB': 'Astronomy and Astrophysics', 'BA': 'Bahen Centre', 'BF': 'Bancroft Building', 'BL': 'Bissell Building', 'ES': 'Earth Sciences Centre', 'GB': 'Galbraith', 'HS': 'Health Sciences', 'LM': 'Lash Miller Chemical Labs', 'MC': 'Mechanical Engineering', 'MP': 'McLennan Physical Laboratories', 'MS': 'Medical Sciences', 'OI': 'OISE', 'PB': 'Pharmacy', 'SF': 'Sandford Fleming', 'SK': 'Social Work', 'SS': 'Sidney Smith Hall', 'UC': 'University College', 'WB': 'Wallberg', 'WE': 'Wetmore Hall - New College', 'WI': 'Wilson Hall - New College', 'WW': 'Woodsworth College'};

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
  this.has_360_image = rooms_with_360_images[this.building] !== undefined &&
    rooms_with_360_images[this.building].indexOf(this.room_number) >= 0 ? true : false;
}

Room.prototype.make_card = function() {
  var card = document.createElement('DIV');
  card.className = 'card';
  if (this.type == 'Ongoing') {
    card.classList.add('card-incomplete');
    var feedback_button = document.createElement('A');
    feedback_button.className = 'button icon-button feedback-for-incomplete';
    feedback_button.innerHTML = '<img class="feedback-button-icon" src="images/feedback.svg">Give feedback';
    feedback_button.href = 'feedback.html?room=' + this.building + this.room_number;
    feedback_button.target = '_blank';
    card.appendChild(feedback_button);
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

  // clicking a card to open the viewer
  if (this.type != 'Ongoing') {
    card.addEventListener('click', addViewer.bind(this, card));
  }
  return card;
}

// the room that the viewer is currently open for and its parent element
var current = null;
var parent = null;
function addViewer(card) {
  // card.type is either 'Completed' or 'Pilot'

  // deactivate currently open card and close open container
  if (current != null && parent.contains(current)) {
    current.parentElement.removeChild(current.parentElement.lastChild);
    current.classList.remove('card-active');
  }

  // add container
  if (current != card) {
    card.classList.add('card-active');
    var container = document.createElement('DIV');
    container.className = 'ba-container';

    var close = document.createElement('SPAN');
    close.id = 'close';
    close.innerHTML = '&times;';
    container.appendChild(close);

    close.onclick = function() {
      container.classList.add('animateout');
      setTimeout(function() {
        current.parentElement.removeChild(current.parentElement.lastChild);
        current.classList.remove('card-active');
        current = null;
      }, 300);
    }

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
    date_text.innerHTML = this.type == 'Completed' ? '<strong>Completed:</strong> ' + formatted_date : '<strong>Completed:</strong> Summer 2017';
    container.appendChild(date_text);

    // adds the before/after viewer by default
    addContent(container, this);
    card.parentElement.appendChild(container);
    add_sliding_functionality();
    var ba_buttons = document.createElement('DIV');
    ba_buttons.className = 'ba-buttons';

    if (this.has_360_image) {
      var toggle_button = document.createElement('BUTTON');
      toggle_button.innerHTML = '<img src="images/360_icon.svg">360&#176; Viewer';
      toggle_button.id = 'toggle-button';
      toggle_button.className = 'icon-button';
      toggle_button.addEventListener('click', toggle_viewer);
      ba_buttons.appendChild(toggle_button);
    }

    var feedback_button = document.createElement('A');
    feedback_button.target = '_blank';
    feedback_button.className = 'button icon-button';
    feedback_button.href = 'feedback.html?room=' + this.building + this.room_number;
    feedback_button.innerHTML = '<img src="images/feedback.svg">Give feedback';

    ba_buttons.appendChild(feedback_button);
    container.appendChild(ba_buttons);
    container.scrollIntoView();  // scroll to the viewer automatically
    current = card;
    parent = card.parentElement;
    return;
  }
  // if the same card was clicked twice, then it removes the card from 'current'
  current = null;
}

function addContent(container, room) {
  var slider = document.createElement('DIV');
  slider.className = 'ba-slider';

  var before_text = document.createElement('DIV');
  var after_text = document.createElement('DIV');
  before_text.className = 'ba_text before_text';
  after_text.className = 'ba_text after_text';
  before_text.textContent = 'Before';
  after_text.textContent = 'After';

  var ba_images = addImages(room); // returns an array with the before image and then the after image
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
  container.appendChild(slider);

  if (room.has_360_image) {
    var image_360 = document.createElement('DIV');
    image_360.id = room.building + room.room_number;
    image_360.className = 'image-360';
    container.appendChild(image_360);
    image_360.style.display = 'none';
    setTimeout(function() {
      load_360(room);
    }, 100);
  }
}

function addImages(room) {
  var image_url = 'images/room_images/' + room.building + '-' + fullform[room.building] +
  '/' + room.type + '/';
  var image_text = room.building + ' ' + room.room_number;

  var before_image = document.createElement('IMG');
  var after_image = document.createElement('IMG');
  before_image.src = image_url + 'before/' + room.room_number + '.jpg';
  after_image.src = image_url + 'after/' + room.room_number + '.jpg';
  before_image.alt = image_text + ' Before';
  after_image.alt = image_text + ' After';
  return [before_image, after_image];
}

function load_360(room) {
  var image_url = 'images/room_images/' + room.building + '-' + fullform[room.building] +
  '/360_images/' + room.room_number + '.jpg';

  var vrView = new VRView.Player('#' + room.building + room.room_number, {
    image: image_url,
    width: '100%',
    height: '500px'
  });
}

function toggle_viewer() {
  var button = document.getElementById('toggle-button');
  if (button.textContent.substring(0, 3) == '360') {
    button.innerHTML = '<img src="images/ba_icon.svg">Before/After Viewer';
    document.getElementsByClassName('ba-slider')[0].style.display = 'none';
    document.getElementsByClassName('image-360')[0].style.display = 'block';
  } else {
    button.innerHTML = '<img src="images/360_icon.svg">360&#176; Viewer';
    document.getElementsByClassName('image-360')[0].style.display = 'none';
    document.getElementsByClassName('ba-slider')[0].style.display = 'block';
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
    var number_a;
    if (!isNaN(parseInt(a.room_number.charAt(0)))) {
      number_a = parseInt(a.room_number);
    } else {
      number_a = parseInt(a.room_number.substr(1));
    }
    var building_b = b.building;
    var number_b;
    if (!isNaN(parseInt(b.room_number.charAt(0)))) {
      number_b = parseInt(b.room_number);
    } else {
      number_b = parseInt(b.room_number.substr(1));
    }

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
