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
  }

  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('input', validateElement.bind(this, elements[i], i));
  }
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('change', changeStyling.bind(this, elements[i]));
  }
}


function changeStyling(el) {
  if (!isValid(el)) {
    validationError(el);
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
