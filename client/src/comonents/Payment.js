import React, { useState } from "react";

const ContactDetails = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Valid 10-digit phone number is required";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Valid email is required";
    }
    if (!formData.address) errors.address = "Address is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.postalCode || !/^\d{6}$/.test(formData.postalCode)) {
      errors.postalCode = "Valid 6-digit postal code is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-center text-teal-600 mb-6">
        Cash on Delivery - Contact Details
      </h2>
      {submitted ? (
        <div className="text-center">
          <h3 className="text-xl font-semibold text-green-600 mb-4">
            Order Submitted Successfully!
          </h3>
          <p className="text-gray-700">
            Thank you for your order, <span className="font-semibold">{formData.name}</span>!
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {[
            { label: "Name", name: "name", type: "text", placeholder: "Enter your name" },
            { label: "Phone", name: "phone", type: "text", placeholder: "Enter your phone number" },
            { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
            { label: "City", name: "city", type: "text", placeholder: "Enter your city" },
            {
              label: "Postal Code",
              name: "postalCode",
              type: "text",
              placeholder: "Enter your postal code",
            },
          ].map((field, index) => (
            <div className="mb-4" key={index}>
              <label className="block font-medium text-gray-700">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
              {errors[field.name] && (
                <small className="text-red-500 text-sm">{errors[field.name]}</small>
              )}
            </div>
          ))}
          <div className="mb-4">
            <label className="block font-medium text-gray-700">Address</label>
            <textarea
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-teal-500 focus:outline-none"
            ></textarea>
            {errors.address && <small className="text-red-500 text-sm">{errors.address}</small>}
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-teal-500 text-white font-semibold rounded hover:bg-teal-600 transition"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactDetails;
