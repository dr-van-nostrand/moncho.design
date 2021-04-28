import React from "react";
import about from "../img/about.jpg";
import styled from "styled-components";

let AboutSection = (props) => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <div className="hide">
            <h2>We are</h2>
          </div>
          <StyleHide>
            <h2>
              web <span>developers</span> and Designers
            </h2>
          </StyleHide>
          <StyleHide>
            <h2>
              living in Beautiful <span>Tigre</span>.
            </h2>
          </StyleHide>
        </div>
        <p>
          I’m a graphic designer from Buenos Aires. I have been working as a Web
          and Digital Designer since 2006 for different agencies and clients,
          Nationally and internationally.
        </p>
        <button>See our work</button>
      </StyledDescription>
      <StyledImage>
        <img src={about} alt="incredible and green Tigre" />
      </StyledImage>
    </StyledAbout>
  );
};

//styled components
const StyledAbout = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  background-color: #8e8ea8;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    color: #f8e16c;
  }
  p {
    color: white;
  }
`;

const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 100vh;
  }
`;

const StyleHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
