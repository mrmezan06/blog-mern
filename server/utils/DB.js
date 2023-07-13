const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config();
const colors = require('colors');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {});
    console.log(
      `${colors.red.bold(`MongoDB connected on`)} ${colors.white.bold(
        connection.connection.host
      )}`
    );
  } catch (error) {
    console.error(colors.red.bold(`Error: ${error.message}`));
    process.exit(1);
  }
};

module.exports = connectDB;
