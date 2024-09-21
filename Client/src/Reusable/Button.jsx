import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Button({ btnName, btnBackground, btnHover, color, Class, btnLink }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Link to={btnLink} reloadDocument>
        <button
          className={`poppins main-button border-0 transition-all Dm-body font-normal text-[14px] bg-${btnBackground} ${btnHover} text-${color} font-medium ${Class}`}
        >
          {btnName}
        </button>
      </Link>
    </motion.div>
  );
}

export default Button;
