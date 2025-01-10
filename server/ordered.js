const mongoose = require('mongoose');

// Define the schema for the Order model
const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    totalCost: { type: Number, required: true },
    status: {
      type: String,
      enum: ['pending', 'processed', 'shipped', 'delivered'],
      default: 'pending',
    },
    createdAt: { type: Date, default: Date.now },
    cartItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        imagePath: { type: String, required: true },
      },
    ],
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the Order model based on the schema
const Order = mongoose.model('Order', orderSchema);

// Export the model
module.exports = Order;
