import React from "react";
import { AiFillHome, AiOutlineCamera, AiOutlineCar, AiOutlineExpand, AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
const Card = ({item,click}) => {
  return (
    <Link onClick={() => click(item._id)} to={`/property/${item?._id}`} className="shadow-lg p-2 w-full md:w-[var(--card-width)] h-[500px]  overflow-hidden ">
      <div className="w-full relative h-1/2">
        <div className="px-3 bg-white text-gray-500 rounded-md absolute bottom-4 left-4 text-sm font-medium py-2">
          FOR RENT
        </div>
        <div className="absolute top-4 right-4 flex flex-col gap-3">
          <div className="bg-black/75 p-1 font-light gap-1 items-center text-white flex ">
            <AiOutlineCamera /> <span>08</span>pu
          </div>
          <div className="bg-black/75 p-1 font-light gap-1 items-center text-white flex ">
            <AiOutlineSearch /> <span>07</span>
          </div>
        </div>
        <img
          className="rounded-t-xl h-full w-full object-cover"
          src={item?.coverImage}
          alt=""
        />
      </div>
      <div className="h-1/2 space-y-2 bg-green w-full">
      <p className="text-2xl text-primary py-4 overflow-hidden">{item?.title}</p>
      <small className=" underline">{item?.desc}</small>
      <p className="font-bold text-xs">date</p>
      <div className="flex justify-between">
    
       <span className="flex gap-1 text-lg items-center text-gray-500 font-semibold"> <AiOutlineCar/> {item?.amenities?.carParks || '0'}</span> 
       <span className="flex gap-1 text-lg items-center text-gray-500 font-semibold"> <AiOutlineHome/> {item?.amenities?.rooms || '0'}</span> 

      </div>
     
      <p className="text-2xl text-primary py-4 overflow-hidden"> Price: #250000/Year</p>
      </div>
   
    </Link>
  );
};

export default Card;
