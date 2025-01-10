import React from 'react';
import { Link } from 'react-router-dom';

const OrderPlaced = () => {
  const estimatedDeliveryDate = new Date();
  estimatedDeliveryDate.setDate(estimatedDeliveryDate.getDate() + 5);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-200 text-center px-4">
      <div className="mb-6">
        <div className="flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full shadow-lg animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m0 6H7m6-6h6"
            />
          </svg>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-green-800 mb-4">Order Placed Successfully!</h1>

      <p className="text-lg text-gray-800 mb-6">
        Thank you for your purchase. Your order has been placed successfully.
        <br />
        Estimated delivery: <strong>{estimatedDeliveryDate.toDateString()}</strong>
      </p>

      <p className="text-gray-600 mb-6">
        You can track your order or view more details in your orders section.
      </p>

      <div className="flex space-x-4">
        <Link
          to="/my-orders"
          className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition"
        >
          View My Orders
        </Link>
        <Link
          to="/dashboard"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderPlaced;
 