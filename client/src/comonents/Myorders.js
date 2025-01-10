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

        const response = await axios.get('http://127.0.0.1:4000/myorders',{
          headers: {
            Authorization: token,
          },
        });

        setOrders(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching orders:', err);
        setError('No orders available');
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div className="loading-text">Loading...</div>;
  }

  if (error) {
    return <div className="error-text">{error}</div>;
  }

  return (
    <div className="order-container">
      <h1 className="page-title">My Orders</h1>

      <div className="order-list">
        {orders.length > 0 ? (
          orders.slice().reverse().map((order, index) => (
            <div key={index} className="order-card">
              <div className="order-header">
                <p className="order-id">Order ID: {order._id}</p>
                <p className="order-date">{formatDate(order.date)}</p>
              </div>
              <div className="order-cost">
                <p>
                  Status: <span className="cost-value">{order.status || 'Pending'}</span>
                </p>
              </div>
              <div className="order-cost">
                <p>
                  Total Cost: <span className="cost-value">Rs. {order.totalCost}</span>
                </p>
              </div>
              <h3 className="ordered-items-title">Ordered Items:</h3>
              {order.cartItems && order.cartItems.length > 0 ? (
                <div className="item-list">
                  {order.cartItems.map((item, itemIndex) => (
                    <div key={itemIndex} className="item-card">
                      <img
                        src={item.imagePath}
                        alt={`product-${itemIndex}`}
                        className="item-image"
                      />
                      <div className="item-details">
                        <p className="item-name">{item.name}</p>
                        <p className="item-quantity">Quantity: {item.quantity}</p>
                        <p className="item-price">Price: Rs. {item.price}</p>
                        <p className="item-total">
                          Total: Rs. {(item.quantity * item.price).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-items-text">No items available for this order</p>
              )}
            </div>
          ))
        ) : (
          <p className="no-orders-text">No orders found</p>
        )}
      </div>

      <style>{`
        .order-container {
          padding: 40px;
          max-width: 1200px;
          margin: 0 auto;
          font-family: 'Arial', sans-serif;
        }

        .page-title {
          font-size: 3rem;
          font-weight: 800;
          text-align: center;
          color: #2c3e50;
          margin-bottom: 40px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .loading-text {
          text-align: center;
          font-size: 1.2rem;
          color: #34495e;
        }

        .error-text {
          text-align: center;
          font-size: 1.2rem;
          color: #e74c3c;
        }

        .order-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .order-card {
          background-color: #ffffff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          border: 1px solid #ecf0f1;
          transition: transform 0.3s ease-in-out;
        }

        .order-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .order-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid #ecf0f1;
        }

        .order-id {
          font-size: 1.1rem;
          color: #2c3e50;
        }

        .order-date {
          font-size: 0.9rem;
          color: #7f8c8d;
        }

        .order-cost {
          font-size: 1.1rem;
          color: #34495e;
          margin-bottom: 20px;
        }

        .cost-value {
          font-weight: 700;
          color: #27ae60;
        }

        .ordered-items-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #2c3e50;
        }

        .item-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .item-card {
          display: flex;
          background-color: #f9fafb;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
          transition: background-color 0.3s ease;
          border-left: 5px solid #27ae60;
        }

        .item-card:hover {
          background-color: #ecf0f1;
        }

        .item-image {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 8px;
          margin-right: 20px;
        }

        .item-details {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .item-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: #2c3e50;
        }

        .item-quantity,
        .item-price,
        .item-total {
          font-size: 1.1rem;
          color: #7f8c8d;
        }

        .no-items-text {
          color: #95a5a6;
          font-size: 1rem;
        }

        .no-orders-text {
          color: #95a5a6;
          text-align: center;
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .order-container {
            padding: 20px;
          }

          .page-title {
            font-size: 2.5rem;
          }

          .order-card {
            padding: 20px;
          }

          .item-card {
            flex-direction: column;
            align-items: center;
          }

          .item-image {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>
    </div>
  );
};

export default MyOrders;
