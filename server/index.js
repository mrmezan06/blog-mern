const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/DB');
const colors = require('colors');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running...' });
});

app.listen(PORT, () => {
  connectDB();
  console.log(
    `${colors.yellow.bold(`Server running on port`)} ${colors.white.bold(PORT)}`
  );
});
