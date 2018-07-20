var className = '.callout';

$(document).ready(function() {
  var elements = $(className);
  animate_on_scroll();
  window.addEventListener('scroll', animate_on_scroll);

  var finished_animation = false;
  function animate_on_scroll() {
    if ((isInViewport(elements[0]) || isInViewport(elements[1])) && !finished_animation) {
      // $(className + ':eq(0)').animate({marginLeft: '0', opacity: 1}, 600);
      // setTimeout(function() {
      //   $(className + ':eq(1)').animate({marginLeft: '0', opacity: 1}, 600);
      // }, 100);
      chain_animate('callout', 0.2);
      finished_animation = true;
      window.removeEventListener('scroll', animate_on_scroll);
    }
  }
});
