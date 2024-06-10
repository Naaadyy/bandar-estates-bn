'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// @ts-ignore
import Logo from '../public/images/BE-Logo.png';

export default function HeaderNavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="flex justify-between items-center bg-black bg-opacity-20 h-14 text-white py-10 px-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            width={110}
            height={110}
          />
        </Link>
      </div>
      
      <div className="flex space-x-20 items-center">
        <Link href='/About' className="ml-4">About Bandar Estates</Link>
        
        <div className="relative">
          <button onClick={toggleDropdown} className="ml-4">
            Developments
          </button>
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
              <Link href='/ListView' className="block px-4 py-2 hover:bg-gray-200">ListView</Link>
              <Link href='/Commercial' className="block px-4 py-2 hover:bg-gray-200">Commercial</Link>
              <Link href='/Industrial' className="block px-4 py-2 hover:bg-gray-200">Industrial</Link>
            </div>
          )}
        </div>

        <Link href='/Land'>Land & Planning</Link>
        <Link href='/Contact'>Contact Us</Link>
      </div>
    </nav>
  );
}
