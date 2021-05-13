import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//Images
import korn from "../img/korn-m.jpg";
import tangram from "../img/tangram-m.jpg";
import yumit from "../img/yumit-m.jpg";

let OurWork = (props) => {
  return (
    <Work>
      <Movie>
        <h2>The Korn Characters</h2>
        <div className="line"></div>
        <Link to="/work/korn">
          <img src={korn} alt="korn" href="" />
        </Link>
      </Movie>
      <Movie>
        <h2>Tangram Building</h2>
        <div className="line"></div>
        <Link to="/work/tangram">
          <img src={tangram} alt="tangram" href="" />
        </Link>
      </Movie>
      <Movie>
        <h2>Yumit Project</h2>
        <div className="line"></div>
        <Link to="/work/yumit">
          <img src={yumit} alt="yumit" href="" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled.div`
  min-width: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #8e8ea8;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
