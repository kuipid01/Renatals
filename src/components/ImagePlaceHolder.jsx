import React from 'react'
import {motion} from 'framer-motion'
const ImagePlaceHolder = ({dataLoaded}) => {
 
    return (
        <motion.div
          initial={{ backgroundColor: " hsl(200,20%,80%)" }}
          duration=".5"
          animate={{
            backgroundColor: " hsl(200,20%,95%)",
            transition: { duration: 1.5, repeat: !dataLoaded && Infinity },
          }}
          className="w-full rounded-md  h-full "
        ></motion.div>
      );

}

export default ImagePlaceHolder