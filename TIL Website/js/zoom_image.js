$(document).ready(function() {
  var images = document.getElementsByClassName('zoom-image');
  var cards = document.getElementsByClassName('zoom-card');
  var modal = document.createElement('DIV');
  modal.className = 'modal';

  var content = document.createElement('DIV');
  content.className = 'modal_content';

  var modalHeader = document.createElement('DIV');
  modalHeader.className = 'modal_header';

  // 'x' button
  var close = document.createElement('I');
  close.className = 'material-icons close';
  close.innerHTML = 'close';
  modalHeader.appendChild(close);

  // text for the header of the modal
  var headerText = document.createElement('P');
  headerText.id = 'header_text';
  modalHeader.appendChild(headerText);
  content.appendChild(modalHeader);

  var body = document.createElement('DIV');
  body.className = 'modal_body';
  content.appendChild(body);

  modal.appendChild(content);
  document.body.appendChild(modal);

  function closeModal() {
    content.classList.add('animateout');
    setTimeout(function() {
      modal.style.display = "none";
      body.removeChild(body.firstChild);
      content.classList.remove('animateout');
      document.body.style.overflow = 'auto';
    }, 300);
  }

  // When the user clicks on <span> (x), close the modal
  close.onclick = function() {
    closeModal();
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  }

  // clicking on an image to enlarge it
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
      var largeImg = document.createElement('IMG');
      largeImg.src = this.src;
      modal.style.display = 'block';
      body.appendChild(largeImg);
      headerText.innerHTML = this.alt;
      document.body.style.overflow = 'hidden';
    });
  }

  // clicking on a card to enlarge it
  for (var i = 0; i < cards.length; i++) {
    cards[i].parentElement.addEventListener("click", function() {
      var largeImg = document.createElement('IMG');
      largeImg.src = this.children[0].src;
      modal.style.display = 'block';
      body.appendChild(largeImg);
      headerText.innerHTML = this.children[1].innerHTML;
      document.body.style.overflow = 'hidden';
    });
  }
});
