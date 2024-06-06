"use client"
import React, { useState } from "react";
import Image from 'next/image';
import Footer from '../RootComponents/Footer';
import House from '../../public/images/BE-House-01.png';

export default function LearnMore() {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [repaymentTerm, setRepaymentTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [totalPayment, setTotalPayment] = useState('');
  const [totalInterest, setTotalInterest] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = () => {
    const principalAmount = parseFloat(principal);
    const rate = parseFloat(interestRate) / 100 / 12; // Convert annual interest rate to monthly and decimal
    const months = parseFloat(repaymentTerm) * 12; // Convert years to months

    // Calculate monthly payment
    const monthly = (principalAmount * rate) / (1 - Math.pow(1 + rate, -months));
    setMonthlyPayment(monthly.toFixed(2));

    // Calculate total payment and total interest
    const total = monthly * months;
    const totalInterestAmount = total - principalAmount;
    setTotalPayment(total.toFixed(2));
    setTotalInterest(totalInterestAmount.toFixed(2));

    // Show the results section
    setShowResults(true);
  };

  return (
    <div className="bg-white">
      {/* Banner */}
      <div className="py-20 bg-black text-center"> 
        <h1 className="text-3xl font-bold text-yellow-400 mb-4">Loan Calculator</h1>
        <p className="text-gray-400 italic mb-2">A calculator designed to give you an idea of how much your loan repayments may be</p>
      </div>

      {/* Fields */}
      <div className="mx-auto px-4 sm:px-20 py-8 sm:py-16 sm:max-w-screen-xl">
        <div className="content-overlay">
          <div className="overlay-content flex flex-wrap justify-between items-start">

            <div className="content-left flex-1">
              <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">Fill in the fields below</h3>

              {/* Input fields */}
              <p className="text-gray-300 mt-4 sm:mt-8 sm:w-80 font-bold">*Principal amount (BND):</p>
              <div className="flex mt-2 mb-3">
                <span className="px-4 py-3 bg-gray-200 text-gray-700 rounded-l-md">$</span>
                <input 
                  type="text" 
                  className="px-1 py-2 sm:py-3 border border-gray-300 focus:outline-none focus:border-blue-500" 
                  aria-label="Amount (to the nearest dollar)"  
                  value={principal} 
                  onChange={(e) => setPrincipal(e.target.value)}
                  placeholder="10000"
                />
                <span className="px-4 py-3 bg-gray-200 text-gray-700 rounded-r-md">.00</span>
              </div>

              <p className="text-gray-300 mt-3 sm:mt-5 sm:w-80 font-bold">*Effective Interest Rate (%):</p>
              <div className="flex mt-2 mb-3">
                <input 
                  type="text" 
                  className="px-5 py-2 sm:py-3 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-l-md" 
                  aria-label="Interest Rate (%)" 
                  value={interestRate} 
                  onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="5.5"
                />
                <span className="px-6 py-3 bg-gray-200 text-gray-700 rounded-r-md">%</span>
              </div>

              <p className="text-gray-300 mt-3 sm:mt-5 sm:w-80 font-bold">*Repayment terms (years):</p>
              <div className="flex mt-2 mb-3">
                <input 
                  type="text" 
                  className="px-5 py-2 sm:py-3 border border-gray-300 focus:outline-none focus:border-blue-500 rounded-l-md" 
                  aria-label="Repayment Term (years)" 
                  value={repaymentTerm} 
                  onChange={(e) => setRepaymentTerm(e.target.value)}
                  placeholder="9"
                />
                <span className="px-3 py-3 bg-gray-200 text-gray-700 rounded-r-md">years</span>
              </div>

              <button 
                className="loan-button mt-4 sm:mt-6 bg-yellow-400 text-black px-8 py-3 sm:py-4 rounded-md font-bold" 
                onClick={handleCalculate}>CALCULATE
              </button>
            </div>

            {/* Image section */}
            <div className="content-left flex-1 mt-8 sm:mt-20 mb-8 sm:mb-0 sm:relative sm:flex-1 sm:ml-4 sm:mr-0">
              <Image
                src={House}
                alt="Brunei"
                width={500}
                height={500}
                className="sm:relative sm:static"
              />            
            </div>
          </div>

          {/* Display calculated results only when showResults is true */}
          <div className={`boxes mx-auto ${showResults ? 'sm:py-8 sm:max-w-screen-xl' : ''}`}>
            {showResults && (
              <div className="w-full h-40 bg-yellow-400 flex flex-col justify-center rounded-md">
                <div className="text-black font-bold">
                  <div className="overlay-content flex flex-wrap justify-between items-start text-center">
                    <div className="content-left flex-1">
                      <p className="sm:py-1 text-xl sm:text-2xl">Monthly Payment:</p>
                      <p className="sm:py-2 text-2xl sm:text-3xl">BND {monthlyPayment}</p>
                    </div>

                    <div className="content-center flex-1">
                      <p className="sm:py-1 text-xl sm:text-2xl">Total Payment:</p>
                      <p className="sm:py-2 text-2xl sm:text-3xl">BND {totalPayment}</p>
                    </div>

                    <div className="content-right flex-1">
                      <p className="sm:py-1 text-xl sm:text-2xl">Total Interest:</p>
                      <p className="sm:py-2 text-2xl sm:text-3xl">BND {totalInterest}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mb-2 mt-8 sm:mt-20"> 
          <h3 className="text-gray-400 font-bold mb-3">Disclaimer:</h3>
          <p className="text-gray-400 text-justify">This calculator is intended to be used for illustrative purposes only and 
          give an estimate guide to loan repayments based on information inserted by you. The computation are provided solely for reference only. 
          The figure calculated above does not constitute a loan application or offer. The figures and formula used within this calculator may 
          change at any time without notice, and actual interest rate and actual repayment amount may differ from the calculator. Bandar Estates 
          accepts no liability or responsibility for any losses arising from any use of or reliance upon any calculations or conclusions reached 
          using the calculator, including any errors or omissions thereof</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}




