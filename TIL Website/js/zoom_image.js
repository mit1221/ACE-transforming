$(document).ready(function() {
  var images = document.getElementsByClassName('zoom-image');
  var modal = document.createElement('DIV');
  modal.className = 'modal';

  var content = document.createElement('DIV');
  content.className = 'modal_content';

  var modal_header = document.createElement('DIV');
  modal_header.className = 'modal_header';

  var span = document.createElement('SPAN');
  span.id = 'close';
  span.innerHTML = '&times;';
  modal_header.appendChild(span);

  var header_text = document.createElement('P');
  header_text.id = 'header_text';
  modal_header.appendChild(header_text);
  content.appendChild(modal_header);

  var body = document.createElement('DIV');
  body.className = 'modal_body';
  content.appendChild(body);

  modal.appendChild(content);
  document.body.appendChild(modal);

  function close_modal() {
    content.classList.add('animateout');
    setTimeout(function() {
      modal.style.display = "none";
      body.removeChild(body.firstChild);
      content.classList.remove('animateout');
    }, 300);
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    close_modal();
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      close_modal();
    }
  }
  for (var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function() {
      var large_img = document.createElement('IMG');
      large_img.src = this.src;
      modal.style.display = 'block';
      body.appendChild(large_img);
      header_text.innerHTML = this.alt;
    });
  }
});
