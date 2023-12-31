import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Home = () => {
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
        delay:1,
      },
    },
  };
  const headerTextVariant2 = {
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
  return (
    <div className="w-full pb-[5rem] lg:pb-[0] flex flex-col-reverse md:flex-row  relative items-center h-fit min-h-screen bg-hero bg-primary">
      {/* <Navbar /> */}

      <motion.div
        variants={headerTextVariant}
        initial="initial"
        animate="animate"
        className="flex flex-col w-full justify-center px-3 md:px-0 md:ml-[5%] my-auto   space-y-6 lg:max-w-md h-2/4"
      >
        <p className="text-white font-normal text-xl md:font-semibold">
          The best place to rent the best homes
        </p>

        <p className="text-white font-extralight text-sm md:text-base md:font-normal">
          Huge numbers of properties available here for rent, and rentaal, also
          you can find here co-living property. So you have lots of opportunity
        </p>
        <Link to="/login">
          <button className="bg-secondary  hover:border-2 transition-all hover:border-secondary hover:bg-transparent  px-5 w-full py-2 h-[50px] md:h-[70px] font-bold rounded-lg text-white">
            {" "}
            Get Started{" "}
          </button>
        </Link>
      </motion.div>
      <motion.div  variants={headerTextVariant2}
      initial="initial"
      animate="animate" className="lg:flex-1 w-full mt-[12vh] h-2/4 lg:h-full flex-col gap-[2rem] flex justify-end items-end overflow-hidden">
        <p className="text-[35px] md:text-[35px] lg:text-[55px] text-center mx-auto  text-secondary font-bold">
          Find Your Most Suitable Property
        </p>
        <div className="w-[90%] mb-[1rem] mx-auto h-[300px] md:h-[450px] lg:h-[300px] overflow-hidden rounded-3xl shadow">
          <img
            src="/assets/house1.jpg"
            className="object-cover w-full h-full"
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
