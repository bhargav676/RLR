const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const middleware = require('./middleware'); 

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


const userSchema = new mongoose.Schema({
  username: String,
  mobile: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);

const checkoutSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  city: String,
  postalCode: String,
  phone: String,
  cartItems: Array,
  totalCost: Number,
  date: { type: Date, default: Date.now },
  status: { type: String, default: "Pending" },
});

const Checkout = mongoose.model('Checkout', checkoutSchema);

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
        email: exist.email,
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


app.post('/checkout', async (req, res) => {
  const { name, email, address, city, postalCode, phone, cartItems, totalCost } = req.body;

  if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
    return res.status(400).json({ message: 'No items in cart' });
  }

  try {
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

    await checkoutDetails.save();
    res.status(200).json({ message: 'Checkout successful' });
  } catch (error) {
    console.error('Error saving checkout details:', error);
    res.status(500).json({ message: 'Error saving checkout details' });
  }
});
      

app.get('/getorders', async (req, res) => {
  try {
    const orders = await Checkout.find({});
    if (orders.length === 0) {
      return res.status(404).json({ message: 'No orders found' });
    }
    res.status(200).json(orders);
  } catch (err) {
    console.error('Error fetching orders:', err);
    res.status(500).send({ error: 'Failed to fetch orders' });
  }
});


app.put('/update-order-status/:orderId', async (req, res) => {
  const { orderId } = req.params;
  const { status } = req.body;

  try {
    const order = await Checkout.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = status;
    await order.save();

    res.status(200).json({ message: 'Order status updated successfully', order });
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ message: 'Error updating order status' });
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




const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema);


app.post('/contact', async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

   
    const newContact = new Contact({
      name,
      phone,
      email,
      message
    });

    await newContact.save();

    res.status(201).json({ message: 'Contact data saved successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Failed to save contact data' });
  }
});



app.get('/contact-data', async (req, res) => {
  try {
    const contactData = await Contact.find(); 
    res.json(contactData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contact data' });
  }
});



app.get('/', (req, res) => {
  res.send('Welcome to the RLR Server!');
});


app.listen(4000, () => {
  console.log('Server running on port 4000'); 
});
