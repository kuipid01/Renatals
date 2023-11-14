import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { PiImagesFill } from "react-icons/pi";
import upload from "../utils/upload";
const Tab4 = ({ handleUpload, state, setFiles, setSingleFile }) => {
  return (
    <div className="shadow-md gap-5 text-gray-600 w-[98%] md:w-[80%] flex flex-col p-2 py-5 mx-auto border mt-[4rem] h-fit md:h-fit bg-white">
      <div className="flex w-full p-3 flex-col gap-3">
        <h1 className="font-bold text-4xl">Upload Cover Images</h1>
        <p className="text-xl">Add A Clear Image as Cover Image</p>
        <div className="flex flex-wrap gap-5">
          <div className="w-full md:w-[200px] flex flex-col border-dashed border-2  justify-center items-center  h-[200px]">
            <label
              className="w-full h-full flex justify-center items-center flex-col cursor-pointer hover:bg-gray-200 transition-all"
              htmlFor="image">
              <AiOutlinePlus className="text-3xl font-bold " />
              <small className="font-bold capitalize">Add Image</small>
              <PiImagesFill className="text-5xl" />
            </label>
            <input
              className="hidden"
              type="file"
              onChange={(e) => setSingleFile(e.target.files[0])}
              name="image"
              id="image"
            />
          </div>
          {[0].map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[200px] flex flex-col border-solid shadow-md border-2  justify-center items-center  h-[200px]">
              {/* <AiOutlinePlus className='text-3xl font-bold '/>
                    <small>Add Image</small>
                    <PiImagesFill className='text-5xl'/> */}
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full p-3 flex-col gap-3">
        <h1 className="font-bold text-4xl">Upload Images</h1>
        <p className="text-xl">Add Upto 4 images</p>
        <div className="flex flex-wrap gap-5">
          <div className="w-full md:w-[200px] flex flex-col border-dashed border-2  justify-center items-center  h-[200px]">
            <label
              className="w-full h-full flex justify-center items-center flex-col cursor-pointer hover:bg-gray-200 transition-all"
              htmlFor="multipleImages">
              <AiOutlinePlus className="text-3xl font-bold " />
              <small className="font-bold capitalize">Add Image</small>
              <PiImagesFill className="text-5xl" />
            </label>
            <input
              className="hidden"
              type="file"
              multiple // allow multiple files
              onChange={(e) => setFiles(e.target.files)}
              name="multipleImages"
              id="multipleImages" // unique id
              accept="image/*" // specify accepted file types
            />
          </div>
          {state?.images.length > 0
            ? state.images.map(
                (
                  item,
                  index // Fix the map function syntax here
                ) => (
                  <div
                    key={index}
                    className="w-full md:w-[200px] flex flex-col border-solid shadow-md border-2  justify-center items-center  h-[200px]">
                    {/* Your image rendering logic goes here */}
                  </div>
                )
              )
            : [0, 1, 2, 3].map((item, index) => (
                <div
                  key={index}
                  className="w-full md:w-[200px] flex flex-col border-solid shadow-md border-2  justify-center items-center  h-[200px]">
                  {/* Your image rendering logic goes here */}
                </div>
              ))}
        </div>
      </div>
      <button
        onClick={handleUpload}
        className="px-3 md:px-5 py-2 h-[50px] text-sm md:text-base text-white rounded-md hover:bg-secondary/80 transition-all bg-secondary">
        UPLOAD IMAGES
      </button>
    </div>
  );
};

export default Tab4;
