var numbers_container;
var numbers;
var data = [];
window.onload = function() {
  numbers_container = document.getElementsByClassName('numbers')[0];
  numbers = document.getElementsByClassName('number');

  for (var i = 0; i < numbers.length; i++) {
    data.push(parseInt(numbers[i].dataset.number));
  }
  setTimeout(function() {
    checkPosition();
    window.addEventListener('scroll', checkPosition);
  }, 1000);
}

var finished = false;
function checkPosition() {
  if (isInViewport(numbers_container) && !finished) {
    finished = true;
    countUp();
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
  var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  return rect.top > -(element.clientHeight) + (height / 3) && rect.top < height - (height / 3);
}
