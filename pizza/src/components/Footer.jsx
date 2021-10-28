import React, { useEffect, useState } from "react";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
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
        <div className="md:hidden rounded-md py-2 px-4 block bg-gray-500 md:relative fixed w-full bottom-1 left-0 right-0 shadow-md">
          <ul className="flex justify-between items-center text-white font-semibold capitalize">
            <NavLink className="text-lg" activeClassName="active" exact to="/">
              <FaHome/>
            </NavLink>
            <NavLink
              className="text-lg mx-3 md:mx-0"
              activeClassName="active"
              exact
              to="/product"
            >
              <FaShoppingBag/>
            </NavLink>
            <NavLink
              activeClassName="active"
              to='/contact'
            >
              <GrContact/>
            </NavLink>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
