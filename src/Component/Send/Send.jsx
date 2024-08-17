import React from 'react'
import { Link } from 'react-router-dom';
import { GoArrowLeft } from 'react-icons/go';

const Send = () => {
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