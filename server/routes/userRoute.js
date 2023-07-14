const {
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const express = require('express');
const router = express.Router();

// Create a new user
router.post('/create', createUser);
// Get Single User
router.get('/get/:id', getSingleUser);
// Update a user
router.put('/update/:id', updateUser);
// Delete a user
router.delete('/delete/:id', deleteUser);

module.exports = router;
