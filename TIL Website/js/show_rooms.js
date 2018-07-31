var rooms_dict = {'AB': {'Completed': {}, 'Ongoing': {'114': '1/2-2019'}, 'Pilot': {}}, 'BA': {'Completed': {}, 'Ongoing': {'1130': '2/3-2019', '1160': '2/3-2020', '1170': '2/3-2020', '1180': '2/3-2020', '1190': '2/3-2019', '1200': '2/3-2019', '1210': '2/3-2020', '1220': '2/3-2020', '1230': '2/3-2020', '1240': '2/3-2020', '2139': '1/2-2019', '2145': '1/2-2019', '2155': '1/2-2019', '2165': '1/2-2019', '2175': '1/2-2019', '2185': '1/2-2019', '2195': '1/2-2019'}, 'Pilot': {}}, 'BF': {'Completed': {}, 'Ongoing': {'214': '4/1-2018', '215': '4/1-2018', '315': '4/1-2018', '316': '4/1-2018', '323': '4/1-2018'}, 'Pilot': {}}, 'BL': {'Completed': {}, 'Ongoing': {'113': '1/2-2021', '305': '1/2-2021', '306': '1/2-2021', '312': '1/2-2021', '327': '1/2-2021'}, 'Pilot': {}}, 'ES': {'Completed': {}, 'Ongoing': {'4001': '2/3-2019', 'B142': '2/3-2019'}, 'Pilot': {}}, 'GB': {'Completed': {}, 'Ongoing': {'303': '4/1-2018', '304': '4/1-2018'}, 'Pilot': {}}, 'HS': {'Completed': {}, 'Ongoing': {'106': '2/3-2020', '610': '1/2-2021', '614': '1/2-2021', '618': '1/2-2021', '696': '1/2-2021', '705': '1/2-2021', '715': '1/2-2021'}, 'Pilot': {'100': '2/3-2017', '108': '2/3-2017', '614': '2/3-2017', '618': '2/3-2017', '696': '2/3-2017', '705': '2/3-2017', '715': '2/3-2017'}}, 'LM': {'Completed': {}, 'Ongoing': {'123': '1/2-2020', '155': '1/2-2020', '157': '1/2-2020', '159': '2/3-2019'}, 'Pilot': {}}, 'MC': {'Completed': {}, 'Ongoing': {}, 'Pilot': {}}, 'MP': {'Completed': {}, 'Ongoing': {'202': '2/3-2019', '203': '2/3-2019'}, 'Pilot': {}}, 'MS': {'Completed': {}, 'Ongoing': {'2290': '2/3-2019', '2394': '2/3-2019', '3153': '4/1-2020', '3154': '4/1-2020', '3290': '2/3-2019'}, 'Pilot': {}}, 'OI': {'Completed': {}, 'Ongoing': {'11200': '2/3-2019', '2212': '4/1-2020', '2214': '4/1-2020', '2279': '4/1-2020', '2286': '4/1-2020', '2295': '4/1-2020', '2296': '4/1-2020', '3311': '4/1-2020', '4410': '4/1-2020', '4426': '4/1-2020', '5150': '4/1-2020', '5160': '4/1-2020', '5170': '4/1-2020', '5230': '4/1-2020', '5240': '4/1-2020', '5250': '4/1-2020', '8170': '4/1-2020', '8180': '4/1-2020', '8200': '4/1-2020', '8201': '4/1-2020', '8214': '2/3-2019', '8220': '2/3-2019', '8280': '2/3-2019', 'G162': '2/3-2019'}, 'Pilot': {'2205': '2/3-2017', '2211': '2/3-2017', '4414': '2/3-2017', '4416': '2/3-2017', '5260': '2/3-2017', '5270': '2/3-2017', '5280': '2/3-2017', '5290': '2/3-2017'}}, 'PB': {'Completed': {}, 'Ongoing': {'255': '2/3-2020', 'B150': '2/3-2020', 'B250': '2/3-2020'}, 'Pilot': {}}, 'SF': {'Completed': {}, 'Ongoing': {'1105': '2/3-2020', '3202': '2/3-2019'}, 'Pilot': {}}, 'SK': {'Completed': {}, 'Ongoing': {'100': '1/2-2021', '114': '1/2-2021', '218': '1/2-2021', '222': '1/2-2021', '346': '1/2-2021', '348': '1/2-2021', '418': '1/2-2021', '548': '1/2-2021', '702': '1/2-2021'}, 'Pilot': {}}, 'SS': {'Completed': {}, 'Ongoing': {'1070': '2/3-2019', '1078': '2/3-2019', '1080': '2/3-2019', '1083': '2/3-2019', '1084': '2/3-2019', '1085': '2/3-2019', '1086': '2/3-2019', '1087': '2/3-2019', '1088': '2/3-2019', '2101': '2/3-2019', '2104': '2/3-2019', '2105': '2/3-2019', '2106': '2/3-2019', '2108': '2/3-2019', '2110': '2/3-2019', '2112': '2/3-2019', '2114': '2/3-2019', '2116': '2/3-2019', '2119': '2/3-2019', '2120': '2/3-2019', '2125': '1/2-2021', '2135': '2/3-2019'}, 'Pilot': {}}, 'UC': {'Completed': {}, 'Ongoing': {'140': '2/3-2020', '144': '2/3-2020', '148': '2/3-2020', '152': '1/2-2021', '163': '4/1-2019', '175': '4/1-2019', '177': '4/1-2019', '244': '1/2-2020', '248': '1/2-2020', '255': '1/2-2020', '256': '1/2-2020', '257': '1/2-2020', '44': '4/1-2019', '51': '4/1-2019', '52': '4/1-2019', '53': '4/1-2019', '55': '4/1-2019', '57': '4/1-2019', '63': '4/1-2019', '65': '4/1-2019', '67': '4/1-2019', '69': '4/1-2019', '85': '4/1-2019', '87': '4/1-2019', 'B203': '1/2-2020', 'D301': '1/2-2020', 'F204': '1/2-2020'}, 'Pilot': {}}, 'WB': {'Completed': {}, 'Ongoing': {'119': '4/1-2018', '130': '4/1-2018', '219': '4/1-2018'}, 'Pilot': {}}, 'WE': {'Completed': {}, 'Ongoing': {'69': '2/3-2019', '74': '2/3-2019', '75': '2/3-2019', '76': '2/3-2019'}, 'Pilot': {}}, 'WI': {'Completed': {}, 'Ongoing': {'2006': '2/3-2019', '523': '4/1-2019', '524': '4/1-2019'}, 'Pilot': {}}, 'WW': {'Completed': {}, 'Ongoing': {'119': '1/2-2019', '120': '1/2-2019', '121': '1/2-2019', '126': '1/2-2019'}, 'Pilot': {}}};

