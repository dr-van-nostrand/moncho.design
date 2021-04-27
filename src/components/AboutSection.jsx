import React from "react";
import about from "../img/about.jpg";

let AboutSection = (props) => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We are</h2>
          </div>
          <div className="hide">
            <h2>
              web <span>developers</span> and Designers
            </h2>
          </div>
          <div className="hide">
            <h2>
              living in Beautiful <span>Tigre</span>.
            </h2>
          </div>
        </div>
        <p>
          I’m a graphic designer from Buenos Aires. I have been working as a Web
          and Digital Designer since 2006 for different agencies and clients,
          Nationally and internationally.
        </p>
        <button>See our work</button>
      </div>
      <div className="image">
        <img src={about} alt="incredible and green Tigre" />
      </div>
    </div>
  );
};

export default AboutSection;
