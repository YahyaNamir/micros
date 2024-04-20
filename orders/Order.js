const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  customerID: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true
  },
  bookID: {
    type: mongoose.SchemaTypes.ObjectId,
    required: true
  },
  initialDate: {
    type: Date,
    required: true
  },
  deliveryDate: {
    type: Date,
    required: false
  }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
