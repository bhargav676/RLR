const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const middleware = require('./middleware'); 
const Checkout=require('./checkout');

const app = express();
app.use(express.json());
app.use(cors());
 

mongoose.connect("mongodb+srv://322103312083:951509290@cluster0.pz9fe.mongodb.net/rlr")
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Error in database connection:', error.message);
  });

// Define user schema and model
const userSchema = new mongoose.Schema({
  username: String,
  mobile: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);





// SignUp Route
app.post('/signup', async (req, res) => {
  const { username, mobile, email, password } = req.body;
  try {
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new User({ username, email, password, mobile });
    await newUser.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ message: 'Error during registration' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const exist = await User.findOne({ email });
    if (!exist) {
      return res.status(400).json({ message: "User not found" });
    }
    if (exist.password !== password) {
      return res.status(400).json({ message: "Incorrect password" });
    }
    const payload = {
      user: {
        id: exist.id,
        email: exist.email,  // Add email to the payload
      },
    };
    jwt.sign(payload, 'jwtsecret', { expiresIn: 3600000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});


// Profile Route with middleware (for testing)
app.get('/profile', middleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.send(user);
  } catch (error) {
    console.error("Error in profile route:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Checkout Route (for placing an order)
app.post('/checkout', async (req, res) => {
  const { name, email, address, city, postalCode, phone, cartItems, totalCost } = req.body;

  // Check if cartItems is provided
  if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
    return res.status(400).json({ message: 'No items in cart' });
  }

  try {
    // Create a new Checkout entry
    const checkoutDetails = new Checkout({
      name,
      email,
      address,
      city,
      postalCode,
      phone,
      cartItems,
      totalCost,
    });

    // Save the checkout details to the database
    await checkoutDetails.save();

    // Send a success response
    res.status(200).json({ message: 'Checkout successful' });
  } catch (error) {
    // Log error and send a failure response
    console.error('Error saving checkout details:', error);
    res.status(500).json({ message: 'Error saving checkout details' });
  }
});
app.get('/myorders', middleware, async (req, res) => {
  try {
    const orders = await Checkout.find({ email: req.user.email });
    

    if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Server error while fetching orders' });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the RLR Server!');
});



app.listen(4000, () => {
  console.log('Server running on port 4000');
});
