'use client';
import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import Footer from "./RootComponents/Footer";
import PageComponents from "./RootComponents/PageComponents";
import Testimonials from "./RootComponents/Testimonial";
import BruneiImage from "../public/images/Brunei.png";
import BelaitImage from "../public/images/BelaitGrey.png";
import TemburongImage from "../public/images/TemburongGrey.png";
import TutongImage from "../public/images/TutongGreen.png";
import MuaraImage from "../public/images/MuaraGrey.png"


export default function Home() {
  return (
    <div className="flex-col min-h-screen">
      <div className="flex-1">
        <div className="container-video">
          <div className="video relative">
            <video
              src="videos/BandarEstatesVideo.MP4"
              autoPlay
              loop
              muted
              className="video-element"
            ></video>
          </div>
        </div>

        <div className="container-map mx-auto px-4 py-16 sm:max-w-screen-xl"> {/* Added max-width for responsiveness */}
          <div className="content-overlay">
            <div className="overlay-content flex flex-wrap justify-between items-start">

              <div className="content-left flex-1 mt-16 sm:mt-">
                <h1 className="text-3xl font-bold text-yellow-400 mb-4">Map Search Here</h1>
                <p className="text-gray-400 mb-8 sm:w-80">Search using the dropdown below to view Bandar Estates developments in the area.</p>

                <div className="dropdown relative rounded-md">
                  <select id="district" name="district" className="dropdown-size w-full sm:w-25 px-2 py-4 rounded-md">
                    <option value="brunei_muara">Brunei-Muara</option>
                    <option value="tutong">Tutong</option>
                    <option value="belait">Belait</option>
                    <option value="temburong">Temburong</option>
                  </select>
                  <button className="search-button absolute right-1 top-1.5 bg-black text-white px-6 py-2 rounded-md">Search</button>
                </div>
              </div>

              <div className="content-right flex-1 mt-8 sm:mt-0 relative">
                <a href="/Home" className="block">
                  <div className="image-container relative">
                  <Image
                      src={BruneiImage}
                      alt="Brunei"
                      width={600}
                      height={600}
                      className="absolute top-0 left-0"
                    />
                    <Image
                      src={BelaitImage}
                      alt="Belait Grey"
                      width={600}
                      height={600}
                      className="absolute top-0 left-0"
                    />
                    <Image
                      src={TutongImage}
                      alt="Tutong Grey"
                      width={600}
                      height={600}
                      className="absolute top-0 left-0"
                    />
                    <Image
                      src={TemburongImage}
                      alt="Temburong Grey"
                      width={600}
                      height={600}
                      className="absolute top-0 left-0"
                    />
                    <Image
                      src={MuaraImage}
                      alt="Muara Grey"
                      width={600}
                      height={600}
                      className="absolute top-0 left-0"
                    />
                  </div>
                </a>
              </div>

              
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
      </div>
      <PageComponents/>
      <Testimonials />
      <Footer/>
    </div>
  );
}
