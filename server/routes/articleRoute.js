const express = require('express');

const {
  deleteArticle,
  getSingleArticle,
  updateArticle,
  getAllArticle,
  createArticle,
} = require('../controllers/articleController');

const router = express.Router();

// Create a new user
router.post('/create/:uid', createArticle);
// Get all Articles
router.get('/get/all', getAllArticle);

// Get Single Article
router.get('/get/:id', getSingleArticle);

// Update an Article
router.put('/update/:id/:uid', updateArticle);

// Delete an Article
router.delete('/delete/:id/:uid', deleteArticle);

module.exports = router;
