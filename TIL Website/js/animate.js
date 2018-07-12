var before_text_array = [];
var after_text_array = [];

function before_after_buttons() {
  before_text_array = $('.before_text');
  after_text_array = $('.after_text');

  for (var i = 0; i < before_text_array.length; i++) {
    before_text_array[i].addEventListener('click', move_slider.bind(this, i, 'before'));
    after_text_array[i].addEventListener('click', move_slider.bind(this, i, 'after'));
  }
}

function move_slider(position, selected) {
  // 'selected' is either 'before' or 'after' only
  if (selected == 'before') {
    $('.resize:eq(' + position + ')')
      .animate({ width: '98%' })
      .animate({ width: '94%' }, 200)
      .animate({ width: '95%' }, 100);
    $('.handle:eq(' + position + ')')
      .animate({ left: '98%' })
      .animate({ left: '94%' }, 200)
      .animate({ left: '95%' }, 100);
  } else {
    $('.resize:eq(' + position + ')')
      .animate({ width: '2%' })
      .animate({ width: '6%' }, 200)
      .animate({ width: '5%' }, 100);
    $('.handle:eq(' + position + ')')
      .animate({ left: '2%' })
      .animate({ left: '6%' }, 200)
      .animate({ left: '5%' }, 100);
  }
}
