'use client';
import React from 'react';
import { useRouter } from 'next/router';

const OverviewPage = () => {
  const router = useRouter();

  const handleOverviewClick = () => {
    router.push('/overview'); // Replace with the correct path to your Overview page
  };

  return (
    <button
      className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2'
      onClick={handleOverviewClick}
    >
      View Overview
    </button>
  );
}

export default OverviewPage;
