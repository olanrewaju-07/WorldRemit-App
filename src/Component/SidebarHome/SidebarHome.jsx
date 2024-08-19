import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaHome, FaCoins, FaMoneyBillWave, FaTimes, FaBars } from 'react-icons/fa';

const SidebarHome = () => {

   const [isOpen, setIsOpen] = useState(false);
   const sidebarRef = useRef();
   const toggleSidebar = () => {
    setIsOpen(!isOpen);
   }
  return (
    <div className="relative">
      <div  ref={sidebarRef}
        className={`fixed top-0 left-0 w-40 h-full text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:relative md:translate-x-0`}
      >
        <div className="w-full h-full ">
          <button onClick={toggleSidebar} className={`absolute top-4 text-[20px] right-4 ${!isOpen ? "hidden" : " " } md:hidden`}><FaTimes /></button>
          <div className="flex flex-col w-full h-screen gap-5 bg-[rgb(129,0,129)]">
            <nav className="mt-6 mobile:mt-14">
              <Link
                to="/home"
                className="flex items-center px-4 py-2 text-white-300 hover:bg-purple-400 hover:text-white gap-4 text-xl"
              >
                <FaHome />
                <span>Home</span>
              </Link>
              <Link
                to="/earn"
                className="flex items-center px-4 py-2 text-white-300 hover:bg-purple-400 hover:text-white gap-4 text-xl"
              >
                <FaCoins />
                <span>Earn</span>
              </Link>
              <Link
                to="/invest"
                className="flex items-center px-4 py-2 text-white-300 hover:bg-purple-400 hover:text-white gap-4 text-xl"
              >
                <FaMoneyBillWave />
                <span>Invest</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <button onClick={toggleSidebar} className={`absolute top-4 left-2 text-[35px] ${isOpen ? "hidden" : " "} md:hidden`}><FaBars  className='text-[rgb(129,0,129)]'/></button>
    </div>
  );
}

export default SidebarHome