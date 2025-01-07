import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalCost } = location.state || {};
  console.log('Cart Items:', cartItems);

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Assuming you have a user authentication token (JWT)
    const token = localStorage.getItem('token');
    
    try {
      const response = await fetch('https://rlrserver.vercel.app/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Use token if authenticated
        },
        body: JSON.stringify({
          ...userDetails,
          cartItems,
          totalCost,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Checkout Successful!');
        navigate('/thank-you'); // Redirect to Thank You page
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="container mx-auto p-6 bg-gray-50">
      <h1 className="font-bold text-4xl text-left mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={userDetails.name}
            onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            value={userDetails.email}
            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Address"
            value={userDetails.address}
            onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="City"
            value={userDetails.city}
            onChange={(e) => setUserDetails({ ...userDetails, city: e.target.value })}
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Postal Code"
            value={userDetails.postalCode}
            onChange={(e) => setUserDetails({ ...userDetails, postalCode: e.target.value })}
            className="p-3 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Phone"
            value={userDetails.phone}
            onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
            className="p-3 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-6">
          <span className="font-semibold text-lg">Total Cost: Rs. {totalCost}</span>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-400 transition"
          >
            Complete Checkout
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
