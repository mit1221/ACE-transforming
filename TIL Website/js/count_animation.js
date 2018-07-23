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
  setTimeout(function() {
    var numbers = new AnimateOnScroll(
                    document.getElementsByClassName('number-box'), 0.2,
                    [countUp]
                  );
    numbers.start();
  }, 1000);

  // // for the comments on the landing landing_page_container
  // var callout = new AnimateOnScroll()
  //
});


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



function AnimateOnScroll(elements, gap, extraAnimations) {
  this.isFinished = [];
  this.delay = 0;
  this.gap = gap;
  this.elements = (HTMLCollection.prototype.isPrototypeOf(elements) ||
                  NodeList.prototype.isPrototypeOf(elements)) ?
                  elements : [elements];
  this.scrollHandlerBinded = this.scrollHandler.bind(this);

  /* set all elements in the isFinished array to false since none of the
  animations are finished at initialization */
  for (var i = 0; i < this.elements.length; i++) {
    this.isFinished.push(false);
  }
}

AnimateOnScroll.prototype.start = function() {
  /* if the user has not scrolled yet and an animatable element is in view,
  the animation should happen */
  this.scrollHandler();
  window.addEventListener('scroll', this.scrollHandlerBinded);
}

AnimateOnScroll.prototype.scrollHandler = function() {
  // whenever any of the elements come in the viewport, animate them in
  // var counter = 0;
  // var ref = this;
  // var timer = setInterval(function() {
  //   console.log('hi');
  //   if (counter >= ref.elements.length) {
  //     clearInterval(timer);
  //   } else {
  //     if (isInViewport(ref.elements[counter]) && !ref.isFinished[counter]) {
  //       ref.isFinished[counter] = true;
  //       ref.animateFunction(ref.elements[counter]);
  //     }
  //
  //     counter++;
  //   }
  // }, 200);

  for (var counter = 0; counter < this.elements.length; counter++) {
    if (isInViewport(this.elements[counter]) && !this.isFinished[counter]) {
      this.isFinished[counter] = true;
      this.animateFunction(this.elements[counter]);
    }
  }

  // remove event listener if all the elements are animated
  if (this.isFinished.every(function(val) {return val == true})) {
    window.removeEventListener('scroll', this.scrollHandlerBinded);
  }
}

AnimateOnScroll.prototype.animateFunction = function(element) {
  element.style.animationPlayState = 'running';
  element.style.animationDelay = this.delay + 's';
  this.delay += this.gap;
  if (extraAnimations !== undefined) {
    for (var i = 0; i < extraAnimations.length; i++) {
      extraAnimations[i](); // call all the other animations
    }
  }
}



// Determine if an element is in the visible viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  return rect.top > -(element.clientHeight) + (height / 3) && rect.top < height - (height / 3);
}
