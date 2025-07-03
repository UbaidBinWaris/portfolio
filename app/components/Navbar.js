import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-[#0A1930] flex items-center justify-between p-4 fixed w-full z-10 px-10 text-[#63B8B2]">
      <div className="text-xl font-semibold w-full ">My Portfolio</div>

      <div className="flex items-center justify-center w-full">
        <ul className="flex justify-around text-lg font-semibold w-full sm:w-3/4 ">
          <li>
            0. <span className="text-gray-200">Home</span>
          </li>
          <li>
            1. <span className="text-gray-200">About</span>
          </li>
          <li>
            2. <span className="text-gray-200">Projects</span>
          </li>
          <li>
            3. <span className="text-gray-200">Contact</span>
          </li>
        </ul>

        <button className="ml-4 px-5 py-2 border border-[#63B8B2] rounded cursor-pointer text-[#63B8B2] hover:bg-[#63B8B2] hover:text-white transition-colors duration-300">
          Resume
        </button>
      </div>
    </nav>
  );
};
