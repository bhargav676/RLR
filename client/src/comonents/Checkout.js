import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaHome, FaCity, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

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

  const [formValid, setFormValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!userDetails.name || !userDetails.email || !userDetails.address || !userDetails.city || !userDetails.postalCode || !userDetails.phone) {
      setFormValid(false);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:4000/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...userDetails,
          cartItems,
          totalCost,
        }),
      });

      const result = await response.json();
      setIsLoading(false);

      if (response.ok) {
        navigate('/thank-you');
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      setIsLoading(false);
      alert('Error: ' + error.message);
    }
  };

  const styles = {
    container: {
      backgroundColor: '#ffffff',
      padding: '30px',
      paddingLeft: '80px',
      maxWidth: '500px',
      margin: '0 auto',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
    },
    heading: {
      fontSize: '32px',
      fontWeight: 'bold',
      marginBottom: '30px',
      color: '#2d3748',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    inputContainer: {
      position: 'relative',
    },
    input: {
      padding: '12px 10px',
      paddingLeft: '40px',
      width: '90%',
      maxWidth: '450px',
      borderBottom: '3px solid #3182ce',
      outline: 'none',
      transition: 'border-color 0.3s ease',
      color: '#4a5568',
      margin: '0 auto',
    },
    icon: {
      position: 'absolute',
      left: '10px',
      top: '16px',
      color: '#3182ce',
    },
    errorMessage: {
      color: '#f56565',
      fontSize: '14px',
    },
    totalCost: {
      marginTop: '30px',
      color: '#4a5568',
      fontWeight: '600',
    },
    totalCostValue: {
      fontSize: '18px',
      color: 'green',
    },
    submitButton: {
      width: 'auto',
      padding: '16px',
      fontSize: '18px',
      backgroundColor: '#3182ce',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    submitButtonHover: {
      backgroundColor: '#4299e1',
    },
    loadingSpinner: {
      marginTop: '20px',
      border: '4px solid #f3f3f3',
      borderTop: '4px solid #3182ce',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      animation: 'spin 2s linear infinite',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Checkout</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputContainer}>
          <FaUser style={styles.icon} />
          <input
            type="text"
            placeholder="Name"
            value={userDetails.name}
            onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
            style={styles.input}
          />
        </div>

        <div style={styles.inputContainer}>
          <FaEnvelope style={styles.icon} />
          <input
            type="email"
            placeholder="Email"
            value={userDetails.email}
            onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
            style={styles.input}
          />
        </div>

        <div style={styles.inputContainer}>
          <FaHome style={styles.icon} />
          <input
            type="text"
            placeholder="Address"
            value={userDetails.address}
            onChange={(e) => setUserDetails({ ...userDetails, address: e.target.value })}
            style={styles.input}
          />
        </div>

        <div style={styles.inputContainer}>
          <FaCity style={styles.icon} />
          <input
            type="text"
            placeholder="City"
            value={userDetails.city}
            onChange={(e) => setUserDetails({ ...userDetails, city: e.target.value })}
            style={styles.input}
          />
        </div>

        <div style={styles.inputContainer}>
          <FaMapMarkerAlt style={styles.icon} />
          <input
            type="text"
            placeholder="Postal Code"
            value={userDetails.postalCode}
            onChange={(e) => setUserDetails({ ...userDetails, postalCode: e.target.value })}
            style={styles.input}
          />
        </div>

        <div style={styles.inputContainer}>
          <FaPhone style={styles.icon} />
          <input
            type="text"
            placeholder="Phone"
            value={userDetails.phone}
            onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
            style={styles.input}
          />
        </div>

        {!formValid && <div style={styles.errorMessage}>Please fill out all fields correctly.</div>}

        <div style={styles.totalCost}>
          <span style={{ fontSize: '18px' }}>
            Total Cost: <span style={styles.totalCostValue}>Rs.{totalCost}</span>
          </span>
        </div>

        <div style={{ marginTop: '10px' }}>
          {isLoading ? (
            <div style={styles.loadingSpinner}></div>
          ) : (
            <button
              type="submit"
              style={styles.submitButton}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#4299e1')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#3182ce')}
            >
              Complete Checkout
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Checkout;
