function chain_animate(className, gap) {
  var elements = document.getElementsByClassName(className);
  var delay = 0;
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.animationPlayState = 'running';
    elements[i].style.animationDelay = delay + 's';
    delay += gap;
  }
}
