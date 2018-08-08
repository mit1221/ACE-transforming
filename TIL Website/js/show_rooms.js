var seasons_fullform = {
  1: 'Winter',
  2: 'Spring',
  3: 'Summer',
  4: 'Fall'
};

var scopes_fullform = {
  0: 'accessibility',
  1: 'finishes',
  2: 'furniture',
  3: 'av',
  4: 'lighting',
  5: 'environmental',
}

// Polyfill for startsWith()
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(search, pos) {
    return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  };
}

function Room(room_number, building, type, date) {
  this.room_number = room_number;
  this.building = building;
  this.type = type; //type is 'Pilot', 'Completed', or 'Ongoing'
  this.date = date;
  this.has_360_image = rooms_with_360_images[this.building] !== undefined &&
    rooms_with_360_images[this.building].indexOf(this.room_number) >= 0 ? true : false;
}

Room.prototype.makeCard = function(sort_type) {
  var card = document.createElement('DIV');
  card.className = 'card';

  // creating the thumbnail for the card
  var room_image = document.createElement('IMG');
  room_image.src = 'images/room_images/' + this.building + '-' + fullform[this.building] +
    '/' + this.type + '/' + this.room_number + '_' + this.date.split('/')[0] + '-' + this.date.split('/')[1] + '.jpg';
  room_image.alt = this.building + ' ' + this.room_number;
  card.appendChild(room_image);

  // adding the room number title to the card
  var text_div = document.createElement('DIV');
  text_div.className = 'text-div';
  var card_heading = document.createElement('H4');
  card_heading.textContent = room_image.alt;
  text_div.appendChild(card_heading);

  if (this.type == 'Ongoing') {
    // adding the feedback button on top of the card
    card.classList.add('card-incomplete');

    // adding the date to be completed to the card if the rooms are not sorted by date
    if (sort_type != 'date') {
      var date_heading = document.createElement('p');
      var temp = this.date.split('/');
      var formatted_date = seasons_fullform[temp[0]];
      var temp2 = temp[1].split('-');
      var year = temp2[1];
      formatted_date += '/' + seasons_fullform[temp2[0]] + ' ' + year;
      date_heading.textContent = formatted_date;
      text_div.appendChild(date_heading);
    }
  }
  // clicking a card for a room to open the viewer
  card.addEventListener('click', addViewer.bind(this, card));
  card.appendChild(text_div);
  return card;
}

