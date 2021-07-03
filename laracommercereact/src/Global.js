import { Link } from "react-router-dom";
import styled from "styled-components";
export const Title = styled.h1`
  font-size: 2rem;
  color: "black";
`;
export const Button = styled(Link)`
  outline: none;
  padding: 0.6rem 1.4rem;
  font-size: 1.1rem;
  border-radius: 0.25rem;
  border: none;
  box-shadow: 0.3rem 0.2rem 10px #d4cccc;
  cursor: pointer;
  background-color: ${(props) => props.colorname};
  color: ${(props) => (props.colorname ? "white" : "black")};
  text-decoration: none;
  font-weight: 600;
`;
export const SideNav = styled.div`
  width: ${(props) => (props.sidenav ? "300px" : "70px")};
  height: calc(100vh - 70px);
  position: fixed;
  overflow-x: hidden;
  transition: 0.3s linear;
  @media (max-width: 768px) {
    width: ${(props) => (props.sidenav ? "200px" : "70px")};
  }
`;
export const SideBody = styled.div`
  width: ${(props) =>
    props.sidebody ? "calc(100vw - 300px)" : "calc(100vw - 70px)"} !important;
  position: absolute;
  left: ${(props) => (props.sidebody ? "300px" : "70px")};
  position: relative;
  transition: 0.3s linear;
  @media (max-width: 768px) {
    left: ${(props) => (props.sidebody ? "200px" : "70px")};
    width: ${(props) =>
      props.sidebody ? "calc(100vw - 200px)" : "calc(100vw - 70px)"} !important;
  }
`;
export const Pagebody = styled.div`
  padding: 0rem 1.5rem;
`;
