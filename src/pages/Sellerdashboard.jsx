import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillCompass,
  AiOutlineCodepen,
  AiOutlineCompass,
  AiOutlinePlus,
} from "react-icons/ai";
const Sellerdashboard = () => {
  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [])
  return (
    <div className="w-full py-[12vh] bg-gray-100/50 min-h-screen  flex flex-col md:flex-row  justify-between px-[2rem] h-fit">
      <div className="w-full md:w-2/6 flex flex-col">
        <div className="w-full border-[1px] border-gray-400 p-[2rem] shadow gap-2 items-center  flex flex-col">
          <img
            src="/assets/house1.jpg"
            className="w-3/6 h-auto rounded-full object-cover"
            alt=""
          />
          <div className="flex items-center gap-1">
            {" "}
            <p className="text-black text-2xl">Kuipid </p>{" "}
            <AiOutlineCodepen className="text-gray-300" />{" "}
            <span className="p-1 text-white text-xs rounded-md bg-pink-500">
              Verified
            </span>
          </div>
          <p className="font-medium text-gray-400">@kuipid</p>
          <AiOutlineCodepen className="text-gray-300" /> {/* list starts */}
          <div className="border-t py-5 gap-[10px] flex flex-col w-full text-lg font-medium border-b border-gray-300">
            <div className="flex w-full justify-between">
              <div className="flex gap-3 items-center">
                <AiOutlineCompass className="text-gray-500" />
                <span className="text-gray-500">From</span>
              </div>
              <span className="text-gray-700 font-bold">Nigeria</span>
            </div>
            <div className="flex w-full justify-between">
              <div className="flex gap-3 items-center">
                <AiOutlineCompass className="text-gray-500" />
                <span className="text-gray-500">Property Listed</span>
              </div>
              <span className="text-gray-700 font-bold">30</span>
            </div>
          </div>
        </div>

        {/* desc */}
        <div className="w-full mt-[4rem]  border-[1px] border-gray-400 p-[2rem] shadow gap-2 items-center  flex flex-col">
          <div className="flex  w-full justify-between">
            <h1 className="text-black font-bold">Description</h1>{" "}
            <Link className="text-primary font-medium">Edit Description</Link>
          </div>
          <p className="text-sm font-bold text-gray-600 mt-[2rem]">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            sequi perspiciatis expedita possimus neque, laboriosam officia hic
            quasi ea aliquid, non nisi consectetur. Minus explicabo eum harum
            facilis error aspernatur?{" "}
          </p>
        </div>
      </div>

      {/* left side */}
      <div className="flex-1 mt-[2rem] md:mt-[0] md:ml-[2rem] h-fit">
        <div className="flex mb-[3rem] items-start justify-start p-2 border shadow">
          <button className="pb-2 border-b-4 border-secondary">
            Active Properties
          </button>
        </div>
        <div className="flex w-full flex-wrap gap-5 md:gap-3 justify-start">
          {[1, 2, 3].map((item) => (
            <Link className="w-full md:w-[250px]" key={item} to="/property/3">
              <div className="w-full p-2  border cursor-pointer shadow h-[300px] flex flex-col ">
                <img
                  src="/assets/house2.jpg"
                  className="w-full h-3/4 object-cover"
                  alt=""
                />
                <p className="capitalize font-medium  mt-2 text-gray-700">
                  three Bedroom flat deatched
                </p>
              </div>
            </Link>
          ))}
          <Link className="w-full" to="/user/12/rental/new">
            <div className="w-full md:w-[250px]  border cursor-pointer  justify-center items-center gap-2 shadow h-[300px] flex flex-col ">
              <div className="p-3 rounded-full bg-primary/20">
                <AiOutlinePlus className="text-5xl font-extrabold" />
              </div>

              <h1 className="font-bold">Add New Product</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sellerdashboard;
