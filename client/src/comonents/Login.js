import React, { useState ,useContext} from 'react';
import { IoMdMail } from "react-icons/io";
import { IoIosLock } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {store} from '../App'
import brain from '../images/login.jpg';
const Login = () => {
  const [token,setToken]=useContext(store)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const emailChange = (e) => setEmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);

  const submitHandler = async (e) => {
    e.preventDefault();
  
    setLoading(true);
    setError('');
    setSuccess('');
  
    try {
      const response = await axios.post('http://127.0.0.1:4000/login', {
        email,
        password,
      });
     console.log(token)
      const receivedToken = response.data.token;
      setToken(receivedToken); 
      localStorage.setItem('authToken', receivedToken); 
      setSuccess('Login successful!');
      setLoading(false);
  
      navigate('/dashboard');
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || 'Login failed');
      setSuccess('');
    }
  };
  

  return (
    <div>
       <style>
        {`
          .loader {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid transparent;
  border-top: 4px solid white;
  border-right: 4px solid rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  animation: pulse 0.75s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.2);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

        `}
      </style>
      <form onSubmit={submitHandler} autoComplete='off'>
        <center className="md:w-96 lg:w-96 lg:border-2 md:border-2 lg:p-5 mt-3 lg:mx-auto lg:rounded-2xl lg:shadow-lg">
          <img src={brain} alt='' className='w-80' />
          <div className='flex justify-center gap-2 mt-20'>
            <p className='text-7xl text-black font-bold font-mono'>R</p>
            <p className='text-7xl text-[rgba(36,174,241,255)] font-bold font-mono'>L</p>
            <p className='text-7xl text-black font-bold font-mono'>R</p>
          </div><br />
          <div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}<br />
            <div className='border-2 w-72 h-11 border-[rgba(140,140,140,255)] rounded-full flex gap-5'>
              <IoMdMail className='text-[rgba(140,140,140,255)] mt-3 ml-4' />
              <input
                placeholder='Email'
                type='email'
                value={email}
                onChange={emailChange}
                className='outline-none focus:outline-none focus:ring-0'
                disabled={loading}
              />
            </div><br />
            <div className='border-2 w-72 h-11 border-[rgba(140,140,140,255)] rounded-full flex gap-5'>
              <IoIosLock className='text-[rgba(140,140,140,255)] mt-3 ml-3 w-5 h-5' />
              <input
                placeholder='Password'
                type='password'
                value={password}
                onChange={passwordChange}
                className='outline-none'
                disabled={loading}
              />
            </div><br />
            <button
              type='submit'
              className='bg-[rgba(36,174,241,255)] w-28 h-10 rounded-full text-white font-semibold'
              disabled={loading}
            >
              {loading ? (
                <span className="loader"></span>  
              ) : (
                "Login"
              )}
            </button><br /><br />
            <div className='flex justify-center gap-1'>
              <p className='font-normal'>Don't have an account?</p>
              <Link to='/signup'>
                <p className='text-[rgba(36,174,241,255)]'>Signup</p>
              </Link>
            </div>
          </div>
        </center>
      </form>
    </div>
  );
};

export default Login;
