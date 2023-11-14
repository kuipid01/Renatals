import React from "react";

const Tab2 = ({handleChange,state}) => {
  return (
    <div className="shadow-md w-[98%] md:w-[80%] flex flex-col p-2 py-5 mx-auto border mt-[4rem] h-[500px] bg-white">
  <label className="md:text-4xl text-xl font-bold mb-[1rem] text-gray-800 " htmlFor="desc">Enter Description</label>
  <textarea
    name="desc"
    id="desc"
    value={state?.desc}
    onChange={handleChange}
    className="w-full h-5/6 outline-none border text-2xl resize-none "
    placeholder="Type in a detailed description of the properties"
  />
</div>

  );
};

export default Tab2;
