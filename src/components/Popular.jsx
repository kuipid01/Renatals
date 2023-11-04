import React, { useRef } from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
const Popular = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const headerTextVariant = {
    initial: {
      y: "100%",
      clipPath: "polygon( 0 100%, 100% 100%, 100% 100%, 0% 100% )",
    },
    animate: {
      y: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",

      transition: {
        duration: 1,
      },
    },
  };
  console.log(isInView);
  return (
    <motion.div
      ref={ref}
      className="flex py-6 min-h-screen flex-col items-center "
    >
      <small className="text-gray tracking-wider uppercase">Best Choice</small>
      <h1 className="text-3xl md:text-5xl text-secondary">
        Popular Properties
      </h1>
      <motion.div
        variants={headerTextVariant}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
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
