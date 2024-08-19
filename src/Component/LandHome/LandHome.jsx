import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const LandHome = () => {
  return (
    <div className="bg-[rgb(129,0,129)] h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3 w-full mobile:w-[90%]">
        <img
          src={assets.world_icon}
          alt="Homepage"
          className="w-[30%] mobile:w-[50%]"
        />
        <h3 className="text-white font-semibold text-4xl mobile:text-center mobile:text-xl">
          Make a world of difference
        </h3>
        <Link to="/signup" className="w-full flex justify-center">
          <button className="bg-transparent border font-semibold border-3 rounded-xl py-2 px-20 text-white hover:bg-orange-500 hover:border-none mobile:w-[70%] mobile:text-lg mobile:py-1">
            Sign up
          </button>
        </Link>
        <Link to="/login" className="w-full flex justify-center">
          <button className="bg-transparent border font-semibold border-3 rounded-xl py-2 px-20 text-white hover:bg-orange-500 hover:border-none mobile:w-[70%] mobile:text-lg mobile:py-1">
            Log in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandHome;
