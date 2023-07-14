const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/DB');
const colors = require('colors');
dotenv.config();

const userRoute = require('./routes/userRoute');
const articleRoute = require('./routes/articleRoute');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.status(200).json({ message: 'API is running...' });
});

// Middleware
app.use(express.json());

// Article Routes
app.use('/api/article', articleRoute);
// User Routes
app.use('/api/user', userRoute);


app.listen(PORT, () => {
  connectDB();
  console.log(
    `${colors.yellow.bold(`Server running on port`)} ${colors.white.bold(PORT)}`
  );
});
