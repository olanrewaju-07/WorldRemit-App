import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const carriers = {
  702: "MTN",
  816: "MTN",
  704: "GLO",
  708: "9mobile",
  701: "Airtel",
};

  const plans = [
    { amount: "100MB", duration: "1 Day", price: "₦100" },
    { amount: "200MB", duration: "3 Day", price: "₦200" },
    { amount: "500MB", duration: "1 Day", price: "₦250" },
    { amount: "1000MB", duration: "1 Day", price: "₦300" },
    { amount: "1200MB", duration: "3 Day", price: "₦500" },
    { amount: "1500MB", duration: "3 Day", price: "₦700" },
    { amount: "2000MB", duration: "7 Day", price: "₦1000" },
    { amount: "3000MB", duration: "14 Day", price: "₦1500" },
    { amount: "5000MB", duration: "14 Day", price: "₦3000" },
  ];

const Data = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [carrier, setCarrier] = useState("");
  const [error, setError] = useState("");
  const [rechargeAmount, setRechargeAmount] = useState('');


  const validatePhoneNumber = (number) => {
    return /^[0-9]{11}$/.test(number);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setPhoneNumber(value);
    if (value.length === 11) {
      if (validatePhoneNumber(value)) {
        const prefix = value.slice(1, 4);
        setCarrier(carriers[prefix] || "Unknown Carrier");
        setError("");
      } else {
        setCarrier("");
        setError("Invalid phone number");
      }
    } else {
      setCarrier("");
      setError("");
    }
  };

  const handleRechargeClick = (plan) => {
    setRechargeAmount(plan.price)
  }


  return (
    <div className="bg-gray-300 min-h-screen">
      <Link to="/home">
        <GoArrowLeft className="text-black text-3xl ml-4 " />
      </Link>
      <div className="flex flex-row justify-center items-center gap-8">
        <div className="">
          {carrier && (
            <div className="mt-2 text-[rgb(129,0,129)] font-bold">
              {carrier}
            </div>
          )}
          {error && (
            <div className="mt-2 text-[rgb(129,0,129)] font-bold">{error}</div>
          )}
        </div>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phoneNumber}
          onChange={handleChange}
          placeholder="Enter phone number"
          className="block w-[60%] p-2 shadow-sm bg-[rgb(241,179,241)] outline-none mt-6 placeholder-black border-b-2 border-[rgb(129,0,129)]"
        />
      </div>
      <div className="flex flex-col bg-white w-[90%] mt-10 ml-14 rounded-md">
        <h1 className="text-2xl font-semibold mt-2 ml-2">Hot Deal</h1>
        <div className="grid grid-cols-3 gap-x-4 gap-y-6 ml-3 mr-3 mb-3 mt-4 ">
          {plans.map((plan, index) => (
            <div
              key={index}
              onClick={() => handleRechargeClick(plan)}
              className="flex flex-col bg-gray-200 p-4 text-center rounded-lg hover:bg-[rgb(241,179,241)] cursor-pointer"
            >
              <h2 className="text-3xl font-semibold">{plan.amount}</h2>
              <p className="text-l font-mono">{plan.duration}</p>
              <span className="text-[rgb(129,0,129)] font-medium">
                {plan.price}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-3 mb-4 ml-4 mr-4">
          <input
            type="text"
            id="recharge-amount"
            min="50"
            step="1"
            value={rechargeAmount}
            placeholder="50 - 100"
            className="block w-[80%] p-2 shadow-sm bg-[rgb(241,179,241)] outline-none mt-6 placeholder-black border-b-2 border-[rgb(129,0,129)] box-border"
          />
          <button className="bg-[rgb(129,0,129)] text-white text-2xl font-semibold w-[20%] rounded-lg box-border">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Data;
