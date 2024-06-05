import React from "react";
import Uifry from "./logo/Uifry";

const TopNav = () => (
  <div className="flex h-16 lg:w-[900px] xl:w-[1100px] w-full items-center justify-center md:justify-normal container m-auto relative mt-4">
    <Uifry />

    <ul className="ml-10 lg:flex list-none hidden lg:w-[400px] items-center justify-around">
      <li className="text-[#FF5555] font-bold">Home</li>
      <li className="font-medium">About Us</li>
      <li className="font-medium">Pricing</li>
      <li className="font-medium">Features</li>
    </ul>

    <button className="w-44 h-12 md:flex absolute right-0 bg-black rounded text-white text-center hidden items-center justify-center">
      Download
    </button>
  </div>
);

export default TopNav;
