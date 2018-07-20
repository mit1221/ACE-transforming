$(document).ready(animate_big_cards);

var gap = 0.1;

function animate_big_cards() {
  var cards = document.getElementsByClassName('landing-card');
  var delay = 0;
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.animationDelay = delay + 's';
    delay += gap;
  }
}
