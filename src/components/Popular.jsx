import React, { useRef } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
const Popular = () => {
  const ref = useRef(null);
  const isInView = useInView(ref,{ once: true });
 
  return (
    <motion.div
    
      className="flex py-6 min-h-screen flex-col items-center "
    >
      <small   ref={ref} className="text-gray tracking-wider uppercase">Best Choice</small>
      <motion.h1 style={{
          transform: isInView ? "none" : "translateY(-10px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s"
        }} className="text-3xl md:text-5xl text-secondary">
        Popular Properties
      </motion.h1>
      <motion.div
       style={{
        transform: isInView ? "none" : "translateY(20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
      }} 
        className="flex my-6 p-3 md:p-8 flex-wrap justify-center gap-6"
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Popular;
