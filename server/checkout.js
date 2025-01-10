const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  city: String,
  postalCode: String,
  phone: String,
  cartItems: [{
    name: String,
    price: Number,
    quantity: Number,
    imagePath: String,
  }],
  totalCost: Number,
  date: { 
    type: Date, 
    default: Date.now // Automatically sets the current date
  },
});

const Checkout = mongoose.model('Checkout', checkoutSchema);
module.exports = Checkout;
