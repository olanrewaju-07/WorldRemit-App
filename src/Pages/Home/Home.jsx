import React, { useState } from 'react'
import { FaRss } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaQuestion, FaUser, FaEye, FaEyeSlash, FaPlus, FaRepeat, FaArrowRight, FaFile, FaCreditCard, FaMoneyBill1Wave} from "react-icons/fa6";

const Home = () => {
  const [isVisibleNaira, setIsVisibleNaira] = useState(false);
  const [isVisibleDollar, setIsVisibleDollar] = useState(false);
  const [isVisibleEuro, setIsVisibleEuro] = useState(false);

  const toggleVisibleNaira = () => {
    setIsVisibleNaira(!isVisibleNaira)
  }
  const toggleVisibleDollar = () => {
    setIsVisibleDollar (!isVisibleDollar)
  }
  const toggleVisibleEuro = () => {
    setIsVisibleEuro(!isVisibleEuro)
  }

  return (
    <div>
      <div className="bg-gray-200 w-full px-4 py-4">
        <div className="flex flex-row justify-between">
          <FaQuestion className="text-3xl bg-black text-white py-2 rounded-full mobile:hidden" />
          <FaUser className="text-2xl mobile:top-4 mobile:right-2 mobile:absolute mobile:text-[rgb(129,0,129)] mobile:text-[30px]" />
        </div>
        <div className="flex flex-row gap-5 justify-center items-center mt-6 mb-2 mobile:flex mobile:flex-row mobile:mt-14 mobile:items-center">
          <button className="flex flex-col border border-gray-300 rounded-lg bg-white px-24 mobile:px-4 mobile:w-40">
            <h2 className="block text-xl text-left">NGN</h2>
            <div className="flex flex-row gap-4 justify-center items-center mt-2">
              <span className="text-left font-semibold text-lg mb-1">
                {isVisibleNaira ? "₦16000.00" : "*****"}
              </span>
              <button
                onClick={toggleVisibleNaira}
                className="text-left mb-1 text-[rgb(129,0,129)]"
              >
                <FaEye icon={isVisibleNaira ? FaEye : FaEyeSlash} />
              </button>
            </div>
          </button>

          <button className="flex flex-col border-gray-300 rounded-lg bg-white px-24 mobile:px-4 mobile:w-40 ">
            <h2 className="block text-xl text-left">USD</h2>
            <div className="flex flex-row gap-4 justify-center items-center mt-2">
              <span className="text-left font-semibold text-lg mb-1">
                {isVisibleDollar ? "$10.00" : "*****"}
              </span>
              <button
                onClick={toggleVisibleDollar}
                className="text-left mb-1 text-[rgb(129,0,129)]"
              >
                <FaEye icon={isVisibleDollar ? FaEye : FaEyeSlash} />
              </button>
            </div>
          </button>

          <button className="flex flex-col border-gray-300 rounded-lg bg-white px-24 mobile:px-4 mobile:hidden ">
            <h2 className="block text-xl text-left">GBP</h2>
            <div className="flex flex-row gap-4 justify-center items-center mt-2">
              <span className="text-left font-semibold text-lg mb-1">
                {isVisibleEuro ? "€8.00" : "*****"}
              </span>
              <button
                onClick={toggleVisibleEuro}
                className="text-left mb-1 text-[rgb(129,0,129)]"
              >
                <FaEye icon={isVisibleEuro ? FaEye : FaEyeSlash} />
              </button>
            </div>
          </button>
        </div>

        <div className="flex flex-row gap-2 mt-5 justify-center mobile:grid mobile:grid-cols-2">
          <button className="flex flex-row gap-3 justify-center items-center bg-white rounded-full w-32 border border-[rgb(129,0,129)]  p-1 ">
            <FaPlus className="text-[rgb(129,0,129)]" />
            Add Cash
          </button>
          <button className="flex flex-row gap-3 justify-center items-center bg-white rounded-full w-32 border border-[rgb(129,0,129)]  p-1">
            <FaRepeat className="text-[rgb(129,0,129)]" />
            Convert
          </button>
          <button className="flex flex-row gap-3 justify-center items-center bg-white rounded-full w-32 border border-[rgb(129,0,129)] p-1 ">
            <FaArrowRight className="text-[rgb(129,0,129)]" />
            Cashout
          </button>
          <button className="flex flex-row gap-3 justify-center items-center bg-white rounded-full w-40 border border-[rgb(129,0,129)] p-1 ">
            <FaFile className="text-[rgb(129,0,129)]" />
            Acc statement
          </button>
        </div>
      </div>
      <div className="flex flex-row mt-6 gap-5 ml-5 mobile:ml-8">
        <Link
          to="/airtime"
          className="flex flex-col justify-center items-center bg-white rounded-lg w-56 border border-[rgb(129,0,129)] p-3 hover:bg-[rgb(241,179,241)] hover:border-none mobile:w-24"
        >
          <FaCreditCard />
          Airtime
        </Link>
        <Link
          to="/data"
          className="flex flex-col justify-center items-center bg-white rounded-lg w-56 border border-[rgb(129,0,129)] p-3 hover:bg-[rgb(241,179,241)] hover:border-none mobile:w-24"
        >
          <FaRss />
          Data
        </Link>
        <Link
          to="/paybill"
          className="flex flex-col justify-center items-center bg-white rounded-lg w-56 border border-[rgb(129,0,129)] p-3 hover:bg-[rgb(241,179,241)] hover:border-none mobile:w-24"
        >
          <FaMoneyBill1Wave />
          Pay Bill
        </Link>
      </div>
      <div className="flex flex-row gap-5 justify-center items-center mt-40 mobile:gap-10">
        <button className="p-3 w-56 rounded-lg bg-gray-300 text-[rgb(129,0,129)] hover:bg-[rgb(129,0,129)] hover:text-white text-xl font-semibold mobile:w-28">
          Request
        </button>
        <Link
          to="/send"
          className="p-3 w-56 rounded-lg bg-gray-300 text-[rgb(129,0,129)] hover:bg-[rgb(129,0,129)] hover:text-white text-xl font-semibold text-center mobile:w-28"
        >
          Send
        </Link>
      </div>
    </div>
  );
}

export default Home