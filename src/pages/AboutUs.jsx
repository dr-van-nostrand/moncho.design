import React from "react";
//import page component
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
//import Animations
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";

let AboutUs = (props) => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />;
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
