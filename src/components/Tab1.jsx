import React from "react";
import {  AiOutlineClose } from "react-icons/ai";
const Tab1 = ({values,tags,setTags,deleteFromArray,setValues,addToarray}) => {
  return (
    <div className="shadow-md w-[80%] p-2 py-5 mx-auto border mt-[4rem] min-h-screen bg-white">
      <form className="w-[90%] mx-auto flex flex-col gap-10" action="">
        <div className="w-full flex  gap-2 items-center text-gray-500">
          {/* <label className="flex-4 text-lg text-black font-bold" htmlFor="title"> Rental Title</label> */}
          <input
            type="text"
            className="flex-1 px-2 py-5 border outline-none rounded-md shadow-md shadow-gray-400 text-2xl text-gray-500"
            placeholder="Enter Rental Title"
          />
        </div>
        <div className="w-full flexgap-2 items-center text-gray-500">
          <select
            className="w-full   px-2 py-5 border outline-none rounded-md shadow-md shadow-gray-400 text-2xl bg-white  flex  gap-2 items-center text-gray-500"
            name=""
            id=""
          >
            <option value="null">Select Category</option>
            <option value="null">Rental</option>
            <option value="null"> For Sale</option>
          </select>
        </div>
        <div className="flex w-full flex-col gap-3 mt-10">
          <p className="text-xl font-bold text-black/70">Keywords</p>
          <p className="text-medium text-gray-500">
            Enter tags related to this rental
          </p>
          <input
            value={values}
            onChange={(e) => setValues(e.target.value)}
            onKeyDown={addToarray} // Listen for Enter key press
            className="flex-1 px-2 py-5 border-2 outline-none rounded text-2xl placeholder:capitalize text-gray-500"
            placeholder="Enter Keywords that will enable your product show easily"
            type="text"
          />
          <div className="w-full flex gap-3">
            {tags?.map((item, index) => (
              <div
                key={index}
                className="px-4 flex items-center h-[40px]  gap-2 justify-center rounded-full bg-gray-600 text-gray-200"
              >
                {item}{" "}
                <span>
                  {" "}
                  <AiOutlineClose
                    onClick={() => deleteFromArray(index)}
                    className="font-bold mt-1 text-xs text-white cursor-pointer"
                  />{" "}
                </span>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Tab1;
