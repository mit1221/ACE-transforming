$(document).ready(news);

const POST_LENGTH = 300;

function news() {
  generatePosts();
  reduceNewsText();
}

function generatePosts() {
  var articleHTML = '';
  for (id in newsInfo) {
    var articleInfo = newsInfo[id];
    var title = articleInfo.title;
    var author = articleInfo.author;
    var date = articleInfo.date;
    var content = articleInfo.content;

    articleHTML +=
    `
    <div class="post">
      <h3>${title}</h3>
      <h6>By <span class="name">${author}</span> | <span class="date">${date}</span></h6>
      <p>${content}
      </p>
      <a href="full_article.html" class="link">Continue reading &#187;</a>
    </div>
    `;

    $('.news').html(articleHTML);
  }
}

function reduceNewsText() {
  $('.post p').each(function(){
    var originalText = this.innerText;

    if (originalText.length > POST_LENGTH) {
      var temp = originalText.substring(0, POST_LENGTH + 1);
      this.innerText = temp.substring(0, temp.lastIndexOf(" ")) + " ...";
    }
  });
}
