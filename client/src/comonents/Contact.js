import React ,{useEffect}from 'react'
import { GoMail } from "react-icons/go";
import { MdOutlinePhone } from "react-icons/md";
import { PiBuildingOffice } from "react-icons/pi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Contact = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <>
    <style>
      {`* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #ffffff; /* Light blue background color */
  overflow-x: hidden; /* Prevent horizontal scroll for animation */
}

/* Fade-in animation */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide-in animation */
@keyframes slideIn {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Apply fade-in to body content */
body > * {
  animation: fadeIn 1s ease-out;
}

.container1 {
  background-color: #ffffff; /* White background for container */
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  animation: slideIn 1s ease-out;
}

.contactus {
  color: #333333;
  text-align: center;
  margin-top: 50px;
  animation: slideIn 1s ease-out;
}

.p1 {
  color: #333333;
  text-align: center;
  margin-top: 20px;
  animation: slideIn 1s ease-out;
}

.container2 {
  display: flex;
  justify-content: space-evenly;
  padding-top: 50px;
  width: 100%;
}

.contact-card {
  background-color: #ffffff; /* White background for contact cards */
  width: 400px;
  height: 400px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: slideIn 1s ease-out;
  transform: translateY(10px);
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(0);
}

.icon {
  font-size: 100px;
  margin-top: 10px;
  color: #3498db; /* Blue color for icons */
  transition: color 0.3s ease;
}

.icon:hover {
  color: #2980b9; /* Darker blue on hover */
}

.office {
  color: #333333;
  margin-top: 20px;
}

.data {
  color: #7f8c8d;
  margin-top: 10px;
}

.middle {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;
}

.middle1 {
  flex: 1;
  margin-right: 50px;
}

.contact {
  padding-top: 50px;
  color: #333333;
}

.contact-method {
  background-color: #ffffff; /* White background for contact methods */
  display: flex;
  align-items: center;
  width: 400px;
  height: 70px;
  border-radius: 10px;
  margin-top: 20px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: slideIn 1s ease-out;
}

.contact-method .icon {
  font-size: 30px;
  width: 40px;
  height: 40px;
  color: #3498db; /* Blue color for contact method icons */
  transition: color 0.3s ease;
}

.contact-method .icon:hover {
  color: #2980b9; /* Darker blue on hover */
}

.info {
  padding-left: 20px;
}

.form-container {
  background-color: #ffffff; /* White background for form container */
  width: 600px;
  height: 700px;
  border-top-left-radius: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slideIn 1s ease-out;
}

.form {
  background-color: #ffffff; /* White background for form */
  width: 500px;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: slideIn 1s ease-out;
}

.form-group {
  margin-bottom: 20px;
}

.input, .textarea {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #bdc3c7;
  outline: none;
  padding: 10px;
  font-size: medium;
  transition: border-color 0.3s ease;
}

.input:focus, .textarea:focus {
  border-color: #3498db; /* Highlight border on focus */
}

.textarea {
  height: 100px;
}

.submit-button {
  width: 100px;
  height: 40px;
  margin-top: 20px;
  border-radius: 10px;
  border: none;
  outline: none;
  color: #ffffff;
  background-color: #3498db; /* Blue background for submit button */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.submit-button:hover {
  background-color: #2980b9; /* Darker blue on hover */
  transform: scale(1.05); /* Slight scale-up on hover */
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .container2 {
    flex-wrap: wrap;
    justify-content: center;
  }

  .contact-card {
    margin: 10px;
  }

  .middle {
    flex-direction: column;
    align-items: center;
  }

  .middle1 {
    margin-right: 0;
  }

  .contact-method {
    width: auto;
    margin: 10px 0;
  }

  .form-container {
    width: 90%;
    max-width: 600px;
  }
}

@media (max-width: 768px) {
  .contactus, .p1, .contact, .office, .data {
    font-size: smaller;
  }

  .icon {
    font-size: 80px;
  }

  .contact-method .icon {
    font-size: 20px;
  }

  .form {
    padding: 20px;
  }

  .input, .textarea {
    font-size: small;
  }

  .contact-method {
    flex-direction: column;
    height: auto;
  }
}

@media (max-width: 480px) {
  .container2 {
    flex-direction: column;
    align-items: center;
  }

  .contact-card {
    width: 90%;
  }

  .form-container {
    width: 100%;
    border-top-left-radius: 100px;
  }

  .form {
    width: 90%;
  }
}`}
    </style>
    <div>
      <div className='main'>
      <div className='container1'>
        <h1 className='contactus'>Get in touch together</h1>
        <p className='p1'>
          Our commitment to excellence extends beyond the plate, creating an atmosphere that lingers in the
          memory, making your visit truly exceptional.
        </p>
        <div className='container2' >
          <div className='contact-card' >
            <div className='icon'><PiBuildingOffice /></div>
            <h1 className='office'>Visit for office</h1>
            <p className='data'>9261 Candice Trail, Carolina, United State</p>
          </div>
          <div className='contact-card'>
            <div className='icon'><GoMail /></div>
            <h1 className='office'>Mail</h1>
            <p className='data'>company@gmail.com</p>
          </div>
          <div className='contact-card'>
            <div className='icon'><IoIosHelpCircleOutline /></div>
            <h1 className='office'>Help & Support</h1>
            <p className='data'>+101 8317494051</p>
          </div>
        </div>
        <div className='middle'>
          <div className='middle1' data-aos='fade-up'>
            <h1 className='contact'>Get in touch together</h1>
            <div className='contact-method'>
              <div className='icon'><GoMail /></div>
              <p className='info'>company@gmail.com</p>
            </div>
            <div className='contact-method'>
              <div className='icon'><MdOutlinePhone /></div>
              <p className='info'>+91 9515096422</p>
            </div>
          </div>
          <div className='form-container'>
            <form className='form' data-aos='fade-up'>
              <div className='form-group'>
                <label>Name</label>
                <input className='input' type='text' />
              </div>
              <div className='form-group'>
                <label>Phone number</label>
                <input className='input' type='tel' />
              </div>
              <div className='form-group'>
                <label>Email</label>
                <input className='input' type='email' />
              </div>
              <div className='form-group'>
                <label>Leave us a message</label>
                <textarea className='textarea'></textarea>
              </div>
              <button type='submit' className='submit-button'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Contact
