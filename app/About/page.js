'use client'
import React, { useState } from "react";
import Image from 'next/image';
import Footer from "../RootComponents/Footer";

const AboutPage = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [boxes, setBoxes] = useState({
    Background: false,
    Mission: false,
    Vision: false,
    "Our Team": false, 
  });

  const handleButtonClick = (buttonName) => {
    // Close the previously opened box
    if (activeButton && activeButton !== buttonName) {
      setBoxes((prevBoxes) => ({ ...prevBoxes, [activeButton]: false }));
    }

    // Toggle the box associated with the clicked button
    setBoxes((prevBoxes) => ({ ...prevBoxes, [buttonName]: !prevBoxes[buttonName] }));

    // Update the active button state
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="flex-col min-h-screen">
        {/* Banner */}
        <div className="py-20 bg-black text-center"> 
          <h1 className="text-3xl font-bold text-yellow-400">About Bandar Estates</h1>
        </div>
        
        <div className="container px-5 py-5 mt-2 mx-auto max-w-screen-lg max-h-screen-lg flex flex-col sm:flex-row items-start justify-center">
          {/* Left Side: Four Buttons */}
          <div className="flex flex-col sm:mr-0 sm:mb-4">
            <button 
              className={`bg-${activeButton === "Background" ? "white" : "black"} text-${activeButton === "Background" ? "black" : "white"} hover:bg-white hover:text-black font-bold py-3 px-4 rounded-l-md`}
              onClick={() => handleButtonClick("Background")}
            >
              Background
            </button>
            <button 
              className={`bg-${activeButton === "Mission" ? "white" : "black"} text-${activeButton === "Mission" ? "black" : "white"} hover:bg-white hover:text-black font-bold py-3 px-4 rounded-l-md`}
              onClick={() => handleButtonClick("Mission")}
            >
              Mission
            </button>
            <button 
              className={`bg-${activeButton === "Vision" ? "white" : "black"} text-${activeButton === "Vision" ? "black" : "white"} hover:bg-white hover:text-black font-bold py-3 px-4 rounded-l-md`}
              onClick={() => handleButtonClick("Vision")}
            >
              Vision
            </button>
            <button 
              className={`bg-${activeButton === "Our Team" ? "white" : "black"} text-${activeButton === "Our Team" ? "black" : "white"} hover:bg-white hover:text-black font-bold py-3 px-4 rounded-l-md`}
              onClick={() => handleButtonClick("Our Team")}
            >
              Our Team
            </button>
          </div>

          {/* Boxes */}
          <div className="flex-grow">
            {boxes.Background && (
              <div className="bg-white p-4 w-full sm:w-auto h-96">
                <h2 className="text-lg font-bold mb-2">The Beginning of Bandar Estates</h2>
                <p className="text-gray-700">Description of Background goes here...</p>
              </div>
            )}
            {boxes.Mission && (
              <div className="bg-white p-4 w-full sm:w-auto h-96">
                <h2 className="text-lg font-bold mb-2">Our Mission</h2>
                <p className="text-gray-700">Description of Mission goes here...</p>
              </div>
            )}
            {boxes.Vision && (
              <div className="bg-white p-4 w-full sm:w-auto h-96">
                <h2 className="text-lg font-bold mb-2">The Future of Bandar Estates</h2>
                <p className="text-gray-700">Description of Vision goes here...</p>
              </div>
            )}
            {boxes["Our Team"] && (
              <div className="bg-white p-4 w-full sm:w-auto">
                <h2 className="text-lg font-bold mb-2">Meet Our Team</h2>
                <p className="text-gray-700">Description of the Team goes here...</p>
                <br/>
                <br/>
                <br/>
                <Image
                  src="/images/OrganizationalChart.png"
                  alt="Brunei"
                  width={500}
                  height={500}
                  className="mx-auto"
                />            
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutPage;