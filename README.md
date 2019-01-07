// ASSIGNMENT SYNOPSIS

In this assignment, we were instructed to create a web app that lets users view and leave comments on the latest news. I chose to develop a web app that highlighted the most recent CES news, using Mongoose and Cheerio to scrape the Google News site.

// APP OVERVIEW

Whenever a user visits the site (https://ces-news.herokuapp.com/), the app scrapes stories from the Google News site (https://news.google.com/?hl=en-US&gl=US&ceid=US:en), specifically targeting CES news. Each scraped article displays a title, quick summary, a link to the article, and can be saved in a database for later viewing.

Users are also able to leave comments on the articles displayed and revisit them later. The comments are saved to the database as well and associated with their respectice articles. Users can furthermore delete comments left on articles.
