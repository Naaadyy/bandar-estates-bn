import React from 'react'
import Link from 'next/link';

export default function PageComponents() {
  return (

    <div className="boxes mx-auto px-5 py-12 sm:py-24 sm:max-w-screen-xl flex flex-col sm:flex-row justify-between">
          <div className="start-left w-full sm:w-1/2 h-60 bg-yellow-400 text-black flex flex-col justify-center items-center rounded-lg">
            <h1 className="text-3xl font-bold">Start Up Cost</h1>
            <Link href="/LearnMore">
            <button className="start-button mt-4 bg-black text-white px-4 py-2 rounded-md">Learn More</button>
            </Link>  
          </div>

          <div className="loan-right w-full sm:w-1/2 h-60 bg-yellow-400 text-black flex flex-col justify-center items-center mt-8 sm:mt-0 sm:ml-20 rounded-lg">
            <h1 className="text-3xl font-bold">Loan Calculator</h1>
            <Link href="/CalculateHere">
            <button className="loan-button mt-4 bg-black text-white px-4 py-2 rounded-md">Calculate Here</button>
            </Link>
          </div>
        </div>
  );
}
