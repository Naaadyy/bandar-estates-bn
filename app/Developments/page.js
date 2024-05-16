'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Footer from "../RootComponents/Footer";
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

export default function DevelopmentsPage() {
  const containerStyle = {
    width: '100%',
    height: '90vh'
  };

  const options = {
    mapId: '96d890c8d3f71719',
    //mapTypeControl: false,
    zoomControl: false,
    fullscreenControl: false,
    clickableIcons: false,
    //scrollwheel: true,
    streetViewControl: false,
  }
  
  const center = {
    lat: 4.929647696732591,
    lng: 114.93133116714998,
  }; 


  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })

  const pinIcon = {
    url: "/images/House-Icon.png",
    
  };


  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          options={options}
        > 
          {/* Child components, such as markers, info windows, etc. */}
          <MarkerF position={{lat:4.996072857644963, lng:115.02305250448714}}/>
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
      <Footer />
    </>
  );
}
