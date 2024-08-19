import React from 'react'
import { FaChartPie} from "react-icons/fa6";
import { FaPercentage, FaSignal, FaShieldAlt , FaBolt} from "react-icons/fa";


const Invest = () => {
  return (
    <div className='mobile:w-[80%]'>
      <h2 className="text-3xl text-center font-bold mt-8  mobile:text-xl mobile:mt-10">
        Stocks Investing for Everyone
      </h2>
      <div className="flex flex-col justify-start">
        <div className="flex flex-row gap-16 items-center ml-28 mt-8 mobile:ml-14">
          <FaChartPie className="text-[rgb(129,0,129)] size-6" />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Fractional Shares</h3>
            <span className='mobile:text-xl'>Start now with as little as SI USD(approx. ₦918.73)</span>
          </div>
        </div>
        <div className="flex flex-row gap-16 items-center ml-28 mt-5 mobile:ml-14">
          <FaPercentage className="text-[rgb(129,0,129)] size-6" />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Lowest Commission</h3>
            <span className="mobile:text-xl">Invest more, safe on fees</span>
          </div>
        </div>
        <div className="flex flex-row gap-16 items-center ml-28 mt-5 mobile:ml-14">
          <FaSignal className="text-[rgb(129,0,129)] size-6" />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Invest in the best</h3>
            <span className="mobile:text-xl">
              Own top US stock like Nike, Amazon, Tesla & more
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-16 items-center ml-28 mt-5 mobile:ml-14">
          <FaShieldAlt className="text-[rgb(129,0,129)] size-6" />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Trade Instantly</h3>
            <span className="mobile:text-xl">
              Fatest trade execution & confirmation
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-16 items-center ml-28 mt-5 mobile:ml-14">
          <FaBolt className="text-[rgb(129,0,129)] size-6" />
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold">Account protection</h3>
            <span className="mobile:text-xl">
              SIPC protection of securities and cash up to $500,000 USD
            </span>
          </div>
        </div>
      </div>
      <button className="bg-[rgb(129,0,129)] text-white text-xl font-semibold p-2 rounded-lg w-[50%] mt-24 ml-80 mobile:ml-24 mobile:mb-10">
        Begin Investing
      </button>
    </div>
  );
}

export default Invest