import React from 'react'
import { FaGift } from "react-icons/fa6";


const Earn = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-5 mt-20">
        <div className="flex justify-center items-center flex-col gap-5">
          <FaGift className="text-6xl text-[rgb(129,0,129)]" />
          <h1 className="text-3xl font-semibold">Invites Friend and Earn</h1>
          <p className='mobile:text-center mobile:text-[20px] mobile:w-[80%]'>
            Invite your friend in the US and 4000.00 when they send at least $30
            to an Africa country
          </p>
        </div>
        <div className="flex flex-col mt-20 gap-3">
          <button className='px-24 p-2 bg-[rgb(129,0,129)] text-white rounded-lg w-full mb-2'>Invite a Friend</button>
          <button className='p-2 bg-[rgb(129,0,129)] text-white rounded-lg w-full mb-2'>Copy refer code</button>
          <button className='p-2 bg-[rgb(129,0,129)] text-white rounded-lg w-full mb-2'>View refral history</button>
        </div>
        <a href="" className='mt-10 text-[rgb(129,0,129)] font-semibold text-xl'>View Terms and Condition</a>
      </div>
    </div>
  );
}

export default Earn