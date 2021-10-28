import React, { useState } from "react";
import {
  Nav,
  Navbar,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import { FcInTransit } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { login, register as reg, logout as signout } from "../store/actions/auth"
import Modals from "./Modals";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function NavMenu() {
  const history = useHistory()
  const {auth,user} = useSelector(state => state.auth)
  const [searchvalue, setsearchvalue] = useState('')
  const dispatch = useDispatch()
  const search = (e) => {
    e.preventDefault();
    searchvalue.length > 0 ? history.push(`/search?q=${searchvalue}`) : history.push(`/`)
  }
  const logout = () => {
    dispatch(signout())
  }
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        className="px-lg-5 shadow py-3"
        sticky='top'
      >
        <Link to='/'>
          <Navbar.Brand><FcInTransit /> LaraCommerce Admin</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto d-flex justify-space-between">
            {
              auth ? <Button onClick={logout} className="mr-2" variant="danger">Logout</Button> : 
              <>
                <Modals title='sign in' body={<Signin />} />
                <Modals title='sign up' body={<Signup />} />
              </>
            }
          </Nav>
          <Form onSubmit={search} inline>
            <FormControl value={searchvalue} type="text" onChange={(e) => setsearchvalue(e.target.value)} placeholder="Search" className="mr-sm-2" />
          </Form>
         {auth && <img src={user.profile_photo_url} className="rounded-circle" alt={user.profile_photo_url} />}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default NavMenu;

//sign in form
function Signin() {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onTouched" });
  const [error, setError] = useState([]);
  const dispatch = useDispatch()

  const signinform = (data) => {
    dispatch(login(data, setError))
  };
  return (
    <React.Fragment>
      {error.message && <h6 style={{ color: "red" }}>{error.message}</h6>}
      <Form onSubmit={handleSubmit(signinform)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control {...register('email', { required: "Field is required" })} type="email" placeholder="Enter email" />
        </Form.Group>
        {errors.email && <h6 style={{ color: "red" }}>{errors.email.message}</h6>}
        {(error.errors && (error.errors).email) && <h6 style={{ color: "red" }}>{(error.errors).email}</h6>}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control {...register('password', { required: "Field is required", minLength: { value: 8, message: "Must be 8 length" } })} type="password" placeholder="Password" />
        </Form.Group>
        {errors.password && <h6 style={{ color: "red" }}>{errors.password.message}</h6>}
        {(error.errors && (error.errors).password) && <h6 style={{ color: "red" }}>{(error.errors).password}</h6>}
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check {...register('remember')} type="checkbox" label="Remember Me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </React.Fragment>
  );
}
//sign up form
function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: "onTouched" });
  const dispatch = useDispatch()
  const [error, setError] = useState({})
  const signupform = (data) => {
    dispatch(reg(data, setError))
  };
  return (
    <>
      {error.message && <h6 style={{ color: "red" }}>{error.message}</h6>}
      <Form onSubmit={handleSubmit(signupform)} >
        <Form.Group controlId="formBasicName">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control {...register('name', { required: "This Field is required", min: { value: 8, message: "Must be 8 length" } })} type="text" placeholder="Enter Name" />
        </Form.Group>
        {errors.name && <h6 style={{ color: "red" }}>{errors.name.message}</h6>}
        {(error.errors && (error.errors).name) && <h6 style={{ color: "red" }}>{(error.errors).name}</h6>}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control {...register('email', { required: "This Field is required", min: { value: 8, message: "Must be 8 length" } })} type="email" placeholder="Enter email" />
        </Form.Group>
        {errors.email && <h6 style={{ color: "red" }}>{errors.email.message}</h6>}
        {(error.errors && (error.errors).email) && <h6 style={{ color: "red" }}>{(error.errors).email}</h6>}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control {...register('password', { required: "This Field is required", min: { value: 8, message: "Must be 8 length" } })} type="password" placeholder="Password" />
        </Form.Group>
        {errors.password && <h6 style={{ color: "red" }}>{errors.password.message}</h6>}
        {(error.errors && (error.errors).password) && <h6 style={{ color: "red" }}>{(error.errors).password}</h6>}
        <Button variant="success" type="submit">
          Register Now
        </Button>
      </Form>
    </>
  );
}