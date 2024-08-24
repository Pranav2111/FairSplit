const mongoose = require('mongoose');
const ENV = require('./env');

const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
