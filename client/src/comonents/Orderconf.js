import React from 'react';
import { Link } from 'react-router-dom';

const OrderPlaced = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Order Placed Successfully!</h1>
      <p className="text-lg text-gray-700 mb-8">
        Thank you for your purchase. Your order has been placed successfully.
      </p>
      <Link
        to="/my-orders"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
        View My Orders
      </Link>
    </div>
  );
};

export default OrderPlaced;
