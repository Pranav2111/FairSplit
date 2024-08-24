const express = require('express');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes'); // Import the consolidated routes

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Use routes
app.use('/api', routes); // Mount the router on '/api'

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
