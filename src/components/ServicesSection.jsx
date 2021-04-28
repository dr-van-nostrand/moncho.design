import React from "react";
import styled from "styled-components";

//import icons
import cart from "../img/cart.svg";
import pencil from "../img/pencil.svg";
import website from "../img/browser.svg";
import software from "../img/code.svg";
import home2 from "../img/services.jpg";
//styles
import { Styled, StyledDescription, StyledImage, StyleHide } from "../styles";

let ServicesSection = (props) => {
  return (
    <div>
      <StyledServices>
        <StyledDescription>
          <h2>
            Let's <span>build</span> something awesome
          </h2>
          <Cards>
            <Card>
              <div className="icon">
                <img src={cart} alt="carrito de compras" />
                <h3>Shopify Customization</h3>
              </div>
              <p>
                Innovation as a Service Design Thinking Services Innovation
                Sprints Systems Design Digital Product Strategy Technology
                Architecture.
              </p>
            </Card>
            <Card>
              <div className="icon">
                <img src={pencil} alt="toll for design" />
                <h3>Logotype Design</h3>
              </div>
              <p>
                Innovation as a Service Design Thinking Services Innovation
                Sprints Systems Design Digital Product Strategy Technology
                Architecture.
              </p>
              </Card>
            <Card>
              <div className="icon">
                <img src={website} alt="navegador web" />
                <h3>Website Design</h3>
              </div>
              <p>
                Innovation as a Service Design Thinking Services Innovation
                Sprints Systems Design Digital Product Strategy Technology
                Architecture.
              </p>
              </Card>
            <Card>
              <div className="icon">
                <img src={software} alt="codigo de programacion" />
                <h3>Software Development</h3>
              </div>
              <p>
                Innovation as a Service Design Thinking Services Innovation
                Sprints Systems Design Digital Product Strategy Technology
                Architecture.
              </p>
              </Card>
          </Cards>
        </StyledDescription>
        <StyledImage>
          <img src={home2} alt="beautiful code" />
        </StyledImage>
      </StyledServices>
    </div>
  );
};

const StyledServices = styled(Styled)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    h3{
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;



export default ServicesSection;
