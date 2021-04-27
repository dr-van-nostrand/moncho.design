import React from "react";
//import icons
import cart from "../img/cart.svg";
import pencil from "../img/pencil.svg";
import website from "../img/browser.svg";
import software from "../img/code.svg";
import home2 from "../img/services.jpg";

let ServicesSection = (props) => {
  return (
    <div>
      <div className="services">
        <div className="description">
          <h2>
            Let's <span>build</span> something awesome
          </h2>
          <div className="cards">
            <div className="card">
              <div className="icon">
                <img src={cart} alt="carrito de compras" />
                <h3>Shopify Customization</h3>
              </div>
              <p>
                Innovation as a Service Design Thinking Services Innovation
                Sprints Systems Design Digital Product Strategy Technology
                Architecture.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={pencil} alt="toll for design" />
                <h3>Logotype Design</h3>
              </div>
              <p>
                Innovation as a Service Design Thinking Services Innovation
                Sprints Systems Design Digital Product Strategy Technology
                Architecture.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={website} alt="navegador web" />
                <h3>Website Design</h3>
              </div>
              <p>
                Innovation as a Service Design Thinking Services Innovation
                Sprints Systems Design Digital Product Strategy Technology
                Architecture.
              </p>
            </div>
            <div className="card">
              <div className="icon">
                <img src={software} alt="codigo de programacion" />
                <h3>Software Development</h3>
              </div>
              <p>
                Innovation as a Service Design Thinking Services Innovation
                Sprints Systems Design Digital Product Strategy Technology
                Architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="beautiful code" />
      </div>
    </div>
  );
};

export default ServicesSection;
