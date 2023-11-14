import React from "react";
import { FaKitchenSet } from "react-icons/fa6";
// import { FaKitchenSet } from "react-icons/fa";
const Amenities = ({ item }) => {
  const { kitchen, rooms, desc, toilets } = item;
  return (
    <div className="flex justify-center flex-wrap gap-4">
      <div className="flex gap-1 flex-1 font-light text-xl items-center">
      <span className='text-primary text-base'> Kitchens: </span>
        <span className=" px-2 border-gray-300 rounded border-2">
          {kitchen}
        </span>
      </div>
      <div className="flex gap-1 flex-1 font-light text-xl items-center">
     <span className='text-primary text-base'>  Toilets: </span>
        <span className=" px-2 border-gray-300 rounded border-2">
          {toilets}
        </span>
      </div>
      <div className="flex gap-1 flex-1 font-light text-xl items-center">
   <span className='text-primary text-base'>    rooms: </span>
        <span className=" px-2 border-gray-300 rounded border-2">
          {rooms}
        </span>
      </div>
    </div>
  );
};

export default Amenities;
