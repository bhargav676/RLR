import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return isNaN(date) ? 'Invalid Date' : date.toLocaleDateString();
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          setError('No token found');
          setLoading(false);
          return;
        }

        const response = await axios.get('https://rlrserver.vercel.app/myorders', {
          headers: {
            'Authorization': token,
          },
        });

        console.log(response.data);  // Log the response data for debugging

        setOrders(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('no orders avalible');
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>My Orders</h1>
      {orders.length > 0 ? (
        <ul>
          {orders.map((order, index) => (
            <li key={index} className="order-item">
              <p>Order ID: {order._id}</p>
              <p>Order Date: {formatDate(order.date)}</p>
              <p>Total Cost: Rs. {order.totalCost}</p>
              <h3>Ordered Items:</h3>
              {order.cartItems && order.cartItems.length > 0 ? (
                <ul>
                  {order.cartItems.map((item, itemIndex) => (
                    <li key={itemIndex} className="order-item-details">
                      <img src={item.imagePath} alt={`product-${itemIndex}`} className="order-item-image" />
                      <p>Product Name: {item.name}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Price: Rs. {item.price}</p>
                      <p>Total: Rs. {(item.quantity * item.price).toFixed(2)}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No items available for this order</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found</p>
      )}
    </div>
  );
};

export default MyOrders;
