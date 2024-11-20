import React, { useContext, useEffect, useState } from 'react';
import { store } from '../App';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Main = () => {
  const navigate = useNavigate();
  const [token] = useContext(store); 
  const [data, setData] = useState(null); 

  useEffect(() => {
    if (!token) {
      navigate('/login'); // Redirect if no token is found
    } else {
      // Fetch profile data
      axios
        .get('http://127.0.0.1:4000/profile', {
          headers: {
            'x-token': token, // Include token in headers
          },
        })
        .then((res) => setData(res.data))
        .catch((err) => {
          console.error('Error fetching profile data:', err);
          setData({ error: 'Unable to fetch profile data' });
        });
    }
  }, [token, navigate]); // Include token and navigate as dependencies

  if (!token) {
    return null; // Avoid rendering if the user is being redirected
  }

  return (
    <div>
      {data ? (
        data.error ? (
          <p>{data.error}</p> // Display error to the user
        ) : (
          <div>
            <h1>{data.name}</h1>
            <p>{data.email}</p>
          </div>
        )
      ) : (
        <p>Loading...</p> // Display loading state
      )}
    </div>
  );
};

export default Main;
