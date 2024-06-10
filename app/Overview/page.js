import React from 'react';
import Image from 'next/image';
import HeaderNavBar from '../../app/HeaderNavBar';
import Footer from '../RootComponents/Footer';
// @ts-ignore
import Logo from '../../public/images/BE-House-01.png';

export async function getServerSideProps(context) {
  const { id } = context.params;
  
  // Fetch house data based on the ID
  // Replace the URL with your API endpoint or data fetching logic
  const res = await fetch(`http://localhost:3000/houses/${id}`);
  const house = await res.json();

  return { props: { house } };
}

const HouseOverview = ({ house }) => {
  return (
    <>
      <HeaderNavBar />
      <div className="mt-14 px-4">
        <div className="max-w-7xl mx-auto py-8">
          <h1 className="text-4xl font-bold text-yellow-500">{house.name}</h1>
          <p className="text-xl">{house.type}</p>
          <p className="text-lg">Price Range (in BND): {house.priceRange}</p>
          <p className="text-lg">Address: {house.address}</p>
          <p className="text-lg">Location Link: {house.locationLink}</p>
          <p className="text-lg">Call or Register your details for more information</p>
          <p className="text-lg">Opening Hours: {house.openingHours}</p>
          
          <div className="flex justify-start items-center mt-4">
            <Image
              src={Logo}
              alt="House Image"
              width={500}
              height={300}
              className="mr-4"
            />
            <div className="flex flex-col space-y-4">
              <button className="bg-green-500 text-white font-bold py-2 px-4 rounded">Enquire our agencies</button>
              <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded">Call our Team</button>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
              <span className="text-lg font-semibold">Overview</span>
              <span className="text-lg font-semibold">Availability & Prices</span>
              <span className="text-lg font-semibold">Site Plan</span>
              <span className="text-lg font-semibold">Virtual Tours</span>
              <span className="text-lg font-semibold">Location</span>
              <span className="text-lg font-semibold">Specification</span>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-4">Explore more on our development below!</h2>
                <p>{house.overviewText}</p>
                <button className="bg-black text-white font-bold py-2 px-4 rounded mt-4">View our availability</button>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Key Features:</h2>
                <p>{house.keyFeatures}</p>
                <button className="bg-black text-white font-bold py-2 px-4 rounded mt-4">View specification</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HouseOverview;
