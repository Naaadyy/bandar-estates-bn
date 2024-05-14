'use client';
import React from 'react';
import Footer from '../RootComponents/Footer';
import './landpage.css';

// Define your images
const firstimg = '/images/FirstSectionImg.jpeg'; // Update with your actual image path
const secondimg = '/images/SecondSectionImg.png'; // Update with your actual image path
const bannerimg = '/images/Banner.png'; // Update with your actual image path

const LandPage = () => {
  return (
    <div>
      {/* First Section */}
      <section className="section bg-black text-white">
        <div className="container flex flex-wrap md:flex-nowrap">
          <div className="flex-1 p-5">
            <h2 className="text-4xl font-bold mb-4">Land and Planning</h2>
            <p className="mb-4">Another subheading—maybe it’s related to the image on the right, or the button below</p>
          </div>
          <div className="flex-1 p-5">
            <img src={firstimg} alt="First Section Image" className="w-[432px] h-[365px] rounded-lg object-cover" />
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="section bg-white text-black">
        <div className="container flex flex-wrap md:flex-nowrap">
          <div className="flex-1 p-5">
            <img src={secondimg} alt="Second Section Image" className="w-[432px] h-[365px] rounded-lg object-cover" />
          </div>
          <div className="flex-1 p-5">
            <h2 className="text-4xl font-bold mb-4">Land to Sell?</h2>
            <p className="mb-4">Another subheading—maybe it’s related to the image on the left, or the button below </p>
            <button className="btn">Find Out More</button>
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="section text-center relative">
        <div className="container relative">
          <img src={bannerimg} alt="Banner Image" className="w-full" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold mb-4">Title</h2>
            <p className="mb-4">Test Test Test</p>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="section bg-white text-black flex items-center justify-center">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Fourth Section</h2>
          <p className="mb-4">This is the fourth section with some content.</p>
          <button className="btn">Download PDF</button>
        </div>
      </section>

      <hr className="bg-white my-10 border-t-2 border-gray-300" />

      {/* Fifth Section */}
      <section className="section bg-white text-black flex items-center justify-center">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Fifth Section</h2>
          <p className="mb-4">This is the fifth section with some content.</p>
          <button className="btn">Get in Touch</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandPage;
