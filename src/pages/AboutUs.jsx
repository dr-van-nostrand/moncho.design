import React from "react";
//import page component
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";

let AboutUs = (props) => {
  return (
    <>
      <AboutSection />;
      <ServicesSection />
      <FaqSection />
    </>
  );
};

export default AboutUs;
