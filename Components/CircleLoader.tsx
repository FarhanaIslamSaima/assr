import React from 'react';
import { motion } from "framer-motion";



const circleStyle = {
  display: "block",
  width: "3rem",
  height: "3rem",
  border: "0.5rem solid #e9e9e9",
  borderTop: "0.5rem solid #3498db",
  borderRadius: "50%",
  position: "absolute",
  boxSizing: "border-box",
  top: 0,
  left: 0
};

const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 1
};

const CircleLoader = () => {
  return (
    <div className={'containerStyle'}>
   
  </div>

  );
};

export default CircleLoader;