// the room that the viewer is currently open for and its parent element
var current = null;
var parent = null;
function addViewer(card) {
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

    var close = document.createElement('I');
    close.className = 'material-icons close';
    close.innerHTML = 'close';
    container.appendChild(close);

    close.onclick = function() {
      container.classList.add('animateout');
      setTimeout(function() {
        current.parentElement.removeChild(current.parentElement.lastChild);
        current.classList.remove('card-active');
        current.scrollIntoView();
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
    date_text.innerHTML = this.type != 'Ongoing' ? (this.type == 'Pilot' ?
      '<strong>Completed:</strong> Summer 2017' :
      '<strong>Completed:</strong> ' + formatted_date) :
      '<strong>Upgrade scheduled:</strong> ' + formatted_date;
    container.appendChild(date_text);

    function createScopeIcon(scope, type) {
      var icon = document.createElement('IMG');
      icon.src = 'images/progress_icons/' + scope + '_progress_icon.svg';
      icon.alt = scope;
      icon.className = type + '-room-scope-icon';
      return icon;
    }

    var scopeIcons = document.createElement('DIV');
    var scopes = rooms_to_scope_dict[this.building + this.room_number];
    if (scopes != null) {
      for (var i = 0; i < scopes.length; i++) {
        if (scopes[i] == 1) {
          scopeIcons.appendChild(createScopeIcon(scopes_fullform[i], this.type));
        }
      }
    }

    if (this.type == 'Ongoing') {
      var imagesAndIconsContainer = document.createElement('DIV');
      imagesAndIconsContainer.className = 'images-icons-container';

      scopeIcons.className = 'ongoing-scope-icons-container';
      imagesAndIconsContainer.appendChild(scopeIcons);

      // displays enlarged image of thumbnail
      imagesAndIconsContainer.appendChild(addImages(this));

      container.appendChild(imagesAndIconsContainer);
    } else {
      scopeIcons.className = 'complete-scope-icons-container';
      container.appendChild(scopeIcons);

      // adds the before/after viewer by default
      addContent(container, this);
    }

    card.parentElement.appendChild(container);
    add_sliding_functionality();

    var ba_buttons = document.createElement('DIV');
    ba_buttons.className = 'ba-buttons';

    if (this.type != 'Ongoing' && this.has_360_image) {
      var toggle_button = document.createElement('BUTTON');
      toggle_button.innerHTML = '<img src="images/360_icon.svg">360&#176; Viewer';
      toggle_button.id = 'toggle-button';
      toggle_button.className = 'icon-button';
      toggle_button.addEventListener('click', toggleViewer);
      ba_buttons.appendChild(toggle_button);
    }

    var feedback_button = document.createElement('A');
    feedback_button.target = '_blank';
    feedback_button.className = 'button icon-button';
    feedback_button.href = '../webapp/f?p=118?room=' + this.building + this.room_number;
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

    image_360.innerHTML = '<h3 style="text-align: center; text-transform: none">Feature coming soon...</h3>';

    container.appendChild(image_360);
    image_360.style.display = 'none';
    // setTimeout(function() {
    //   load360(room);
    // }, 100);
  }
}

function addImages(room) {
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

function load360(room) {
  var image_url = 'images/room_images/' + room.building + '-' + fullform[room.building] +
  '/360_images/' + room.room_number + '.jpg';

  var vrView = new VRView.Player('#' + room.building + room.room_number, {
    image: image_url,
    width: '100%',
    height: '500px'
  });
}

function toggleViewer() {
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
  this.rooms = this.makeRoomObjects(rooms_dict);
  this.sortRooms();
  this.categorized_by_date = {};
  this.categorized_by_building = {};
  if (rooms_dict != undefined) {
    this.categorizeRooms('date');
    this.categorizeRooms('building');
  }
}

Rooms.prototype.makeRoomObjects = function(dict) {
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

Rooms.prototype.sortRooms = function() {
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
    return building_a < building_b ? -1 : building_a > building_b ? 1 : (number_a - number_b != 0 ? number_a - number_b : (a.type == 'Ongoing' ? 1 : -1));
  });
}

Rooms.prototype.categorizeRooms = function(sort_type) { // sort_type is either 'date' or 'building'
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

Rooms.prototype.showRoomsBy = function(type) { // type is either 'date' or 'building'
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

    if (!isNaN(categories[i].charAt(0))) {
      var season_image1 = document.createElement('IMG');
      season_image1.src = 'images/' + seasons_fullform[categories[i].charAt(0)] + '.svg';
      season_image1.className = 'heading-image';

      var season_image2 = document.createElement('IMG');
      season_image2.src = 'images/' + seasons_fullform[categories[i].charAt(2)] + '.svg';
      season_image2.className = 'heading-image';

      heading.appendChild(season_image1);
      heading.appendChild(season_image2);
    } else {
      var image = document.createElement('IMG');
      image.src = 'images/building.svg';
      image.className = 'heading-image';
      heading.appendChild(image);
    }

    var title;
    var stats;
    var key = categories[i];

    if (type == 'date') {
      if (categories[i] != 'Pilot') {
        title = seasons_fullform[key.charAt(0)] + '/' +
          seasons_fullform[key.charAt(2)] + ' ' + key.slice(-4);
      } else {
        title = 'Pilot Project';
      }

      var unique_buildings = [];
      for (var j = 0; j < dict_type[key].length; j++) {
        var curr_building = dict_type[key][j].building;
        if (unique_buildings[unique_buildings.length - 1] != curr_building) {
          unique_buildings.push(curr_building);
        }
      }

      stats = dict_type[key].length + ' Classrooms' + ' | ' + unique_buildings.length + ' Buildings';
    } else if (type == 'building') {
      var building = categories[i];
      title = fullform[building] + ' (' + building + ')';

      var finished = 0;
      var in_progress = 0;
      for (var j = 0; j < dict_type[key].length; j++) {
        var curr_type = dict_type[key][j].type;
        if (curr_type == 'Ongoing') {
          in_progress += 1;
        } else {
          finished += 1;
        }
      }

      stats = finished + ' Completed' + ' | ' + in_progress + ' Upcoming';
    }

    heading.innerHTML += title + '<div class="stats">' + stats + '</div>';
    content.appendChild(heading);

    // container for the rooms in each building
    var rooms_in_building = document.createElement('DIV');
    rooms_in_building.className = 'rooms';
    content.appendChild(rooms_in_building);
    heading.addEventListener('click', addCards.bind(this, heading, dict_type, categories[i], type));
  }
}

Rooms.prototype.getCardsByInput = function(query) {
  return this.rooms.filter(function(room) {
    var room_string = room.building + room.room_number;
    return room_string.startsWith(query);
  });
}

var currently_open = [];
function addCards(heading, dict, category, type) {
  // create cards for the rooms and add to container
  var room_container = heading.nextSibling;
  if (currently_open.indexOf(heading) == -1) {
    dict[category].forEach(function(room) {
      room_container.appendChild(room.makeCard(type));
    });
    currently_open.push(heading);
    heading.classList.add('open');

    // animating the cards when they show up
    new Animate({
      elements: room_container.getElementsByClassName('card'),
      animation: 'move-in 0.3s ease-out',
      gap: 20
    }).start();
    heading.scrollIntoView();

  } else {
    closeHeading(heading);
  }
}

function closeHeading(heading) {
  var room_container = heading.nextSibling;
  room_container.innerHTML = '';
  currently_open.splice(currently_open.indexOf(heading), 1);
  heading.classList.remove('open');
}

var last_query = ''
function showSearchedCards(query) {
  query = query.toUpperCase().replace(/\s+/g, '');

  if (last_query != query) {
    last_query = query;
    var container = document.getElementById('content');
    container.innerHTML = '';
    if (!query == '') {
      try {
        document.getElementsByClassName('btn-active')[0].classList.remove('btn-active');
      }
      catch(err) {}

      var matched = room_objects.getCardsByInput(query);
      for (var i = 0; i < matched.length; i++) {
        container.appendChild(matched[i].makeCard());
      }

      // animating the cards when they show up
      new Animate({
        elements: container.getElementsByClassName('card'),
        animation: 'move-in 0.5s ease-out',
        gap: 30
      }).start();
    }
  }
}

var room_objects;
var animation;

$(function() {
  room_objects = new Rooms(rooms_dict);
  var default_sort = document.getElementsByClassName('default')[0].lastChild.textContent.toLowerCase();
  room_objects.showRoomsBy(default_sort);

  // An array containing all the rooms
  var rooms = [];

  for (var i = 0; i < room_objects.rooms.length; i++) {
    rooms.push(room_objects.rooms[i].building + room_objects.rooms[i].room_number);
  }

  // initiate the autocomplete function on the "search-input" element, and pass along the rooms array as possible autocomplete values
  autocomplete(document.getElementsByClassName("search-input")[0], rooms);

  animation = new Animate({
    elements: document.getElementsByClassName('category-heading'),
    animation: 'move-in 0.4s ease-out',
    gap: 70
  });
  // for animating the headings on page load
  animation.start();

  document.getElementById('date_button').addEventListener('click', function() {
    room_objects.showRoomsBy('date');
    // for animating the headings when date is clicked
    animation.start();
  });
  document.getElementById('building_button').addEventListener('click', function() {
    room_objects.showRoomsBy('building');
    // for animating the headings when building is clicked
    animation.start();
  });
});
