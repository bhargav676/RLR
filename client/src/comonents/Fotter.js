import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 px-4">
      <div className="border-t border-gray-300 mb-8"></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm">
            We are committed to providing the best products at the most affordable prices.
            Shop with us for a seamless shopping experience.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[rgba(36,174,241,255)] text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[rgba(36,174,241,255)] text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[rgba(36,174,241,255)] text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[rgba(36,174,241,255)] text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[rgba(36,174,241,255)] text-2xl"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Your RLR. All rights reserved.</p>
      </div>
     
    </footer>
  );
};

export default Footer;
