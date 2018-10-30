$(document).ready(populatePage);

const POST_LENGTH = 300;
const LATEST_POSTS_TO_DISPLAY = 3;
var newsArray = [];

function populatePage() {
  for (var i = 0; i < newsInfo.length; i++) {
    newsArray.push(newsInfo[i]);
  }

  // sort articles by date
  newsArray.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
  });

  populateLatestNews();
  generatePosts();
}

function populateLatestNews() {
  var latestNewsHTML = '';

  for (var i = 0; i < LATEST_POSTS_TO_DISPLAY; i++) {
    var article = newsArray[i];
    var dateHTML = '<h6 style="margin-top: 30px; margin-bottom: 5px;"><span class="date">' +
    article.date + '</span></h6>';

    latestNewsHTML += '<div class="latest-news-item">' + dateHTML + '<a href="full_article.html#' + encodeURL(article.title) + '">'
    + '<h4 class="latest-news-text">' + article.title + '</h4>' + '</a></div>';
  }

  $('.latest-news-content').html(latestNewsHTML);
}


function generatePosts() {
  var articleHTML = '';

  // generate a post for each news item
  for (var i = 0; i < newsArray.length; i++) {
    var articleInfo = newsArray[i];

    var id = articleInfo.id;
    var title = articleInfo.title;
    var author = articleInfo.author;
    var date = articleInfo.date;
    var content = articleInfo.content;

    articleHTML +=
    '<div class="post"><h3>' + title + '</h3>' +
    '<h6>By <span class="name">' + author + ' </span><span style="color: #CCC">|</span> <span class="date">' +
    date + '</span></h6><p>' + reduceNewsText(content) + '</p>' +
    '<a href="full_article.html#' + encodeURL(title) + '" class="link" style="font-size: 0.9em">Continue reading &#187;</a></div>';
  }
  $('.news').html(articleHTML);

}

// display only the first POST_LENGTH characters of text
function reduceNewsText(text) {
  var originalText = text;

  if (originalText.length > POST_LENGTH) {
    var temp = originalText.substring(0, POST_LENGTH + 1);
    return temp.substring(0, temp.lastIndexOf(" ")) + " ...";
  }
}

// makes text URL friendly
function encodeURL(url) {
  return encodeURIComponent(url);
}
