import React from 'react';
import Footer from "../RootComponents/Footer";

export default function LearnMore() {
  return (
  <div>
    <div className="py-20 bg-black text-center"> 
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">Start Up Cost</h1>
      <p className="text-white italic mb-2">Do you know what is "Start Up Cost"?</p>
      <p className="text-white italic mb-2">Find out below!</p>
    </div>

    <div className="bg-white">
      <div className="px-10 pt-10 text-center">
        <h2>
          In buying a house, you must be aware of <strong>Start Up Cost</strong>. Let us help you to understand more below!
        </h2>
      </div>
  
      <div className="px-5 py-5 mt-10 mx-auto my-auto max-w-screen-lg bg-gray-200 text-black justify-center items-center text-center">
        <br/>
        <h1 className="pt-4 text-2xl font-bold mb-8">Step 1: MRTA (Mortgage Reducing Term Insurance) INSURANCE</h1>
        <p className="px-10 text-black mb-6">
        A life insurance plan with decreasing sum assured over time and it will cover the repayment of the 
        outstanding loan or financing to the financial institution of you are unable to do so because of death, 
        disability, or critical illness.
        </p>
      </div>


      <div className="px-5 mt-10 mx-auto max-w-screen-lg h-60 bg-gray-200 text-black justify-center items-center text-center">
        <br/>
        <h1 className="px-1 pt-8 text-2xl font-bold mb-8">Step 2: VALUATION REPORT</h1>
        <p className="px-10 text-black mb-6">
        A basic inspection of a property that will determine its value. A property surveyor will look at the
        property's location and condition to set the value. 
        </p>
      </div>

      <div className="px-5 mt-10 mx-auto max-w-screen-lg h-60 bg-gray-200 text-black justify-center items-center text-center">
        <br/>
        <h1 className="px-1 pt-8 text-2xl font-bold mb-8">Step 3: LEGAL FEES</h1>
        <p className="px-10 text-black mb-6">
        Part of the SPA (Sale and Purchase Agreement) and is basically a charge for engaging legal
        assistance for the purchase of a property.
        </p>
      </div>

      <div className="px-5 mt-10 mx-auto max-w-screen-lg h-60 bg-gray-200 text-black justify-center items-center text-center">
        <br/>
        <h1 className="px-1 pt-8 text-2xl font-bold mb-8">Step 4: SUBSIDY FOR START UP COST</h1>
        <p className="px-10 text-black mb-6">
        Normally, a bank will provide subsidies to help assist the start up cost.
        </p>
      </div>
      <br/>
      <br/>
    </div>
    <Footer/>
  </div>
  );
}
