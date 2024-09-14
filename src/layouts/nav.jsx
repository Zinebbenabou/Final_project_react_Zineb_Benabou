import React from "react";
import { Images } from "../constant";
import { Link, useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { MyAppContext } from "../context"; // Adjust the path if needed

const Navbar = () => {
  let navigate = useNavigate();
  const { cart } = MyAppContext(); // Get cart from context

  // Calculate the total number of items in the cart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex justify-around items-center font-[Montserrat] shadow-md p-5">
      <div>
        <img src={Images.logo} alt="Company Logo" />
      </div>
      <div className="flex justify-center items-center gap-4 cursor-pointer">
        <Link to="/" className="hover:border-b-2 hover:border-[#777777]">Home</Link>
        <Link to="/shop" className="hover:border-b-2 hover:border-[#777777]">Shop</Link>
        <Link to="/blog" className="hover:border-b-2 hover:border-[#777777]">Blog</Link>
        <Link to="/about" className="hover:border-b-2 hover:border-[#777777]">About</Link>
        <Link to="/contact" className="hover:border-b-2 hover:border-[#777777]">Contact</Link>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Link to="/login" className="border rounded-full p-2">
          <FiUser className="text-[#777777]" />
        </Link>
        <button onClick={() => navigate("/cart")} className="relative text-xl border-none bg-transparent">
          <CiShoppingCart className="text-[#777777]" />
          {totalItems > 0 && (
            <span className="absolute top-0 left-3 bg-neutral-900 text-xs text-white px-1.5 rounded-full hover:bg-red-500 transition duration-300">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
