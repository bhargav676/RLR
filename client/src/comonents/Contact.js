import React ,{useEffect,useState}from 'react'
import { GoMail } from "react-icons/go";
import { MdOutlinePhone } from "react-icons/md";
import { PiBuildingOffice } from "react-icons/pi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import Aos from 'aos'
import 'aos/dist/aos.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://rlrserver.vercel.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully');
      } else {
        alert('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };
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
  background-color: #ffffff; 
  overflow-x: hidden; 
}


@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}


@keyframes slideIn {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Apply fade-in to body content */
body > * {
  animation: fadeIn 1s ease-out;
}

.container1 {
  background-color: #ffffff;
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
  background-color: #ffffff; 
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
  color: #3498db;
  transition: color 0.3s ease;
}

.icon:hover {
  color: #2980b9; 
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
  background-color: #ffffff;
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
  color: #3498db; 
  transition: color 0.3s ease;
}

.contact-method .icon:hover {
  color: #2980b9; 
}

.info {
  padding-left: 20px;
}

.form-container {
  background-color: #ffffff; 
  width: 600px;
  height: 700px;
  border-top-left-radius: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: slideIn 1s ease-out;
}

.form {
  background-color: #ffffff; 
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
  border-color: #3498db;
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
  background-color: #3498db; 
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.submit-button:hover {
  background-color: #2980b9; 
  transform: scale(1.05); 
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
            <p className='data'>Sree Sita Rama Nivas, Ponduru, Srikakulam District, Andhra Pradesh</p>
          </div>
          <div className='contact-card'>
            <div className='icon'><GoMail /></div>
            <h1 className='office'>Mail</h1>
            <p className='data'>lokranjithrepaka3@gmail.com</p>
          </div>
          <div className='contact-card'>
            <div className='icon'><IoIosHelpCircleOutline /></div>
            <h1 className='office'>Help & Support</h1>
            <p className='data'>+91 9515487572</p>
          </div>
        </div>
        <div className='middle'>
          <div className='middle1' data-aos='fade-up'>
            <h1 className='contact'>Get in touch together</h1>
            <div className='contact-method'>
              <div className='icon'><GoMail /></div>
              <p className='info'>lokranjithrepaka3@gmail.com</p>
            </div>
            <div className='contact-method'>
              <div className='icon'><MdOutlinePhone /></div>
              <p className='info'>+91 9515487572</p>
            </div>
          </div>
          <div className='form-container'>
        <form className='form' onSubmit={handleSubmit} data-aos='fade-up'>
          <div className='form-group'>
            <label>Name</label>
            <input
              className='input'
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Phone number</label>
            <input
              className='input'
              type='tel'
              name='phone'
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Email</label>
            <input
              className='input'
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-group'>
            <label>Leave us a message</label>
            <textarea
              className='textarea'
              name='message'
              value={formData.message}
              onChange={handleChange}
            ></textarea>
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
