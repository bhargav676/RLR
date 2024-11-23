import React, { createContext, useState } from 'react';
import Signup from './comonents/Signup';
import Login from './comonents/Login';
import Main from './comonents/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main1 from './comonents/Main1';
import Start from "./comonents/Start";

export const store = createContext();

const App = () => {

  const [token, setToken] = useState(null);

  return (
    <div>

      <store.Provider value={[token, setToken]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Main />} />
            <Route path="/image-detail/:index" element={<Main1/>} />
          </Routes>
        </BrowserRouter>
      </store.Provider>
    </div>
  );
};

export default App;
