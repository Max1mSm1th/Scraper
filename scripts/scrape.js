var request = require("request");
var cheerio = require("cheerio");

var scrape = function(callback) {

    var articlesArr = [];
    request("https://news.google.com/search?q=CES&hl=en-US&gl=US&ceid=US%3Aen", function(error, response, html) {

    var $ = cheerio.load(html);
    $("article.MQsxIb").each(function(i, element) {

    var result = {};

// SEARCHING FOR THE TITLE, LINK, AND SUMMARY WITHIN EACH ARTICLE LINK

          result.title = $(this).find("h3").text();
          result.link = $(this).find("a").attr("href");
          result.summary = $(this).find("p").text()

          if (result.title !== "" && result.link !== "" && result.summary !== "") {
              articlesArr.push(result);
          }
      });
      callback(articlesArr);
  });
};

module.exports = scrape;
