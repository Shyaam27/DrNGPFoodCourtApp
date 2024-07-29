const mongoose = require('mongoose');

const smsSchema = new mongoose.Schema({
  recipient: String,
  message: String,
  paymentStatus: Boolean,
  upiId: String,
});

module.exports = mongoose.model('SMS', smsSchema);
