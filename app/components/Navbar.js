import React from "react";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white flex items-center justify-between p-4 fixed w-full z-10 px-10">
      <div className="text-xl font-semibold w-full">My Portfolio</div>

      <div className="flex items-center justify-center w-full">
        <ul className="flex justify-around text-lg font-semibold w-full sm:w-3/4">
          <li>
            0. <span>Home</span>
          </li>
          <li>
            1. <span>About</span>
          </li>
          <li>
            2. <span>Projects</span>
          </li>
          <li>
            3. <span>Contact</span>
          </li>
        </ul>

        <button className="ml-4 px-5 py-2 border text-white rounded">
            Resume
        </button>
      </div>
    </nav>
  );
};
