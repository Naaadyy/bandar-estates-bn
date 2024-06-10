'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../RootComponents/Footer';
// @ts-ignore
import Logo from '../../public/images/BE-House-01.png';

const Card = ({ title, description, imageUrl, linkUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <Image 
        className="w-full" 
        src={imageUrl} 
        alt={title} 
        width={400} 
        height={200} 
        layout="responsive" 
        objectFit="cover" 
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 py-4">
        <Link href={linkUrl}
          className="text-blue-500 hover:text-blue-800">Learn More
        </Link>
      </div>
    </div>
  );
};

export default function ListPage() {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      {/* Banner */}
      <div className="overlay-content flex flex-wrap items-start px-10 sm:px-20 md:px-40 py-10">
        <div className="content-left flex-1 bg-black text-justify">
          <h1 className="text-3xl font-bold text-yellow-400 mb-4 py-5">Brunei-Muara District</h1>
          <p className="text-white italic mb-2">Another subheading-maybe it's related to the image on the right, or the button below</p>
          <p className="text-white italic mt-8 mb-2">Search Bar here...</p>
          <br/>
        </div>

        <div className="content-right flex-1 relative flex justify-center items-center">
          <div className="image-container relative">
            <Image
              src={Logo}
              alt="Brunei"
              width={400}
              height={400}
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      {/* HyperLink */}
      <div className="bg-white">
        <div className="px-10 pt-10 pb-10 text-center">
          <h2 className="text-2xl font-bold pb-3">Brunei-Muara Developments</h2>
          <p>
            <Link href='/ListView'
              className={`link text-black font-bold cursor-pointer hover:text-yellow-400 ${activeLink === 'list' ? 'text-yellow-500' : ''}`}
              onClick={() => handleClick('list')}
            >List View
            </Link>

            {' / '}
            
            <Link href='/Developments'
              className={`link text-black font-bold cursor-pointer hover:text-yellow-400 ${activeLink === 'map' ? 'text-yellow-500' : ''}`}
              onClick={() => handleClick('map')}
            >Map View
            </Link>
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="bg-white px-10 pt-10 pb-10">
        <div className="flex flex-wrap justify-center">
          <Card 
            title="Lumapas" 
            description="2-storey Detached House" 
            imageUrl={Logo}
            linkUrl="/Developments/Lumapas" // Ensure this links to your dynamic route
          />
          <Card 
            title="Development 2" 
            description="Description for Development 2" 
            imageUrl={Logo} 
            linkUrl="/Developments/Development2" // Ensure this links to your dynamic route
          />
          <Card 
            title="Development 3" 
            description="Description for Development 3" 
            imageUrl={Logo}
            linkUrl="/Developments/Development3" // Ensure this links to your dynamic route
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
