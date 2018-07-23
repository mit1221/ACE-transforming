// making the 3 numbers count up
function countUp(element) {
  var numberElement = element.getElementsByClassName('number')[0];
  var number = parseInt(numberElement.dataset.number);
  var j = 0;

  var timer = setInterval(function() {
    if (j > 69) {
      clearInterval(timer);
      numberElement.textContent = number;
    } else {
      numberElement.textContent =  Math.ceil(j * (number / 70));
      j++;
    }
  }, 10);
}



function AnimateOnScroll(elements, gap, animation, extraAnimations) {
  this.isFinished = [];
  this.elements = (HTMLCollection.prototype.isPrototypeOf(elements) ||
                  NodeList.prototype.isPrototypeOf(elements)) ?
                  elements : [elements];

  // make all elements invisible at the start
  for (var i = 0; i < this.elements.length; i++) {
    this.elements[i].style.opacity = 0;
  }

  this.gap = gap;
  this.animateFunction = function(el) {
    el.style.WebkitAnimation = animation + ' forwards';
    el.style.animation = animation + ' forwards';

    // call other animations, if any
    if (extraAnimations !== undefined) {
      for (var i = 0; i < extraAnimations.length; i++) {
        extraAnimations[i](el);
      }
    }
  };
  this.scrollHandlerBinded = this.scrollHandler.bind(this);

  /* set all elements in the isFinished array to false since none of the
  animations are finished at initialization */
  for (var i = 0; i < this.elements.length; i++) {
    this.isFinished.push(false);
  }

  this.start();
}

AnimateOnScroll.prototype.start = function() {
  /* if the user has not scrolled yet and an animatable element is in view,
  the animation should happen */
  this.scrollHandler();
  window.addEventListener('scroll', this.scrollHandlerBinded);
}

AnimateOnScroll.prototype.scrollHandler = function() {
  // whenever any of the elements come in the viewport, animate them in
  var queue = [];
  for (var counter = 0; counter < this.elements.length; counter++) {
    if (isInViewport(this.elements[counter]) && !this.isFinished[counter]) {
      this.isFinished[counter] = true;
      queue.push(this.elements[counter]);
    }
  }

  /* animate each element in the queue one by one until queue is empty
  if multiple elements are in the view */
  var counter = 0;
  while (queue.length > 0) {
    doSetTimeout(counter, queue.shift(), this);
    counter++;
  }

  // setting the gap between each element's animation
  function doSetTimeout(i, el, object) {
    setTimeout(function() {
      object.animateFunction(el);
    }, object.gap * i);
  }

  // remove event listener if all the elements are animated
  if (this.isFinished.every(function(val) {return val == true})) {
    window.removeEventListener('scroll', this.scrollHandlerBinded);
  }
}


// Determine if an element is in the visible viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

  return rect.top > -(element.clientHeight) + (height / 3) && rect.top < height - (height / 3);
}
