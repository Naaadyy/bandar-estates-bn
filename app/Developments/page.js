'use client'
import React, { useState, useRef } from 'react';
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

  const initialCenter = {
    lat: 4.898108037120928,
    lng: 114.92602127444219,
  };

  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const mapRef = useRef(null);

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
    },
    {
      id: 3,
      position: { lat: 4.919687613794812, lng: 114.84859122177869 },
      info: {
        title: "Jerudong",
        description: "Detached Bungalow • Cozy Living Spaces Jerudong (Jln Mejawa) Close To Tungku-Jerudong Highway",
        bedrooms: "4 Bedroom",
        bathrooms: "4 Bathroom",
        size: "Land Size 0.13-0.146 Acre",
        loan: "Start From $2XXk",
        image: "/images/Jerudong-House.png"
      }
    }, 
    {
      id: 4,
      position: { lat: 4.836639546951818, lng: 114.87031521936522 },
      info: {
        title: "Bengkurong",
        description: "Moodern Luxury",
        garage: "4 Cars Garage",
        bedrooms: "6 Bedroom",
        bathrooms: "7 Bathroom",
        size: "+/- 4000 Sq Ft",
        loan: "$4xxK Only",
        image: "/images/Bengkurong-House.png"
      }
    },
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

    if (mapRef.current) {
      mapRef.current.panTo(marker.position); // Center the map on the marker's position
      mapRef.current.setZoom(13); // Set the zoom level as desired, e.g., 14
    }
  };

  const handleCloseInfoWindow = () => {
    setIsInfoWindowOpen(false);
    if (mapRef.current) {
      mapRef.current.panTo(initialCenter); // Reset the map to the initial center
      mapRef.current.setZoom(11); // Reset the zoom level
    }
  };

  const handleMapClick = () => {
    if (isInfoWindowOpen) {
      handleCloseInfoWindow();
    }
  };

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={initialCenter}
          zoom={11}
          options={options}
          // @ts-ignore
          onLoad={map => (mapRef.current = map)}
          onClick={handleMapClick}
        >
          {markers.map((marker) => (
            <MarkerF
              key={marker.id}
              position={marker.position}
              // @ts-ignore
              icon={pinIcon}
              cursor="pointer"
              onClick={() => handleMarkerClick(marker)}
            />
          ))}

          {isInfoWindowOpen && selectedMarker && (
            <InfoWindowF
              onCloseClick={handleCloseInfoWindow}
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
                    <Link href='/OverviewPage'>
                      <a className='button'>Go to Overview</a>
                    </Link>
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