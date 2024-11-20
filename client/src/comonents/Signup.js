import React, { useState } from 'react';
import { IoMdMail } from "react-icons/io";
import { IoIosLock } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const navigate=useNavigate();
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Error state
  const [success, setSuccess] = useState(''); // Success state

  const usernameChange = (e) => setUsername(e.target.value);
  const mobileChange = (e) => setMobile(e.target.value);
  const emailChange = (e) => setEmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://rlrserver.vercel.app/signup', {
        username,
        mobile,
        email,
        password,
      });
      navigate('/login')
      setSuccess(response.data.message); 
      setError(''); 
      setUsername('');
      setMobile('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed'); 
      setSuccess('');
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
          <center className="md:w-96 lg:w-96 lg:border-2 md:border-2 lg:p-5 mt-3 lg:mx-auto lg:rounded-2xl lg:shadow-lg">
            <div className='flex justify-center gap-2 mt-20'>
              <p className='text-7xl text-black font-bold font-mono'>R</p>
              <p className='text-7xl text-[rgba(36,174,241,255)] font-bold font-mono'>L</p>
              <p className='text-7xl text-black font-bold font-mono'>R</p>
            </div><br />
            <div>
              {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error */}
              {success && <p className="text-green-500 text-sm">{success}</p>}<br/> {/* Display success */}
              <div className='border-2 w-72 h-11 border-[rgba(140,140,140,255)] rounded-full flex gap-5'>
                <FaUser className='text-[rgba(140,140,140,255)] mt-3 ml-4' />
                <input
                  placeholder='User name'
                  type='text'
                  value={username}
                  onChange={usernameChange}
                  className='outline-none focus:outline-none focus:ring-0'
                />
              </div><br />
              <div className='border-2 w-72 h-11 border-[rgba(140,140,140,255)] rounded-full flex gap-5'>
                <FaPhoneAlt className='text-[rgba(140,140,140,255)] mt-3 ml-4' />
                <input
                  placeholder='Mobile no'
                  type='tel'
                  value={mobile}
                  onChange={mobileChange}
                  className='outline-none focus:outline-none focus:ring-0'
                />
              </div><br />
              <div className='border-2 w-72 h-11 border-[rgba(140,140,140,255)] rounded-full flex gap-5'>
                <IoMdMail className='text-[rgba(140,140,140,255)] mt-3 ml-4' />
                <input
                  placeholder='Email'
                  type='email'
                  value={email}
                  onChange={emailChange}
                  className='outline-none focus:outline-none focus:ring-0'
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
                />
              </div>
              <p className='p-3 ml-36 text-sm'>Forgot Password?</p><br />
              <button
                type='submit'
                className='bg-[rgba(36,174,241,255)] w-28 h-10 rounded-full text-white font-semibold'
              >
                Signup
              </button><br /><br />
              <div className='flex justify-center gap-1'>
                <p className='font-normal'>Already have an account?</p>
                <Link to='/login'>
                  <p className='text-[rgba(36,174,241,255)]'>Login</p>
                </Link>
              </div>
            </div>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Signup;
