'use client';
import React from 'react';
import Footer from '../RootComponents/Footer';
import Link from 'next/link';
import firstimg from '../../public/images/FirstSectionImg.jpeg';
import secondimg from '../../public/images/SecondSectionImg.png';
import './landpage.css';

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
      <br />
        <div className="container flex flex-wrap md:flex-nowrap">
          <div className="flex-1 p-5">
            <img src={secondimg} alt="Second Section Image" className="w-[432px] h-[365px] rounded-lg object-cover" />
          </div>
          <div className="flex-1 p-5">
            <h2 className="text-4xl font-bold mb-4">Land to Sell?</h2>
            <p className="mb-4">Another subheading—maybe it’s related to the image on the left, or the button below </p>
            <button className="btn">
              <Link href="/LandConsultation">Find Out More</Link>
            </button>
          </div>
        </div>
        <br />
      </section>
      
      <Footer />
    </div>
  );
};

export default LandPage;
