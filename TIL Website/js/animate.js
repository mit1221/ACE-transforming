var beforeTextArray = [];
var afterTextArray = [];

function beforeAfterButtons() {
  beforeTextArray = $('.before_text');
  afterTextArray = $('.after_text');

  for (var i = 0; i < beforeTextArray.length; i++) {
    beforeTextArray[i].addEventListener('click', moveSlider.bind(this, i, 'before'));
    afterTextArray[i].addEventListener('click', moveSlider.bind(this, i, 'after'));
  }
}

function moveSlider(position, selected) {
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
