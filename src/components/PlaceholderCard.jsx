import React from "react";
import { motion } from "framer-motion";
const PlaceCard = () => {
  return (
    <div className="w-[300px] h-[400px] flex gap-3 flex-col">
      <motion.div
        initial={{ backgroundColor: " hsl(200,20%,80%)" }}
        duration=".5"
        animate={{
          backgroundColor: " hsl(200,20%,95%)",
          transition: { duration: 1.5, repeat:  Infinity },
        }}
        className="w-full h-1/2 rounded-md   "></motion.div>
      <div className="flex gap-3 flex-1 flex-col">
        <motion.div
          initial={{ backgroundColor: " hsl(200,20%,80%)" }}
          duration=".5"
          animate={{
            backgroundColor: " hsl(200,20%,95%)",
            transition: { duration: 1.5, repeat:  Infinity },
          }}
          className="w-full rounded h-[30px]"></motion.div>
            <motion.div
          initial={{ backgroundColor: " hsl(200,20%,80%)" }}
          duration=".5"
          animate={{
            backgroundColor: " hsl(200,20%,95%)",
            transition: { duration: 1.5, repeat:  Infinity },
          }}
          className="w-full rounded h-[30px]"></motion.div>
      </div>
    </div>
  );
};

export default PlaceCard;
