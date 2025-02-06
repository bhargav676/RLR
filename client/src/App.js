import React, { createContext, useState, useEffect } from 'react';
import Signup from './comonents/Signup';
import Login from './comonents/Login';
import Main from './comonents/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main1 from './comonents/Main1';
import LampDemo from "./comonents/Start";
import Store from './comonents/Store';
import Wire from './comonents/Wire';
import Cart from './comonents/Cart';
import Buy from './comonents/Buy';
import Contact from './comonents/Contact';
import About from './comonents/About';
import Payment from './comonents/Payment';
import Checkout from './comonents/Checkout';
import Orderconf from './comonents/Orderconf';
import MyOrders from './comonents/Myorders';

export const store = createContext();

const App = () => {
  
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <store.Provider value={[token, setToken]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LampDemo />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Main />} />
          <Route path="/image-detail/:index" element={<Main1 />} />
          <Route path="/store" element={<Store />} />
          <Route path="/wire" element={<Wire />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/buy' element={<Buy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path='/pay' element={<Payment />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/thank-you' element={<Orderconf />} />
          <Route path='/my-orders' element={<MyOrders />} />
        </Routes>
      </BrowserRouter>
    </store.Provider>
  );
};

export default App;
