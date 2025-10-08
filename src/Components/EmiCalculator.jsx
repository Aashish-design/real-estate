import React, { useState, useEffect } from "react";

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8);
  const [tenure, setTenure] = useState(5);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, tenure]);

  const calculateEMI = () => {
    const principal = Math.max(loanAmount, 0);
    const rate = Math.max(interestRate, 0);
    const time = Math.max(tenure, 0);

    const monthlyRate = rate / 12 / 100;
    const months = time * 12;

    let emiValue = 0;
    let total = 0;
    let interest = 0;

    if (monthlyRate === 0) {
      emiValue = principal / months;
      total = principal;
      interest = 0;
    } else {
      emiValue =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

      total = emiValue * months;
      interest = total - principal;
    }

    setEmi(emiValue);
    setTotalAmount(total);
    setTotalInterest(interest);
  };

  const formatCurrency = (num) =>
    num.toLocaleString("en-IN", { style: "currency", currency: "INR" });

  return (
    <div className="flex flex-col items-stretch justify-center bg-neutral-50 p-4 md:p-10 rounded-2xl shadow-lg max-w-6xl mx-auto mt-10">
      {/* LEFT CARD */}
      <div className="bg-gradient-to-br from-red-500 to-red-700 text-white flex-1 p-8 rounded-2xl flex flex-col justify-center mb-6 md:mb-0 md:mr-6">
        <div className="text-center flex flex-col justify-center items-center gap-[1vw]">
          <div>
            <img className="h-[80px]" src="/src/assets/images/emi.svg" alt="" />
          </div>
          <h2 className="text-xl font-medium mb-2 font-[Cabinet]">
            Your Monthly EMI
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold font-[Cabinet]">
            {formatCurrency(emi || 0)}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-[4vw] mt-[4vw] md:mt-[2vw]">
          <div className="bg-white/20 p-4 md:py-[2vw] rounded-xl text-center w-[100%]">
            <p className="text-[4vw] md:text-[1.2vw] opacity-80 font-[Cabinet]">
              Principal Amount
            </p>
            <p className="text-lg font-semibold font-[Cabinet]">
              {formatCurrency(loanAmount)}
            </p>
          </div>
          <div className="bg-white/20 p-4 md:py-[2vw] rounded-xl text-center w-[100%]">
            <p className="text-[4vw] md:text-[1.2vw] opacity-80 font-[Cabinet]">
              Total Interest
            </p>
            <p className="text-lg font-semibold font-[Cabinet]">
              {formatCurrency(totalInterest)}
            </p>
          </div>
          <div className="bg-white/20 p-4 md:py-[2vw] rounded-xl text-center col-span-2 w-[100%]">
            <p className="text-[4vw] md:text-[1.2vw] opacity-80 font-[Cabinet]">
              Total Amount
            </p>
            <p className="text-lg font-semibold font-[Cabinet]">
              {formatCurrency(totalAmount)}
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="bg-white flex-1 p-8 rounded-2xl">
        <h2 className="text-2xl font-semibold mb-6 font-[Cabinet]">
          Get started with the Digital EMI Calculator
        </h2>

        {/* Loan Amount */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-[Cabinet]">
            Loan Amount (₹)
          </label>
          <input
            type="number"
            value={loanAmount}
            min="0"
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full border rounded-lg p-2 mb-2 focus:ring-2 font-[Cabinet] focus:ring-red-500"
          />
          <input
            type="range"
            min="0"
            max="50000000"
            step="10000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full font-[Cabinet] accent-red-600"
          />
        </div>

        {/* Interest Rate */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-[Cabinet]">
            Interest Rate (% per year)
          </label>
          <input
            type="number"
            value={interestRate}
            min="0"
            max="20"
            step="0.1"
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full border rounded-lg p-2 font-[Cabinet] mb-2 focus:ring-2 focus:ring-red-500"
          />
          <input
            type="range"
            min="0"
            max="20"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full accent-red-600 font-[Cabinet]"
          />
        </div>

        {/* Tenure */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-[Cabinet]">
            Tenure (in years)
          </label>
          <input
            type="number"
            value={tenure}
            min="1"
            max="30"
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full border rounded-lg p-2 mb-2 font-[Cabinet] focus:ring-2 focus:ring-red-500"
          />
          <input
            type="range"
            min="1"
            max="30"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full accent-red-600 font-[Cabinet]"
          />
        </div>

        {/* Button */}
        <button
          onClick={calculateEMI}
          className="w-full bg-red-600 hover:bg-red-700 font-[Cabinet] text-white py-3 rounded-lg font-semibold transition-all"
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default EmiCalculator;
