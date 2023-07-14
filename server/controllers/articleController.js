const Article = require('../models/articleModel');

// Create a new article
const createArticle = async (req, res) => {
  try {
    const { name, title, content, img } = req.body;
    const userId = req.params.uid;
    const article = await Article.create({ name, title, content, img, userId });
    if (!article) return res.status(500).json({ msg: 'Something went wrong' });
    res.status(201).json({ article });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all articles
const getAllArticle = async (req, res) => {
  try {
    const articles = await Article.find().populate('userId', 'name');
    if (!articles) return res.status(404).json({ msg: 'No articles found' });
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single article
const getSingleArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ msg: 'No articles found' });
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an article
const updateArticle = async (req, res) => {
  try {
    const { name, title, content, img } = req.body;

    const oldArticle = await Article.findById(req.params.id);
    if (!oldArticle) return res.status(404).json({ msg: 'No articles found' });
    if (oldArticle.userId.toString() !== req.params.uid)
      return res.status(401).json({ msg: "You can't update others articles" });

    const article = await Article.findByIdAndUpdate(
      req.params.id,
      { name, title, content, img },
      { new: true }
    );
    if (!article) return res.status(404).json({ msg: 'No articles found' });
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an article

const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    if (!article) return res.status(404).json({ msg: 'No articles found' });
    if (article.userId.toString() !== req.params.uid)
      return res.status(401).json({ msg: "You can't delete others articles" });
    await Article.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: 'Article deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deleteArticle,
  updateArticle,
  getSingleArticle,
  getAllArticle,
  createArticle,
};
