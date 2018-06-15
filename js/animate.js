var ba_containers = [];
var resize_array = [];
var before_text_array = [];
var after_text_array = [];
var handle = [];
var animated_array = []

window.onload = function() {
  ba_containers = $('.ba-slider');
  resize_array = $('.resize');
  before_text_array = $('.before_text');
  after_text_array = $('.after_text');
  handle = $('.handle');

  for (var i = 0; i < ba_containers.length; i++) {
    animated_array.push(false);
  }

  animate();
  window.addEventListener('scroll', animate);

  for (var i = 0; i < before_text_array.length; i++) {
    before_text_array[i].addEventListener('click', move_slider.bind(this, i, 'before'));
    after_text_array[i].addEventListener('click', move_slider.bind(this, i, 'after'));
  }
}

function animate() {
  for (var i = 0; i < ba_containers.length; i++) {
    var child = ba_containers[i];
    var top = child.getBoundingClientRect().top;
    if (top < 400 && top > 0 && animated_array[i] == false) {
      play(resize_array[i]);
      play(before_text_array[i]);
      play(after_text_array[i]);
      play(handle[i]);
      animated_array[i] = true;
    }
  }
}

function play(el) {
  el.style.animationPlayState = 'running';
}

function move_slider(position, selected) {
  // 'selected' is either 'before' or 'after' only
  if (selected == 'before') {
    $('.resize:eq(' + position +')').animate({width: '95%'});
    $('.handle:eq(' + position +')').animate({left: '95%'});
  } else {
    $('.resize:eq(' + position +')').animate({width: '5%'});
    $('.handle:eq(' + position +')').animate({left: '5%'});
  }
}
