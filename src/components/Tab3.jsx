import React from "react";
import { TbToolsKitchen } from "react-icons/tb";
import { PiToiletLight } from "react-icons/pi";
import { AiOutlineCar } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
const Tab3 = () => {
  return (
    <div className="shadow-md w-[98%] md:w-[80%]  flex  flex-col p-2 py-5 mx-auto border mt-[4rem] h-fit bg-white">
      <p className="text-xl font-medium mb-[3rem] text-gray-900">
        Enter Number Available to each Amenity
      </p>
      <ul className="flex flex-wrap gap-3 justify-evenly w-full h-fit">
        <li className="flex w-full md:w-auto justify-between bg-gray-200 p-1 items-center gap-3">
          <TbToolsKitchen className="text-3xl " />{" "}
          <span className="text-xl font-medium text-gray-500">Kitchens</span> :{" "}
          <input
            className="w-[40px] rounded-md border-gray-500 outline-none p-2 h-[40px] border-2"
            type="text"
            inputmode="numeric"
            pattern="[0-9]*"
          />
        </li>
        <li className="flex w-full md:w-auto justify-between bg-gray-200 p-1 items-center gap-3">
          <PiToiletLight className="text-3xl " />{" "}
          <span className="text-xl font-medium text-gray-500">Rest Rooms</span>{" "}
          :{" "}
          <input
            className="w-[40px] rounded-md border-gray-500 outline-none p-2 h-[40px] border-2"
            type="text"
            inputmode="numeric"
            pattern="[0-9]*"
          />
        </li>
        <li className="flex w-full md:w-auto justify-between bg-gray-200 p-1 items-center gap-3">
          <AiOutlineCar className="text-3xl " />{" "}
          <span className="text-xl font-medium text-gray-500">Car Space</span> :{" "}
          <input
            className="w-[40px] rounded-md border-gray-500 outline-none p-2 h-[40px] border-2"
            type="text"
            inputmode="numeric"
            pattern="[0-9]*"
          />
        </li>
        <li className="flex w-full md:w-auto justify-between bg-gray-200 p-1 items-center gap-3">
          <BsHouseDoor className="text-3xl " />{" "}
          <span className="text-xl font-medium text-gray-500">Rooms</span> :{" "}
          <input
            className="w-[40px] rounded-md border-gray-500 outline-none p-2 h-[40px] border-2"
            type="text"
            inputmode="numeric"
            pattern="[0-9]*"
          />
        </li>
      </ul>
      <textarea
        name="desc"
        id="dessc"
        className="w-full mt-[2rem] p-3 resize-none min-h-[200px] md:min-h-[300px] rounded-md shadow-md border-2 text-3xl text-gray-600 border-black/40 outline-none placeholder:text-xl  md:placeholder:text-3xl"
        placeholder="Enter other Amenities "
      />
    </div>
  );
};

export default Tab3;
