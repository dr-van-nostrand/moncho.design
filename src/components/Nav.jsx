import React from "react";
import styled from "styled-components";
import { Styled } from "../styles";
import { Link } from "react-router-dom";

let Nav = (props) => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Moncho.Design
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  a {
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 2rem;
    font-family: "kanit";
    font-weight: 900;
    text-transform: uppercase;
    color: #9d9cb2;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
