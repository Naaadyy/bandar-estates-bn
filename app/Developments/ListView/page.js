'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../../RootComponents/Footer';

export default function ListPage() {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      {/* Banner */}
      <div className="overlay-content flex flex-wrap justify-between items-start mx-auto py-10 sm:max-w-screen-xl">
        <div className="content-left flex-1 bg-black text-justify sm:w-96">
          <h1 className="text-3xl font-bold text-yellow-400 mb-4 py-5">Brunei-Muara District</h1>
          <p className="text-white italic mb-2">Another subheading-maybe it's related to the image on the right, or the button below</p>
          <p className="text-white italic mt-8 mb-2">Search Bar here...</p>
          <br/>
        </div>

        <div className="content-right flex-1 px-10 relative flex justify-center items-center">
          <div className="image-container relative">
            <Image
              src="/images/BE-House-01.png"
              alt="Brunei"
              width={400}
              height={400}
              layout="fixed"
            />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="px-10 pt-10 pb-80 text-center">
          <h2 className="text-2xl font-bold pb-3">Brunei-Muara Developments</h2>
          <p>
            <Link href='/Developments/ListView'
              
                className={`link text-black font-bold cursor-pointer hover:text-yellow-400 ${activeLink === 'list' ? 'text-yellow-500' : ''}`}
                onClick={() => handleClick('list')}
              >
                List View
              
            </Link>

            {' / '}
            
            <Link href='/Developments/MapView'
              
                className={`link text-black font-bold cursor-pointer hover:text-yellow-400 ${activeLink === 'map' ? 'text-yellow-500' : ''}`}
                onClick={() => handleClick('map')}
              >
                Map View
              
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
