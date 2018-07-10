window.addEventListener('scroll', checkPosition);

var numbers_container;
var numbers;
var data = [];
window.onload = function() {
  numbers_container = document.getElementsByClassName('numbers')[0];
  numbers = document.getElementsByClassName('number');

  for (var i = 0; i < numbers.length; i++) {
    data.push(parseInt(numbers[i].dataset.number));
  }
}

var finished = false;
function checkPosition() {
  if (isInViewport(numbers_container) && !finished) {
    countUp();
    finished = true;
  }
}


function countUp() {
  var j = 0;

  var timer = setInterval(function() {
    if (j > 99) {
      clearInterval(timer);
      for (var i = 0; i < numbers.length; i++) {
        numbers[i].textContent = data[i];
      }
    } else {
      for (var i = 0; i < numbers.length; i++) {
        numbers[i].textContent =  Math.ceil(j * (data[i] / 100));
      }
      j++;
    }
  }, 10);
}

// Determine if an element is in the visible viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return rect.top >= -300 && rect.top <= 500;
}
