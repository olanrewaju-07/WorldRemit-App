import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaCoins, FaMoneyBillWave, FaTimes, FaBars } from 'react-icons/fa';

const SidebarHome = () => {

   const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
       <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="p-4 text-gray-800">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div className={`fixed top-0 left-0 w-64 h-full text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform md:relative md:translate-x-0`}>
    <div className="flex flex-col w-40 h-screen gap-5 bg-[rgb(129,0,129)]">
      <nav className="mt-6">
        <Link to="/" className="flex items-center px-4 py-2 text-white-300 hover:bg-purple-400 hover:text-white gap-4 text-xl">
        <FaHome />
        <span>Home</span>
        </Link>
        <Link to="/" className="flex items-center px-4 py-2 text-white-300 hover:bg-purple-400 hover:text-white gap-4 text-xl">
        <FaCoins />
        <span>Earn</span>
        </Link>
        <Link to="/" className="flex items-center px-4 py-2 text-white-300 hover:bg-purple-400 hover:text-white gap-4 text-xl">
        <FaMoneyBillWave />
        <span>Invest</span>
        </Link>
      </nav>
    </div>
    </div>
    </div>
  );
}

export default SidebarHome