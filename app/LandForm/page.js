'use client'; // Ensure this is at the top for client-side rendering
import React, { useState } from "react";
import { useRouter } from 'next/navigation'; // Import useRouter
import Footer from "../RootComponents/Footer";

const LandForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    district: 'Brunei Muara', // Default value for the district
  });

  // State to manage popup visibility
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // useRouter hook for navigation
  const router = useRouter();

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPopupVisible(true);
  };

  // Handler to close the popup and navigate to the homepage
  const closePopup = () => {
    setIsPopupVisible(false);
    router.push('/'); // Navigate to the homepage
  };

  return (
    <div>
      <div className="container mx-auto max-w-screen-lg px-5 py-10">
        {/* Row Container */}
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          {/* Land Form Section */}
          <div className="flex-1 w-full ">
          <div className="flex justify-center items-center h-20">
          <h1 className="text-6xl font-bold text-yellow-400 mb-10">Land Enquiry Form</h1>
          </div>
          
            <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
              <div className="flex flex-wrap mb-4">
                <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="w-full md:w-1/2 md:pl-2">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="district">
                  District
                </label>
                <select
                  id="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="Brunei Muara">Brunei Muara</option>
                  <option value="Tutong">Tutong</option>
                  <option value="Temburong">Temburong</option>
                  <option value="Belait">Belait</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  rows="5"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">Message Sent</h2>
            <p className="mb-2">Thank you, {formData.firstName} {formData.lastName}!</p>
            <p className="mb-2">We have received your message from {formData.district} district and will get back to you at {formData.email}.</p>
            <p className="mb-4">{formData.message}</p>
            <button
              onClick={closePopup}
              className="bg-yellow-500 hover:bg-black text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Close
            </button>
          </div>
          <div className="fixed inset-0 bg-black opacity-5" onClick={closePopup}></div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default LandForm;
