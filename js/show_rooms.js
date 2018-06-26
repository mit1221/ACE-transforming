// var inverted_dict = {}
// function invert_rooms_dict() {
//   for (var building in temp) {
//     for (var type in temp[building]) {
//       for (var room in temp[building][type]) {
//         var date = temp[building][type][room];
//         if (inverted_dict[date] == undefined) {
//           inverted_dict[date] = [];
//         }
//         inverted_dict[date].push(room);
//       }
//     }
//   }
// }

var fullform = {
  'BA': 'Bahen Centre Information Tech',
  'HS': 'Health Sciences ',
  'MC': 'Mechanical Engineering ',
  'MP': 'McLennan Physical Laboratories',
  'OI': 'O.I.S.E.'
};

function Room(room_number, building, type, date) {
  this.room_number = room_number;
  this.building = building;
  this.type = type; //type is 'pilot', 'completed', or 'ongoing'

  if (type == 'ongoing') {
    this.scheduled_date = date;
  } else {
    this.completed_date = date;
  }
  // format: 'Season1/Season2-Year' Ex: 'F/W-2018'
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

var rooms = {
  'OI': {
    'Pilot': {
      '2205': 'Date of completion',
      '2211': 'Date of completion',
      '4414': 'Date of completion',
      '4416': 'Date of completion',
      '5260': 'Date of completion',
      '5270': 'Date of completion',
      '5280': 'Date of completion',
      '5290': 'Date of completion'
    },
    'Completed': {
      '111': 'Date of completion',
      '222': 'Date of completion'
    },
    'Ongoing': {
      '000': 'Scheduled date',
      '333': 'Scheduled date'
    }
  },
  'HS': {
    'Pilot': {
      '100': 'Date of completion',
      '108': 'Date of completion',
      '614': 'Date of completion',
      '618': 'Date of completion',
      '696': 'Date of completion',
      '705': 'Date of completion',
      '715': 'Date of completion'
    },
    'Completed': {

    },
    'Ongoing': {

    }
  },
  'BA': {
    'Pilot': {

    },
    'Completed': {

    },
    'Ongoing': {

    }
  }
};

var temp = {
  'OI': {
    'Pilot': {
      '2205': 'W/Sp-2010',
      '2211': 'Sp/S-2011',
      '4414': 'S/F-2012',
    },
    'Completed': {
      '111': 'Sp/S-2011',
      '222': 'S/F-2012'
    },
    'Ongoing': {
      '000': 'F/W-2019',
      '333': 'W/Sp-2021'
    }
  },
  'HS': {
    'Pilot': {
      '100': 'W/Sp-2010',
      '108': 'F/W-2013',
    },
    'Completed': {
      '-111': 'F/W-2013'
    },
    'Ongoing': {
      '-222': 'W/Sp-2021',
      '-333': 'F/W-2019'
    }
  }
};

$(function() {
  show_rooms_by('date');
  var roomss = [new Room(5260, 'OI', 'completed', 'W/F-2015'), new Room(100, 'HS', 'completed', 'W/F-2013'), new Room(5280, 'OI', 'completed', 'W/F-2010')];
  document.getElementById('content').appendChild(roomss[1].make_card());
});

var current_type = null;
function show_rooms_by(type) {
  // type is either 'date' or 'building'
  var content = document.getElementById('content');

  if (type == 'building') {
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


        content.appendChild(rooms_in_building);
      }
    }
  }

  current_type = type;
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

    if (this.type == 'ongoing') {
      container.appendChild(addImage(this));
    } else {
      container.appendChild(addContent(this));
    }
    card.parentElement.appendChild(container);
    add_sliding_functionality(); // CHANGE THE LOCATION OF THIS FUNCTION CALL!!
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

  if (room.type == 'ongoing') {
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
