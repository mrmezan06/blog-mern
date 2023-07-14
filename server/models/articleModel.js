const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true, // username must be unique
    },
    title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },
    content: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
