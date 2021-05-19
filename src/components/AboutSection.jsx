import React from "react";
import about from "../img/about.jpg";
import factory from "../img/factory.svg";
import styled from "styled-components";
//framer motion
import { motion } from "framer-motion";
import { StyledDescription, StyledImage, StyleHide } from "../styles";
import { titleAnim, fade, photoAnim } from "../pages/Animation";
import Wave from "./Wave";

let AboutSection = (props) => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyleHide>
            <motion.h2 variants={titleAnim}>About us</motion.h2>
          </StyleHide>
          <StyleHide>
            <motion.h3 variants={titleAnim}>
              We are web <span>developers</span>
            </motion.h3>
          </StyleHide>
          <StyleHide>
            <motion.h3 variants={titleAnim}>
              living in Beautiful Tigre.
            </motion.h3>
          </StyleHide>
        </motion.div>
        <motion.p variants={fade}>
          I’m a graphic designer from Buenos Aires. I have been working as a Web
          and Digital Designer since 2006 for different agencies and clients,
          Nationally and internationally.
        </motion.p>
        <motion.button variants={fade}>See our work</motion.button>
      </StyledDescription>
      <StyledImageAbout>
        <motion.img
          variants={photoAnim}
          src={factory}
          alt="incredible and green Tigre"
        />
      </StyledImageAbout>
      <Wave />
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
  z-index: 2;

  overflow: hidden;
  img {
    width: 80%;
    height: 60vh;
    object-fit: cover;
  }
`;
export default AboutSection;
