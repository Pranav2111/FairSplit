class TransactionValueObject {
  constructor({
    amount,
    currency,
    description,
    paid_by,
    split_details,
    group_id,
  }) {
    this.amount = amount;
    this.currency = currency;
    this.description = description;
    this.paid_by = paid_by;
    this.split_details = split_details;
    this.group_id = group_id;
  }

  to_hash() {
    return {
      amount: this.amount,
      currency: this.currency,
      description: this.description,
      paid_by: this.paid_by,
      split_details: this.split_details,
      group_id: this.group_id,
    };
  }
}

module.exports = TransactionValueObject;
