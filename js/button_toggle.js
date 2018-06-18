window.onload = function() {
  /* number is 0 for completed rooms or 1 for ongoing rooms */
  var button_groups = document.getElementsByClassName('button-group');
  for (var i = 0; i < button_groups.length; i++) {
    var buttons = button_groups[i].children;
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].addEventListener("click", make_active.bind(this, buttons, j));
    }
  }
}

function make_active(buttons, number) {
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].classList.contains('btn-active')) {
      buttons[i].classList.remove('btn-active');
    }
  }
  buttons[number].classList.add('btn-active');
}
