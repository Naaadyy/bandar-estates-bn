'use client';
import React from 'react';
import Image from 'next/image';
import Footer from '../RootComponents/Footer';
import Link from 'next/link';
import bannerimg from '../../public/images/Banner.png';

const LandConsultation = () => {
  return (
    <div>
      {/* Third Section */}
      <section className="section text-center relative">
        <div className="container relative">
          <Image 
          src={bannerimg} 
          alt="Banner Image" 
          className="w-full object-cover" 
          />
          <div className="h-[150px] w-[1050px] absolute inset-0 flex flex-col items-center justify-center text-white bg-dark-gray bg-opacity-75 p-5">
            <h2 className="text-4xl font-bold mb-4">Land Area Name Here - Consultation</h2>
            <p className="mb-4">Welcome to our website which provides information on Cala Homes’ proposals for Land North of Oakley Lane, Merley.</p>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="section bg-white text-black flex items-center justify-center">
        <div className="container text-center">
          <br />
          <br />
          <h2 className="text-4xl font-bold mb-4">Proposals for new homes on [Land Area Name]</h2>
          <br />
          <br />
          <p className="mb-4">Bandar Estates is bringing forward proposals for a beautiful development of new homes on land to [District Name].
            In response to local housing need and the allocation of the site in the Local Plan, the plans include x number of homes -  four-bedroom homes for families, downsizers, and couples.
            This website gives you the opportunity to view the proposals and provide your comments, which will help shape the proposals before a planning application is submitted to Town and Country Planning Department, Brunei.

            On [Date], Bandar Estates held a virtual exhibition where local people could learn about the plans, ask questions to the project team and provide their feedback. 

            You can access the exhibition boards by clicking the button below.</p>
          <button className="btn">Download PDF</button>
          <hr className="w-auto mx-auto my-6 border-gray-400" />
        </div>
      </section>

      {/* Fifth Section */}
      <section className="section bg-white text-black flex items-center justify-center">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Bandar Estates</h2>
          <p className="mb-4">Our regional teams are looking to buy land for development on a conditional, unconditional or option basis.</p>
          <button className="btn">
            <Link href="/LandForm">Get in Touch</Link>
          </button>
          <br />
          <br />
          <br />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LandConsultation;
