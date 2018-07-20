var numbers_container;
var numbers;
var data = [];

$(document).ready(function() {
  // numbers_container = document.getElementsByClassName('numbers')[0];
  // numbers = document.getElementsByClassName('number');
  //
  // for (var i = 0; i < numbers.length; i++) {
  //   data.push(parseInt(numbers[i].dataset.number));
  //   numbers[i].textContent = '-';
  // }
  // setTimeout(function() {
  //   checkPosition();
  //   window.addEventListener('scroll', checkPosition);
  // }, 1000);
  // for the 3 numbers on the landing page
  var numbers = new AnimateOnScroll(
                  document.getElementsByClassName('number'),
                  function() {
                    chain_animate('number-box', 0.2);
                    // countUp();
                  }
                );
});

// var finished = false;
// function checkPosition() {
//   if (isInViewport(numbers_container) && !finished) {
//     finished = true;
//     window.removeEventListener('scroll', checkPosition);
//     chain_animate('number-box', 0.2);
//     countUp();
//   }
// }


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



function AnimateOnScroll(elements, animate_function) {
  this.isFinished = [];
  this.elements = elements;
  this.el_length = this.elements.length;
  this.animate_function = animate_function;
  this.scroll_handler = function() {
    for (var i = 0; i < this.el_length; i++) {
      if (isInViewport(this.elements[i]) && !isFinished[i]) {
        this.animate_function();
        isFinished[i] = true;
      }
    }

    // remove event listener if all the elements are animated
    if (this.isFinished.every(function(el) {return el == true})) {
      window.removeEventListener('scroll', this.scroll_handler);
    }
  };

  /* set all elements in the isFinished array to false since none of the
  animations are finished at initialization */
  for (var i = 0; i < this.elements.length; i++) {
    this.isFinished.push(false);
  }

  /* if the user has not scrolled yet and an animatable element is in view,
  the animation should happen */
  this.scroll_handler();

  this.start_listener();
}

AnimateOnScroll.prototype.start_listener = function() {
  window.addEventListener('scroll', this.scroll_handler);
}



// // for the comments on the landing landing_page_container
// var callout = new AnimateOnScroll()
//







// Determine if an element is in the visible viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  return rect.top > -(element.clientHeight) + (height / 3) && rect.top < height - (height / 3);
}
