import React, { useState } from 'react';
import Footer from './Fotter';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const [teamMembers] = useState([
  ]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="text-center py-20">
        <motion.p 
          className="mt-4 font-extrabold text-5xl lg:text-8xl md:text-7xl sm:text-5xl text-gray-800 tracking-wide leading-tight"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5 }}
        >
          About Us
        </motion.p>
        <motion.p 
          className="mt-6 text-lg lg:text-xl font-medium text-gray-500"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1.5 }}
        >
          We are committed to providing excellence in everything we do.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              Our mission is to empower individuals and businesses with innovative solutions that foster growth and success.
            </p>
          </motion.div>
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600">
              We envision a future where our technology drives the digital transformation of industries worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="text-center bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto mb-6 object-cover border-4 border-gray-300"
              />
              <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-lg text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
