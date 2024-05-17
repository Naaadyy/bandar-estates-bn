'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from "../RootComponents/Footer";
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';

export default function DevelopmentsPage() {
  const containerStyle = {
    width: '100%',
    height: '90vh'
  };

  const options = {
    mapId: '96d890c8d3f71719',
    zoomControl: false,
    fullscreenControl: false,
    clickableIcons: false,
    streetViewControl: false,
  };
  
  const center = {
    lat: 4.929647696732591,
    lng: 114.93133116714998,
  }; 

  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);

  // Array of marker objects
  const markers = [
    {
      id: 1,
      position: { lat: 4.996072857644963, lng: 115.02305250448714 },
      info: {
        title: "Mentiri",
        description: "Double Storey (1 minute to Hua Ho Salar)",
        bedrooms: "3 Bedroom",
        bathrooms: "3 Bathroom",
        size: "Built-Up +/- 1700 Sq.Ft",
        loan: "(Monthly Bank Loan $900+ Only)",
        image: "/images/Mentiri-House.png"
      }
    },
    {
      id: 2,   
      position: { lat: 5.028190562021885, lng: 115.05067211623077 },
      info: {
        title: "Kapok",
        description: "Exclusively Designed with 0.166 Acre Land",
        bedrooms: "N/A",
        bathrooms: "N/A",
        size: "0.166 Acre Land",
        loan: "(Starting At $3xxK Only)",
        image: "/images/Kapok-House.png"
      }
    }
    // Add more markers here
  ];

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const pinIcon = {
    url: "/images/Houses-Icon.png",
    scaledSize: { width: 60, height: 60 }
  };

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
    setIsInfoWindowOpen(true);
  };

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}
          options={options}
          onClick={() => setIsInfoWindowOpen(false)}
        > 
          {markers.map((marker) => (
            <MarkerF
              key={marker.id}
              position={marker.position}
              icon={pinIcon}
              cursor="pointer"
              onClick={() => handleMarkerClick(marker)}
            />
          ))}
          
          {isInfoWindowOpen && selectedMarker && (
            <InfoWindowF
              onCloseClick={() => setIsInfoWindowOpen(false)}
              position={selectedMarker.position}
            >
              <div className='w-60'>
                <div>
                  <img
                    src={selectedMarker.info.image}
                    alt={selectedMarker.info.title}
                    className='w-full h-full'
                  />
                  <div className='text-center'>
                    <h3 className='text-xl font-bold p-3'>{selectedMarker.info.title}</h3>
                    <p>{selectedMarker.info.description}</p>
                    <p className='pt-3'>{selectedMarker.info.bedrooms}</p>
                    <p>{selectedMarker.info.bathrooms}</p>
                    <p>{selectedMarker.info.size}</p>
                    <p className='font-bold p-3'>{selectedMarker.info.loan}</p>
                  </div>
                </div>
              </div>
            </InfoWindowF>
          )}
        </GoogleMap>
      ) : (
        <></>
      )}
      <Footer />
    </>
  );
}
