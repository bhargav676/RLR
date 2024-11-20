import React, { createContext, useState } from 'react';
import Signup from './comonents/Signup';
import Login from './comonents/Login';
import Main from './comonents/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const store = createContext();

const App = () => {

  const [token, setToken] = useState(null);

  return (
    <div>
     
      <store.Provider value={[token, setToken]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </store.Provider>
    </div>
  );
};

export default App;
