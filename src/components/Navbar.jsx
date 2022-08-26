import React from "react";
import { IoEyeSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="sticky top-0 shadow-sm h-20 flex items-center pl-10 bg-white">
      <IoEyeSharp className="text-green-600 mr-5" />
      Eyes on Social
    </nav>
  );
};

export default Navbar;
