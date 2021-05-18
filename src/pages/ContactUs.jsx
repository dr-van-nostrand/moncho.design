import React from "react";
//import Animations
import { motion } from "framer-motion";
import { pageAnimation } from "./Animation";

let ContactUs = (props) => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{  background: "#ffffff"  }}
    >
      <h1>Contact Us</h1>
    </motion.div>
  );
};

export default ContactUs;
