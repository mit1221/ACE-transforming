$(document).ready(add_toggle_functionality);

function add_toggle_functionality() {
  var button_groups = document.getElementsByClassName('button-group');
  for (var i = 0; i < button_groups.length; i++) {
    var buttons = button_groups[i].children;

    var no_button_active = true;
    for (var j = 0; j < buttons.length; j++) {
      if (buttons[j].classList.contains('btn-active')) {
        no_button_active = false;
      }
    }

    for (var j = 0; j < buttons.length; j++) {
      buttons[j].addEventListener("click", make_active.bind(this, buttons, j));
      // default selected button
      if (buttons[j].classList.contains('default') && no_button_active) {
        make_active(buttons, j);
      }
    }
  }
};

function make_active(buttons, number) {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('btn-active');
  }
  buttons[number].classList.add('btn-active');
}
