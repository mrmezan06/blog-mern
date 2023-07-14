const User = require('../models/userModel');

// Create a new user
const createUser = async (req, res) => {
  try {
    const { username, password, name, email } = req.body;
    const user = await User.create({ username, password, name, email });
    // remove the password from the user object
    user.password = undefined;
    if (!user) return res.status(500).json({ msg: 'Something went wrong' });

    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single user

const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: 'No user found' });
    user.password = undefined;
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const match = await User.findById(req.params.id);
    if (match._id != req.params.id)
      return res.status(401).json({ msg: "You can't delete others user" });
    if (!match) return res.status(404).json({ msg: 'No user found' });
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a user
const updateUser = async (req, res) => {
  try {
    const match = await User.findById(req.params.id);
    if (match._id != req.params.id)
      return res.status(401).json({ msg: "You can't update others user" });
    const { username, password, name, email } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { username, password, name, email },
      { new: true }
    ).select('-password');
    if (!user) return res.status(404).json({ msg: 'No user found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser, deleteUser, updateUser, getSingleUser };
