$(document).ready(displayInfo);

function displayInfo() {
  var articleInfo = newsInfo[getPostId()];
  var title = articleInfo.title;
  var author = articleInfo.author;
  var date = articleInfo.date;
  var content = articleInfo.content;
  var image = articleInfo.image;

  var mainTitle = '<h1 style="margin-top: 0">' + title + '</h1>';
  var dateAndAuthor = '<h6 style="margin-top: 30px; margin-bottom: 5px;">By <span class="name">' + author + '</span> <span style="color: #CCC">|</span> <span class="date">' +
  date + '</span></h6>';
  var imageHTML = image != undefined ? '<img src="images/news_images/' + image + '"/>' : '';
  var contentHTML = formatText(content);

  var articleHTML = dateAndAuthor + mainTitle + '<div class="bar"></div>' + imageHTML + contentHTML;
  $('#full-article').html(articleHTML);
}

function getPostId() {
  return window.location.hash.substr(1);
}

function formatText(text) {
  return '<p>' + text + '</p>';
}
