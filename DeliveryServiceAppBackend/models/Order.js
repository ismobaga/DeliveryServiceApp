// models/Order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  senderName: {
    type: String,
    required: true,
  },
  senderAddress: {
    type: String,
    required: true,
  },
  recipientName: {
    type: String,
    required: true,
  },
  recipientAddress: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Order', OrderSchema);
