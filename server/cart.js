const mongoose=require('mongoose');
const cartSchema = new mongoose.Schema({
    userId: String,
    items: [
      {
        id: String,
        imagePath: String,
        name: String,
        price: Number,
        quantity: Number,
      },
    ],
  });
 const Cart = mongoose.model('Cart', cartSchema);
 module.exports=Cart;