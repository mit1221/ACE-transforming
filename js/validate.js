var valid_array = [];
var sumbit = null;

window.onload = function() {
  submit = document.forms['feedback']['submit'];
  var elements = [
    document.forms['feedback']['firstname'],
    document.forms['feedback']['lastname'],
    document.forms['feedback']['email'],
    document.forms['feedback']['classroom']
  ];

  for (var i = 0; i < elements.length; i++) {
    valid_array.push(false);
    elements[i].addEventListener('input', validateElement.bind(this, elements[i], i));
    elements[i].addEventListener('change', changeStyling.bind(this, elements[i]));
  }

  var text_inputs = document.querySelectorAll('#feedback input[type=text]');

  for (var i = 0; i < text_inputs.length; i++) {
    text_inputs[i].addEventListener('keypress', function(e) {
      var key = e.which || e.keyCode;
      if (key === 13 && !valid_array.every(function(curr) {return curr == true;}) && isValid(this)) { // 13 is the code for 'enter'
        errorDialog();
      }
    })
  }
}

var delay = 5000;
function errorDialog(el) {
  var error_text = '';
  if (el == undefined) {
    error_text = 'Please fill out the required fields correctly before submitting the form.'
  } else {
    error_text = el.name.charAt(0).toUpperCase() + el.name.slice(1) + ' was not entered correctly.';
  }
  
  var dialog = document.createElement('DIV');
  dialog.className = 'error-dialog';
  dialog.textContent = error_text;
  var dialogs = document.getElementById('error-dialogs');
  dialogs.appendChild(dialog);
  $('.error-dialog:last-child')
    .animate({opacity: 100}, delay - 1000)
    .animate({opacity: 0}, 1000);
  window.setTimeout(function() {
    dialogs.removeChild(dialogs.firstChild);
  }, delay);
}

function changeStyling(el) {
  if (!isValid(el)) {
    validationError(el);
    errorDialog(el);
  }
}


function validateElement(el, index) {
  if (isValid(el)) {
    valid_array[index] = true;
    validated(el);
  } else {
    valid_array[index] = false;
  }

  if (valid_array.every(function(curr) {return curr == true;})) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}


function isValid(el) {
  if (el.value == '') {
    return false;
  }
  if (el.name == 'email') {
    return isGoodEmail(el.value);
  };
  if (el.name == 'classroom') {
    return isGoodFormat(el.value);
  };
  return true;
}


function validationError(el) {
  el.classList.add('validationError');
}

function validated(el) {
  el.classList.remove('validationError');
}


function isGoodFormat(classroom) {
  if (classroom.length > 6 || classroom.length < 5) {
    return false;
  }

  var room_code = classroom.slice(0, 2);
  if (!/^[a-z]+$/i.test(room_code)) {
    return false;
  }

  var room_number = classroom.slice(2);
  if (isNaN(room_number)) {
    return false;
  };
  return true;
}

function isGoodEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
