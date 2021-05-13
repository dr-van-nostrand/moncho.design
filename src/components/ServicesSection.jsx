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
          <h2>Our Services</h2>
          <h3>
            Let's <span>build</span> something awesome
          </h3>
          <Cards>
            <Card>
              <div className="icon">
                <img className="iconSvg" src={cart} alt="carrito de compras" />
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
                <img className="iconSvg" src={pencil} alt="toll for design" />
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
                <img className="iconSvg" src={website} alt="navegador web" />
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
                <img className="iconSvg" src={software} alt="codigo de programacion" />
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
    color: #9d9cb2;
  }
  h3 {
    color: #9d9cb2;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
    color: #9d9cb2;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  width: 25%;
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    img{
      height: 70px;
    }
    h3 {
      font-size:  1.5rem;
      margin-left: 0.5rem;
      color: #9d9cb2;
    }
  }
`;

export default ServicesSection;
