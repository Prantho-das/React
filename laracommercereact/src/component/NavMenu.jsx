import React from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import { FcInTransit } from "react-icons/fc";
function NavMenu() {
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        className="px-lg-5 shadow py-3"
        sticky='top'
      >
        <Navbar.Brand href="#home"><FcInTransit/> LaraCommerce Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-3">
            <NavLink className="nav-link" exact activeClassName="activeAuth" to="/login">
              Login
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="activeAuth"
              exact
              to="/signup"
            >
              Register
            </NavLink>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavMenu;
