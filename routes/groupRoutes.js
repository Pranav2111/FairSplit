const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');
const authenticate = require('../middleware/authMiddleware');

router.post('/', authenticate, groupController.createGroup);
router.get('/:group_id', authenticate, groupController.getGroupById);
router.get('/', authenticate, groupController.getAllGroups);

module.exports = router;
