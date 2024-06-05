import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HeaderNavBar() {
  return (
    <nav className="flex justify-between items-center bg-black bg-opacity-20 h-14 text-white py-10 px-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="./images/BE-Logo.png"
            alt="logo"
            width={110}
            height={110}
          />
        </Link>
      </div>
      
      <div className="flex space-x-20">
        <Link href='/About' className="ml-4">About Bandar Estates</Link>
        <Link href='/Developments'>Developments</Link>
        <Link href='/Land'>Land & Planning</Link>
        <Link href='/Contact'>Contact Us</Link>
      </div>
    </nav>
  );
}
