import React from 'react'
import NavMenu from "./NavMenu";
import { HiOutlineInboxIn } from "react-icons/hi";
import { FiHome } from "react-icons/fi";
import {Nav} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import {SideNav} from "../Global"
function Header({active}) {
    return (
      <>
        <NavMenu />
        <SideNav
          sidenav={active}
          className="sidenav shadow bg-primary text-primary"
        >
          <Nav defaultActiveKey="/" className="flex-column">
            <NavLink exact activeClassName="active" className="nav-link" to="/">
              <FiHome />
              <span className="ml-4 d-block">Dashboard</span>
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/category"
            >
              <HiOutlineInboxIn />
              <span className="ml-4 d-block">Category</span>
            </NavLink>
            <NavLink
              exact
              activeClassName="active"
              className="nav-link"
              to="/product"
            >
              <HiOutlineInboxIn />
              <span className="ml-4 d-block">Product</span>
            </NavLink>
          </Nav>
        </SideNav>
      </>
    );
}

export default Header
