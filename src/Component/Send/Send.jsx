import React from 'react'
import { Link } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';

const Send = () => {
  const axios = require("axios");

  // Replace with your actual Paystack test secret key
  const PAYSTACK_SECRET_KEY = "sk_test_a52e6a49d9baeb6da1f389cdb3d0984b774bde67";

  // Function to fetch account holder name
  const fetchAccountHolderName = async (accountNumber, bankCode) => {
    try {
      const response = await axios.get("https://api.paystack.co/bank/resolve?account_number=0001234567&bank_code=058", {
        params: {
          account_number: accountNumber,
          bank_code: bankCode,
        },
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        },
      });

      if (response.data.status) {
        const accountHolderName = response.data.data.account_name;
        console.log(`Account Holder Name: ${accountHolderName}`);
        return accountHolderName;
      } else {
        console.error("Failed to fetch account holder name");
        return null;
      }
    } catch (error) {
      console.error(`Error fetching account holder name: ${error.message}`);
      return null;
    }
  };

  // Example usage
  const accountNumber = "1234567890"; // Replace with actual account number
  const bankCode = "044"; // Replace with actual bank code

  fetchAccountHolderName(accountNumber, bankCode);

  return (
    <div>
      <Link to="/home">
        <GoArrowLeft className="text-black text-4xl ml-4" />
      </Link>
      <form className="flex flex-col gap-5 mt-28">
        <h2 className='text-3xl text-[rgb(129,0,129)] font-semibold ml-5'>Send Money to:</h2>
        <input 
        type="text"
        id='Acc Number'
        placeholder='Enter Account Number'
        className="block w-[90%] p-2 shadow-sm bg-[rgb(241,179,241)] outline-none mt-10 placeholder-black border-b-2 border-[rgb(129,0,129)] ml-10 " />
        <input 
        type="text"
        id='BankName'
        className="block w-[90%] p-2 shadow-sm bg-[rgb(241,179,241)] outline-none  placeholder-black border-b-2 border-[rgb(129,0,129)] ml-10" />
          <h2 className='text-right text-xl font-semibold text-[rgb(129,0,129)] mr-24'>Issa basheet titilope</h2>
          <div className="flex justify-center items-center mt-24">
        <button className='p-2 bg-[rgb(129,0,129)] font-semibold text-white rounded-lg w-[35%] text-xl'>Send</button>
        </div>
      </form>
    </div>
  );
}

export default Send