import React from "react";
import { Images } from "../constant";
import { Link, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  let go = useNavigate()
  return (
    <div className="flex justify-around items-center font-[Montserrat] shadow-md p-5">
      <div>
        <img src={Images.logo} alt="" />
      </div>
      <div className="flex justify-center items-center gap-4 cursor-pointer ">
        <Link className="hover:border-b-2 hover:border-[#777777]">Home</Link>
        <Link className="hover:border-b-2 hover:border-[#777777]">Shop</Link>
        <Link className="hover:border-b-2 hover:border-[#777777]">Blog</Link>
        <Link className="hover:border-b-2 hover:border-[#777777]">About</Link>
        <Link className="hover:border-b-2 hover:border-[#777777]">Contact</Link>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Link to={"/login"} className="border rounded-full p-2">
          <FiUser className="text-[#777777]" />
        </Link>
        |
        <Link className="text-xl">
          <CiShoppingCart className="text-[#777777]" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
