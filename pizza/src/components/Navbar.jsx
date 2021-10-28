import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo512.png";
import { FaFacebookMessenger } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

function Navbar() {
  return (
    <>
      <nav className="bg-black">
        <div className="container md:mx-6 px-2 flex justify-between items-center py-3">
          <div className="brand p-2 rounded-full">
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
              <a
                className="mr-4 text-lg hover:scale-150 transition-all duration-300"
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
    </>
  );
}

export default Navbar;
