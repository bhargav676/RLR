import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { imagePath, productname, productprice } = location.state || {};

  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    if (imagePath && productname && productprice) {
      const newItem = {
        id: Date.now(),
        imagePath,
        name: productname,
        price: Number(productprice),
        quantity: 1,
      };

      setCartItems((prevItems) => {
        const isItemAlreadyInCart = prevItems.some(item => item.name === newItem.name);
        if (!isItemAlreadyInCart) {
          const updatedItems = [...prevItems, newItem];
          localStorage.setItem('cartItems', JSON.stringify(updatedItems)); 
          return updatedItems;
        }
        return prevItems;
      });
    }
  }, [imagePath, productname, productprice]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemove = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleIncreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
  };

  const handleDecreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };
  const handleCheckout = () => {
    navigate('/checkout', {
      state: {
        cartItems,
        totalCost: calculateTotal(),
      }
    });
  };
  

  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <h1 className="font-bold text-4xl text-left mb-8">Cart</h1>
      <p className="text-lg text-gray-600 mb-4">({cartItems.length} item{cartItems.length !== 1 ? 's' : ''})</p>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center space-y-6">
          <p className="text-center text-xl font-semibold">Your cart is currently empty</p>
          <div className="flex space-x-4">
            <button onClick={() => navigate('/dashboard')} className="w-40 bg-[rgba(36,174,241,255)] text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-400 transition">Home</button>
            <button onClick={() => navigate('/store')} className="w-40 bg-[rgba(36,174,241,255)] text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-400 transition">Shop All</button>
            <button onClick={() => navigate('/about')} className="w-40 bg-[rgba(36,174,241,255)] text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-400 transition">About Us</button>
          </div>
        </div>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex items-start border-b pb-6 mb-6">
            <img src={item.imagePath} alt="Product" className="w-24 h-24 object-cover rounded-md shadow-md" />
            <div className="flex flex-col space-y-4 mx-4">
              <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
              <div className="flex items-center space-x-4">
                <p className="text-lg font-semibold">Quantity: {item.quantity}</p>
                <div className="flex items-center space-x-2">
                  <button className="bg-gray-200 text-gray-800 rounded px-3 py-1 hover:bg-gray-300 transition" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="bg-gray-200 text-gray-800 rounded px-3 py-1 hover:bg-gray-300 transition" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                </div>
              </div>
              <div className="text-lg font-semibold text-gray-800">Cost: Rs. {(item.price * item.quantity).toFixed(2)}</div>
              <button className="text-sm text-red-500 hover:underline mt-2" onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <p className="text-sm text-center text-gray-500">FREE shipping will be applied at checkout</p>
          <hr className="my-4" />
          <div className="flex justify-between items-center">
            <span className="font-semibold text-lg">SUBTOTAL</span>
            <span className="text-2xl font-bold text-gray-800">Rs. {calculateTotal()}</span>
          </div> 
          <hr className="my-4" />
          <button className="w-full bg-[rgba(36,174,241,255)] text-white font-semibold py-3 rounded-lg hover:bg-blue-400 transition" onClick={handleCheckout}>Checkout</button>
<p className="text-sm text-center text-gray-500 mt-2">Shipping & taxes calculated at checkout</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
