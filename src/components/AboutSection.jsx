import React from "react";
import about from "../img/about.jpg";
import factory from "../img/factory.svg";
import styled from "styled-components";
//framer motion
import { motion } from "framer-motion";

import { StyledDescription, StyledImage, StyleHide } from "../styles";

let AboutSection = (props) => {

  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div
   
        >
          <div className="hide">
            <motion.h2 >About us</motion.h2>
          </div>
          <StyleHide>
            <motion.h3 >
              We are web <span>developers</span>
            </motion.h3>
          </StyleHide>
          <StyleHide>
            <motion.h3 >
        
              living in Beautiful Tigre.
            </motion.h3>
          </StyleHide>
        </motion.div>
        <p>
          I’m a graphic designer from Buenos Aires. I have been working as a Web
          and Digital Designer since 2006 for different agencies and clients,
          Nationally and internationally.
        </p>
        <button>See our work</button>
      </StyledDescription>
      <StyledImageAbout>
        <img src={factory} alt="incredible and green Tigre" />
      </StyledImageAbout>
    </StyledAbout>
  );
};

export const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  background-image: url(${about});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const StyledImageAbout = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 80%;
    height: 60vh;
    object-fit: cover;
  }
`;
export default AboutSection;
