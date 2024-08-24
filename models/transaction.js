const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  description: { type: String },
  paid_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  split_details: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      amount: { type: Number, required: true },
    },
  ],
  group_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