var rooms_with_360_images = {'HS': ['100', '108'], 'OI': ['2211', '4414', '5270']};

var rooms_to_scope_dict = {'AP120': [True, True, True, True, True, True], 'AP124': [True, True, False, True, True, True], 'BA2135': [True, True, True, True, True, True], 'BA2159': [True, True, False, True, True, True], 'BA2179': [True, True, False, True, True, True], 'BAB024': [True, True, True, True, True, True], 'BAB025': [True, True, True, True, True, True], 'BAB026': [True, False, True, True, True, True], 'GB119': [False, False, False, False, True, True], 'GB120': [False, False, False, False, True, True], 'GB220': [False, False, False, False, True, True], 'GB221': [False, False, False, False, True, True], 'GB244': [False, False, False, False, True, True], 'GB248': [False, False, False, False, True, True], 'KP113': [True, False, False, True, True, False], 'MS2158': [True, True, True, True, True, True], 'OI10204': [True, True, True, True, True, True], 'OIC154': [True, True, False, True, True, True], 'BF214': [True, False, False, True, True, True], 'BF215': [True, True, True, True, True, True], 'BF315': [True, False, True, True, True, True], 'BF316': [True, False, True, True, True, True], 'BF323': [True, True, True, True, True, True], 'GB303': [True, True, True, True, True, True], 'GB304': [True, True, True, True, True, True], 'WB119': [True, True, True, True, True, True], 'WB130': [True, True, True, False, False, True], 'WB219': [True, True, True, False, False, True], 'AB114': [True, True, True, True, True, True], 'BA2139': [True, True, True, True, True, True], 'BA2145': [True, True, True, True, True, True], 'BA2155': [True, True, True, True, True, True], 'BA2165': [True, True, True, True, True, True], 'BA2175': [True, True, True, True, True, True], 'BA2185': [True, True, True, True, True, True], 'BA2195': [True, True, True, True, True, True], 'WW119': [True, True, True, False, False, True], 'WW120': [True, True, True, False, False, True], 'WW121': [True, True, True, False, False, True], 'WW126': [True, True, True, False, False, True], 'BA1130': [True, True, True, False, True, True], 'BA1190': [True, True, True, True, True, True], 'BA1200': [True, True, True, False, True, True], 'ES4001': [True, True, True, True, True, True], 'ESB142': [True, True, True, True, True, True], 'LM159': [True, False, False, True, True, True], 'MP202': [True, True, True, False, False, True], 'MP203': [True, True, True, False, False, True], 'MS2290': [True, False, True, True, True, True], 'MS2394': [True, False, False, True, True, True], 'MS3290': [True, False, False, True, True, True], 'OI11200': [True, False, True, True, True, True], 'OI8214': [True, True, False, True, True, True], 'OI8220': [True, True, False, True, True, True], 'OI8280': [True, True, True, True, True, True], 'OIG162': [True, True, True, True, True, True], 'SF3202': [True, True, True, True, True, True], 'SS1070': [True, True, True, False, False, True], 'SS1078': [True, False, False, True, True, True], 'SS1080': [True, True, True, True, True, True], 'SS1083': [True, True, True, True, True, True], 'SS1084': [True, True, True, True, True, True], 'SS1085': [True, True, True, True, True, True], 'SS1086': [True, True, True, True, True, True], 'SS1087': [True, True, True, True, True, True], 'SS1088': [True, False, False, True, True, True], 'SS2101': [True, True, False, True, True, True], 'SS2104': [True, True, False, True, True, True], 'SS2105': [True, True, True, False, False, True], 'SS2106': [True, True, True, False, False, True], 'SS2108': [True, True, True, False, False, True], 'SS2110': [True, True, True, False, False, True], 'SS2112': [True, False, False, True, True, True], 'SS2114': [True, False, False, True, True, True], 'SS2116': [True, False, True, True, True, True], 'SS2119': [True, False, True, True, True, True], 'SS2120': [True, True, False, True, True, True], 'SS2135': [True, False, True, False, False, True], 'WE69': [True, False, False, True, True, True], 'WE74': [True, False, False, True, True, True], 'WE75': [True, False, False, True, True, True], 'WE76': [True, True, False, True, True, True], 'WI2006': [True, False, False, True, True, True], 'UC163': [True, True, True, True, True, True], 'UC175': [True, False, True, True, True, True], 'UC177': [True, True, True, True, True, True], 'UC44': [True, True, False, True, True, True], 'UC51': [True, True, False, True, True, True], 'UC52': [True, True, True, False, False, True], 'UC53': [True, True, False, True, True, True], 'UC55': [True, True, False, True, True, True], 'UC57': [True, True, False, True, True, True], 'UC63': [True, True, False, True, True, True], 'UC65': [True, True, False, True, True, True], 'UC67': [True, True, False, True, True, True], 'UC69': [True, True, False, True, True, True], 'UC85': [True, True, True, True, True, True], 'UC87': [True, True, True, True, True, True], 'WI523': [True, True, False, False, False, True], 'WI524': [True, True, False, False, False, True], 'LM123': [True, False, False, True, True, True], 'LM155': [True, True, True, False, False, True], 'LM157': [True, True, True, False, False, True], 'UC244': [True, True, True, True, True, True], 'UC248': [True, True, True, True, True, True], 'UC255': [True, True, True, True, True, True], 'UC256': [True, True, True, True, True, True], 'UC257': [True, True, True, True, True, True], 'UCB203': [True, False, False, True, True, True], 'UCD301': [True, True, False, True, True, True], 'UCF204': [True, True, False, True, True, True], 'BA1160': [True, True, True, True, True, True], 'BA1170': [True, False, True, True, True, True], 'BA1180': [True, True, True, True, True, True], 'BA1210': [True, True, True, False, False, True], 'BA1220': [True, True, True, False, False, True], 'BA1230': [True, True, True, True, True, True], 'BA1240': [True, True, True, True, True, True], 'HS106': [True, True, True, True, True, True], 'PB255': [True, False, False, True, True, True], 'PBB150': [True, False, True, True, True, True], 'PBB250': [True, False, True, True, True, True], 'SF1105': [True, True, True, True, True, True], 'UC140': [True, True, True, True, True, True], 'UC144': [True, True, True, True, True, True], 'UC148': [True, True, True, True, True, True], 'MS3153': [True, False, False, True, True, True], 'MS3154': [True, False, False, True, True, True], 'OI2212': [True, True, True, True, True, True], 'OI2214': [True, False, False, True, True, True], 'OI2279': [True, False, True, True, True, True], 'OI2286': [True, True, False, True, True, True], 'OI2295': [True, False, True, False, False, True], 'OI2296': [True, False, False, True, True, True], 'OI3311': [True, False, False, True, True, True], 'OI4410': [True, True, True, True, True, True], 'OI4426': [True, False, False, True, True, True], 'OI5150': [True, False, False, True, True, True], 'OI5160': [True, False, False, True, True, True], 'OI5170': [True, False, False, True, True, True], 'OI5230': [True, False, False, True, True, True], 'OI5240': [True, False, False, True, True, True], 'OI5250': [True, False, False, True, True, True], 'OI8170': [True, False, False, True, True, True], 'OI8180': [True, False, False, True, True, True], 'OI8200': [True, False, False, True, True, True], 'OI8201': [True, False, False, True, True, True], 'BL113': [False, False, False, False, False, True], 'BL224/225': [False, False, False, False, False, True], 'BL305': [False, False, False, False, False, True], 'BL306': [False, False, False, False, False, True], 'BL312': [False, False, False, False, False, True], 'BL327': [False, False, False, False, False, True], 'HS610': [True, False, False, True, True, True], 'HS614': [False, False, False, False, False, True], 'HS618': [False, False, False, False, False, True], 'HS696': [False, False, False, False, False, True], 'HS705': [False, False, False, False, False, True], 'HS715': [False, False, False, False, False, True], 'SS2125': [False, False, False, False, False, True], 'SK100': [True, False, False, True, True, True], 'SK114': [True, False, True, True, True, True], 'SK218': [True, False, True, True, True, True], 'SK222': [True, True, True, True, True, True], 'SK346': [True, False, True, True, True, True], 'SK348': [True, False, True, True, True, True], 'SK418': [True, True, True, True, True, True], 'SK548': [True, True, True, True, True, True], 'SK702': [True, True, True, True, True, True], 'UC152': [False, False, False, False, False, True]};

