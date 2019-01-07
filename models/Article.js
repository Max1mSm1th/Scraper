var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// TITLE, LINK, AND SUMMARY ARE ALL REQUIRED WITHIN THE APPLICATION. ANYTHING ELSE DOES NOT NEED TO BE COLLECTED

var ArticleSchema = new Schema({

  title: {
    type: String,
    required: true,
    unique: true
  },

  link: {
    type: String,
    required: true
  },

  date: String,
  saved: {
    type: Boolean,
    default: false
  },

   summary: {
    type: String,
    required: true
  },

  note: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
