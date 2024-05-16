import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-2 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="footer-left mb-6 md:mb-0">
          <Image
            src="/images/BE-Logo.png"
            alt="logo"
            width={200}
            height={200}
          />
        </div>

        {/* Contact Information */}
        <div className="footer-center md:mx-6">
          <h1 className="text-xl font-bold mb-2 md:mb-4">CONTACT US</h1>
          <p>bandarestates@hotmail.com</p>
          <p>Block C, 2nd Floor, Sunway Centre, Unit 24, Jalan Sungai Akar, Bandar Seri Begawan</p>
          <p>+(673) 7332666</p>
        </div>

        {/* Social Links */}
        <div className="footer-right">
          <h1 className="text-xl font-bold mb-2 md:mb-4">FOLLOW US</h1>
          <p>Yes, we are social</p>
          <div className="flex gap-4 py-3">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <Image
                src="/images/Facebook.png"
                alt="Facebook"
                width={50}
                height={50}
              />
            </a>
            <a href="https://www.instagram.com/bandarestates.bn/" target="_blank" rel="noopener noreferrer" className="social-link">
              <Image
                src="/images/Instagram.png"
                alt="Instagram"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="w-auto mx-auto my-2 border-gray-400" />

      {/* Copyright Text */}
      <p className="text-sm text-gray-400 text-center">&copy; 2024 Bandar Estates BN. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
