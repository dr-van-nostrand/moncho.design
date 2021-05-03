import React from "react";
import styled from "styled-components";
import { Styled } from "../styles";

let Nav = (props) => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#">
          Moncho.Design
        </a>
      </h1>
      <ul>
        <li>
          <a href="@">1. About Us</a>
        </li>
        <li>
          <a href="@">2. Our Work</a>
        </li>
        <li>
          <a href="@">3. Contact Us</a>
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
