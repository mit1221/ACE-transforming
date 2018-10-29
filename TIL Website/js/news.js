$(document).ready(generatePosts);

const POST_LENGTH = 300;

function generatePosts() {
  var articleHTML = '';
  for (id in newsInfo) {
    var articleInfo = newsInfo[id];
    var title = articleInfo.title;
    var author = articleInfo.author;
    var date = articleInfo.date;
    var content = articleInfo.content;

    articleHTML +=
    '<div class="post"><h3>' + title + '</h3>' +
    '<h6>By <span class="name">' + author + ' </span><span style="color: #CCC">|</span> <span class="date">' +
    date + '</span></h6><p>' + reduceNewsText(content) + '</p>' +
    '<a href="full_article.html#' + id + '" class="link" style="font-size: 0.9em">Continue reading &#187;</a></div>';
  }
  $('.news').html(articleHTML);

}

function reduceNewsText(text) {
  var originalText = text;

  if (originalText.length > POST_LENGTH) {
    var temp = originalText.substring(0, POST_LENGTH + 1);
    return temp.substring(0, temp.lastIndexOf(" ")) + " ...";
  }
}
