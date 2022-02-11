import React from "react";
import { motion } from "framer-motion";

function MotionEffect({ children }) {
  return (
    <motion.div
      exit={{ scaleY: 0 }}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.5, delay: 0.4, type: "tween" }}
    >
      {children}
    </motion.div>
  );
}

export default MotionEffect;
