import React, { useEffect, useState } from "react";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Footer() {
  const [date, setDate] = useState(new Date().getFullYear());
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);
  return (
    <>
      <footer>
        <p className="text-center md:mb-2 mb-12 text-gray-500 capitalize my-3">
          &copy; All rights belongs to pizzahut @ 2019 - {date}
        </p>
        <div className="md:hidden w-11/12 mx-auto rounded-md py-2 px-4 block bg-black md:relative fixed bottom-1 left-0 right-0 shadow-md">
          <ul className="flex justify-between items-center text-white font-semibold capitalize">
            <NavLink
              className="text-lg transition-all duration-150"
              activeClassName="active pb-0.5"
              exact
              to="/"
            >
              <FaHome />
            </NavLink>
            <NavLink
              className="text-lg transition-all duration-150"
              activeClassName="active pb-0.5"
              exact
              to="/product"
            >
              <FaShoppingBag />
            </NavLink>
            <NavLink
              className="text-lg transition-all duration-150"
              activeClassName="active pb-0.5"
              style={{ color: "white" }}
              to="/contact"
            >
              <IoMdMail/>
            </NavLink>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
