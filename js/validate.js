window.onload = function() {
  var name = document.forms['feedback']['name'];
  var email = document.forms['feedback']['email'];
  var classroom = document.forms['feedback']['classroom'];

  var elements = [name, email, classroom];

  // for (var i = 0; i < elements.length; i++) {
  //   elements[i].addEventListener('input', function(){
  //     if (this.classList.contains('validationError')) {
  //       this.classList.remove('validationError');
  //     }
  //   });
  // }
}

function validateForm() {
  var error = false;
  var name = document.forms['feedback']['name'];
  var email = document.forms['feedback']['email'];
  var classroom = document.forms['feedback']['classroom'];

  if (name.value == '') {
    validationError(name);
    error = true;
  }
  if (email.value == '' || badEmail(email.value)) {
    validationError(email);
    error = true;
  }
  if (classroom.value == '' || badFormat(classroom.value)) {
    validationError(classroom);
    error = true;
  }

  if (error) {
    // alert('Please fill in the following required fields.');
    return false;
  }
}

function validationError(el) {
  el.classList.add('validationError');
}

function badFormat(classroom) {
  if (classroom.length > 6) {
    return true;
  }
  var room_number = classroom.slice(2);
  if (isNaN(room_number)) {
    return true;
  };
}

function checkemail() {
  if (badEmail(document.getElementById('email'))) {
    validationError(document.getElementById('email'));
  } else {
    document.getElementById('email').classList.remove('validationError');
  }
}
function badEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !re.test(email);
}
