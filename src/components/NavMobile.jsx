import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import {motion } from 'framer-motion'
import { navLinksData } from "./navLinksData";
export   const NavMobile = ({setMobile}) => {
    const linkVariants ={
        initial:{
            opacity:0,
           translateX:'200px'
        },
        animate: (index) => ({
            opacity:1,
            translateX:'0',
            transition:{
                delay: 0.5 *( index * 0.3),
                duration:.5,
                ease:[0.76,0,0.24,1]
            }
        })
    }
    return (
      <motion.ul
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100%" }}
        className={`flex z-[99999] px-[20px] flex-col lg:hidden left-0 absolute bottom top-full w-full  py-10 h-screen gap-5 text-gray-800 bg-white shadow-md items-center font-medium uppercase`}
      >
        {
          navLinksData.map((item,index) => {
            return (
              <Link   className="cursor-pointer  py-2 w-full text-black hover:bg-gray-300 transition-all" key={index} to={item.link}>
              <motion.li  variants={linkVariants} initial='initial' animate='animate' 
              custom={index}
                onClick={() => setMobile(!mobile)}
               className="w-full h-full"
              >
               {item.name}
              </motion.li>
            </Link>
            )
          })
        }
        
        <Link onClick={() => setMobile(!mobile)} to="/search">
          <AiOutlineSearch className="text-2xl  cursor-pointer hover:text-secondary transition-all" />
        </Link>
      </motion.ul>
    );
  };