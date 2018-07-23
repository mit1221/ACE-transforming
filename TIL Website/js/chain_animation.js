function chainAnimate(className, gap) {
  var elements = document.getElementsByClassName(className);
  var delay = 0;
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.animationDelay = delay + 's';
    delay += gap;
  }
}
