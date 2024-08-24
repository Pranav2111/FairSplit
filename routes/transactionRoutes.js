const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const authenticate = require('../middleware/authMiddleware');

router.post('/', authenticate, transactionController.createTransaction);
router.get(
  '/:transaction_id',
  authenticate,
  transactionController.getTransactionById
);
router.get('/', authenticate, transactionController.getAllTransactions);
router.post(
  '/:transaction_id/splits',
  authenticate,
  transactionController.addSplit
);
router.put(
  '/:transaction_id/splits/:split_id',
  authenticate,
  transactionController.updateSplit
);
router.delete(
  '/:transaction_id/splits/:split_id',
  authenticate,
  transactionController.deleteSplit
);

module.exports = router;
