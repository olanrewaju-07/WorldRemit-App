import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const LandHome = () => {
  return (
    <div className='bg-[rgb(129,0,129)]'>
      <div className="flex flex-col justify-center items-center min-h-screen gap-3 sm:min-h-screen">
        <img src={assets.world_icon} alt="Hompage" className='w-[30%] ' />
        <h3 className='text-white font-semibold text-4xl'>Make a world of difference</h3>
         <Link to="/signup"> <button className='bg-transparent border font-semibold border-3 rounded-xl py-2 px-40 text-white bg:hover-orange hover:bg-orange-500 hover:border-none'>Sign up</button></Link>
         <Link to="/login"> <button className='bg-transparent border font-semibold border-3 rounded-xl py-2 px-40 text-white bg:hover-orange hover:bg-orange-500 hover:border-none'>Log in</button></Link>
      </div>
    </div>
  )
}

export default LandHome