const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticate = require('../middleware/authMiddleware');

// Sign-up route
router.post('/signup', userController.signUp);

// Other user routes
router.post('/', authenticate, userController.createUser);
router.get('/:user_id', authenticate, userController.getUserById);
router.get('/', authenticate, userController.getAllUsers);

module.exports = router;
