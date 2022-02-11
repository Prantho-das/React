import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/pizza.png";
import { FaFacebookMessenger } from "react-icons/fa";
import { GrInstagram, GrLock } from "react-icons/gr";

function Navbar() {
  return (
    <>
      <nav className="bg-black">
        <div className="md:container mx-auto px-2 flex justify-between items-center py-3">
          <div className="brand p-2 rounded-full md:mx-0 mx-auto">
            <Link to="/">
              <img src={Logo} className="w-10" alt="logo" />
            </Link>
          </div>
          <div className="md:w-1/3 mx-auto md:block hidden">
            <ul className="flex justify-between items-center text-white font-semibold capitalize">
              <NavLink
                className="text-lg"
                activeClassName="active"
                exact
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="text-lg mx-3 md:mx-0"
                activeClassName="active"
                exact
                to="/product"
              >
                Product
              </NavLink>
              <NavLink
                activeClassName="active"
                className="pr-2 border-r-4 text-lg border-green-500"
                to="/contact"
              >
                Contact
              </NavLink>
            </ul>
          </div>
          <div className="md:flex hidden justify-between items-center text-white capitalize">
            <Link to="/" className="w-8 h-8 bg-gray-200 rounded-full">
              <img src={Logo} alt="" className="cover" />
            </Link>
            <Link to="/" className="w-8 h-8 flex justify-center items-center font-semibold bg-green-200 rounded-full">
              <GrLock />
            </Link>
            <a
              className="mx-4 text-lg hover:scale-150 transition-all duration-300"
              href="/"
            >
              <FaFacebookMessenger />
            </a>
            <a
              href="/product"
              className="text-lg hover:scale-150 transition-all duration-300 "
            >
              <GrInstagram />
            </a>
          </div>
        </div>
      </nav>
      <marquee className="py-1 bg-blue-900 shadow-md text-white font-semibold capitalize text-xl">
        prantho is a good man
      </marquee>
    </>
  );
}

export default Navbar;
