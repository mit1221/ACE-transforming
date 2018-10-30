$(document).ready(displayInfo);

function displayInfo() {
  var articleInfo = null;
  for (var i = 0; i < newsInfo.length; i++) {
    if (newsInfo[i].title == getPostTitle()) {
      articleInfo = newsInfo[i];
      break;
    }
  }

  var title = articleInfo.title;
  var author = articleInfo.author;
  var date = articleInfo.date;
  var contentHTML = articleInfo.content;
  var image = articleInfo.image;

  document.title = title;

  var mainTitle = '<h1 style="margin-top: 0">' + title + '</h1>';
  var dateAndAuthor = '<h6 style="margin-top: 30px; margin-bottom: 5px;">By <span class="name">' + author + '</span> <span style="color: #CCC">|</span> <span class="date">' +
  date + '</span></h6>';
  var imageHTML = image != undefined ? '<img src="images/news_images/' + image + '"/>' : '';

  var articleHTML = dateAndAuthor + mainTitle + '<div class="bar"></div>' + imageHTML + contentHTML;
  $('#full-article').html(articleHTML);
}

function getPostTitle() {
  return decodeURL(window.location.hash.substr(1));
}

function decodeURL(url) {
  return decodeURIComponent(url);
}
