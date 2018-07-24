function AnimateOnScroll(options) {
  // options is an object with 4 possible keys: elements, animation, gap, and extraAnimations
  // the elements parameter is required
  // if animation is not specified, the default is 'move-up 0.4s ease-out'
  // gap is not needed if there is only 1 element
  // extraAnimations (array), chainAnimation (boolean) are optional
  // chainAnimation: if any one of the elements is in the viewport, animate all elements
  if (options.elements == null) {
    throw new Error('The elements parameter is required.');
  }

  this.isFinished = [];
  this.elements = (HTMLCollection.prototype.isPrototypeOf(options.elements) ||
                  NodeList.prototype.isPrototypeOf(options.elements)) ?
                  options.elements : [options.elements];

  // make all elements invisible at the start
  for (var i = 0; i < this.elements.length; i++) {
    this.elements[i].style.opacity = 0;
  }
  if (options.gap != null) this.gap = options.gap;
  this.animateFunction = function(el) {
    var defaultAnimation = 'move-up 0.4s ease-out';
    animation = typeof options.animation !== 'undefined' ? options.animation : defaultAnimation;
    el.style.WebkitAnimation = animation + ' forwards';
    el.style.animation = animation + ' forwards';

    // call other animations, if any
    if (options.extraAnimations != null) {
      for (var i = 0; i < options.extraAnimations.length; i++) {
        options.extraAnimations[i](el);
      }
    }
  };
  this.chainAnimation = options.chainAnimation;
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

  function shouldAnimate(i) {
    return isInViewport(this.elements[i]) && !this.isFinished[i];
  }

  if (this.elements.length > 1) {
    // add all elements to the queue if any of them is in the viewport
    if (this.chainAnimation) {
      if (!this.isFinished[0] &&
      [].slice.call(this.elements).some(function(element) {return isInViewport(element)})) {
        for (var i = 0; i < this.elements.length; i++) {
          this.isFinished[i] = true;
          queue.push(this.elements[i]);
        }
      }
    }
    // add only the element that is in the viewport
    else {
      for (var i = 0; i < this.elements.length; i++) {
        if (shouldAnimate.call(this, i)) {
          this.isFinished[i] = true;
          queue.push(this.elements[i]);
        }
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
  } else { // with one element, there is no need for a queue to animate elements one by one
    if (shouldAnimate.call(this, 0)) {
      this.isFinished[0] = true;
      this.animateFunction(this.elements[0]);
    }
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


// making the 3 numbers count up
function countUp(element) {
  var numberElement = element.getElementsByClassName('number')[0];
  var number = parseInt(numberElement.getAttribute('data-number'));
  var i = 0;

  var timer = setInterval(function() {
    if (i > 100) {
      clearInterval(timer);
      numberElement.textContent = number;
    } else {
      numberElement.textContent =  Math.ceil(i * (number / 100));
      i++;
    }
  }, 10);
}

// typing animation for the text in the commments
function typewriter(element) {
  var quote = element.getElementsByClassName('quote')[0];
  quote.style.WebkitAnimation = 'move-in-right 0.7s forwards';
  quote.style.animation = 'move-in-right 0.7s forwards';
  
  var quoteText = quote.textContent;
  var letters = quoteText.split('');

  quote.style.height = quote.clientHeight + 'px';
  quote.textContent = '';

  var lettersCorrect = [];

  // remove unnecessary whitespace
  for (var i = 0; i < letters.length - 1; i++) {
    if (letters[i] != ' ' || letters[i + 1] != ' ') {
      lettersCorrect.push(letters[i]);
    }
  }
  lettersCorrect.push(letters[letters.length - 1])

  var i = 0;

  var timer = setInterval(function() {
    if (i >= lettersCorrect.length) {
      clearInterval(timer);
    } else {
      quote.textContent += lettersCorrect[i];
      i++;
    }
  }, 800 / lettersCorrect.length);
}

function quotes(element) {
  var quoteIcon = element.getElementsByClassName('quotes-icon')[0];
  quoteIcon.style.WebkitAnimation = 'boom 0.7s forwards';
  quoteIcon.style.WebkitAnimationDelay = '0.5s';
  quoteIcon.style.animation = 'boom 0.7s forwards';
  quoteIcon.style.animationDelay = '0.5s';
}
