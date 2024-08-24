const Transaction = require('../models/transaction');
const TransactionValueObject = require('../value-objects/transaction');

class TransactionService {
  async createTransaction(transactionData) {
    const transactionValueObject = new TransactionValueObject(transactionData);
    const transactionDataHash = transactionValueObject.to_hash();
    const newTransaction = new Transaction(transactionDataHash);
    return await newTransaction.save();
  }

  async getTransactionById(transactionId) {
    return await Transaction.findById(transactionId)
      .populate('paid_by')
      .populate('split_details.user');
  }

  async getAllTransactions() {
    return await Transaction.find()
      .populate('paid_by')
      .populate('split_details.user');
  }

  async addSplit(transactionId, splitData) {
    const transaction = await Transaction.findById(transactionId);
    transaction.split_details.push(splitData);
    return await transaction.save();
  }

  async updateSplit(transactionId, splitId, splitData) {
    const transaction = await Transaction.findById(transactionId);
    const split = transaction.split_details.id(splitId);
    if (!split) throw new Error('Split not found');
    Object.assign(split, splitData);
    return await transaction.save();
  }

  async deleteSplit(transactionId, splitId) {
    const transaction = await Transaction.findById(transactionId);
    transaction.split_details.id(splitId).remove();
    return await transaction.save();
  }
}

module.exports = new TransactionService();
