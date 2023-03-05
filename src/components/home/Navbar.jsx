import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" bg-[#969696] min-w-full flex justify-between uppercase items-center h-24 md:max-w-[1240px]  mx-auto px-4 z-50">
      <Link to="/" className="text-white border-2 p-2 border-white	rounded-full">
        <h1 className="font-bold text-3xl">HC</h1>
      </Link>
      <ul className="hidden md:flex">
        <Link to="/">
          <li className="p-4 text-white">Home</li>
        </Link>
        <Link to="/about">
          <li className="p-4 whitespace-nowrap text-white">About Us</li>
        </Link>
        <Link to="/services">
          {" "}
          <li className="p-4 text-white">Services</li>
        </Link>
        <Link to="/contact">
          {" "}
          <li className="p-4 whitespace-nowrap text-white">Contact Us</li>
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden z-50">
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[75%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%] text-white z-50"
        }
      >
        <Link to="/">
          <h1 className="w-full text-md uppercase m-4 text-white">
            <span className="font-bold">Hays</span> Construction
          </h1>
        </Link>
        <Link to="/">
          {" "}
          <li className="p-4 border-b border-gray-600 text-white">Home</li>
        </Link>
        <Link to="/about">
          {" "}
          <li className="p-4 border-b border-gray-600 text-white">About Us</li>
        </Link>
        <Link to="/services">
          {" "}
          <li className="p-4 border-b border-gray-600 text-white">Services</li>
        </Link>
        <Link to="/contact">
          {" "}
          <li className="p-4 border-b border-gray-600 text-white">
            Contact Us
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