var fullform = {'AB': 'Astronomy and Astrophysics', 'BA': 'Bahen Centre', 'BF': 'Bancroft Building', 'BL': 'Bissell Building', 'ES': 'Earth Sciences Centre', 'GB': 'Galbraith', 'HS': 'Health Sciences', 'LM': 'Lash Miller Chemical Labs', 'MC': 'Mechanical Engineering', 'MP': 'McLennan Physical Laboratories', 'MS': 'Medical Sciences', 'OI': 'OISE', 'PB': 'Pharmacy', 'SF': 'Sandford Fleming', 'SK': 'Social Work', 'SS': 'Sidney Smith Hall', 'UC': 'University College', 'WB': 'Wallberg', 'WE': 'Wetmore Hall - New College', 'WI': 'Wilson Hall - New College', 'WW': 'Woodsworth College'};

var seasons_fullform = {
  1: 'Winter',
  2: 'Spring',
  3: 'Summer',
  4: 'Fall'
};

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
      '<strong>Scheduled to be Completed:</strong> ' + formatted_date;
    container.appendChild(date_text);

    if (this.type == 'Ongoing') {
      // displays enlarged image of thumbnail with scope
      container.appendChild(addImages(this));
    } else {
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
      load360(room);
    }, 100);
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
    return building_a < building_b ? -1 : building_a > building_b ? 1 : (number_a - number_b);
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
      animation: 'move-in 0.5s ease-out',
      gap: 30
    }).start();
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
istener('click', function() {
    room_objects.showRoomsBy('building');
    // for animating the headings when building is clicked
    animation.start();
  });
});
