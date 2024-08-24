const transactionService = require('../services/transactionService');

const createTransaction = async (req, res, next) => {
  try {
    const newTransaction = await transactionService.createTransaction(req.body);
    res.status(201).json(newTransaction);
  } catch (err) {
    next(err);
  }
};

const getTransactionById = async (req, res, next) => {
  try {
    const transaction = await transactionService.getTransactionById(
      req.params.transaction_id
    );
    if (!transaction)
      return res.status(404).json({ message: 'Transaction not found' });
    res.json(transaction);
  } catch (err) {
    next(err);
  }
};

const getAllTransactions = async (req, res, next) => {
  try {
    const transactions = await transactionService.getAllTransactions();
    res.json(transactions);
  } catch (err) {
    next(err);
  }
};

const addSplit = async (req, res, next) => {
  try {
    const updatedTransaction = await transactionService.addSplit(
      req.params.transaction_id,
      req.body
    );
    res.json(updatedTransaction);
  } catch (err) {
    next(err);
  }
};

const updateSplit = async (req, res, next) => {
  try {
    const updatedTransaction = await transactionService.updateSplit(
      req.params.transaction_id,
      req.params.split_id,
      req.body
    );
    res.json(updatedTransaction);
  } catch (err) {
    next(err);
  }
};

const deleteSplit = async (req, res, next) => {
  try {
    const updatedTransaction = await transactionService.deleteSplit(
      req.params.transaction_id,
      req.params.split_id
    );
    res.json(updatedTransaction);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createTransaction,
  getTransactionById,
  getAllTransactions,
  addSplit,
  updateSplit,
  deleteSplit,
};
