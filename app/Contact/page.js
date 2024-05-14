'use client'
import React from "react";
import Footer from "../RootComponents/Footer";
import "./page.css";

const ContactPage = () => {
  return (
    <div>
      <div className="container mx-auto max-w-screen-lg px-5 py-10">
        {/* Row Container */}
        <div className="flex flex-wrap md:flex-nowrap gap-4">
          {/* General Questions Section */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-yellow-400 mb-4">Contact Us</h1>
            <h3 className="text-2xl font-bold mb-4 text-white">General Questions</h3>
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap mb-4">
                <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
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
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
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

          {/* Vertical Line */}
          <div className="hidden md:block mx-10 h-auto border-l border-white"></div>

          {/* Why Bandar Estates Section */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-4 text-white">Why Bandar</h2>
            <h2 className="text-4xl font-bold mb-4 text-white -mt-5">Estates?</h2>
            <div className="p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <div className="checkbox-wrapper-19 mb-5">
                  <input type="checkbox" id="reason1" checked disabled />
                  <label htmlFor="reason1" className="check-box mr-5"></label>
                  <label htmlFor="reason1" className="text-white cursor-default ml-2">
                    Reason 1
                  </label>
                </div>
                <div className="checkbox-wrapper-19 mb-5">
                  <input type="checkbox" id="reason2" checked disabled />
                  <label htmlFor="reason2" className="check-box mr-5"></label>
                  <label htmlFor="reason2" className="text-white cursor-default ml-2">
                    Reason 2
                  </label>
                </div>
                <div className="checkbox-wrapper-19 mb5">
                  <input type="checkbox" id="reason3" checked disabled />
                  <label htmlFor="reason3" className="check-box mr-5"></label>
                  <label htmlFor="reason3" className="text-white cursor-default ml-2">
                    Reason 3
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
import "./page.css";

export default ContactPage;
