import React from 'react'

const Tab5 = () => {
  return (
    <div className='shadow-md p-5 w-[98%] md:w-[80%]  flex flex-col  mx-auto border mt-[4rem] h-fit bg-white'>
        <h1 className="md:text-5xl text-2xl font-bold">
            Enter Rental Price List 
        </h1>
        <p className="text-bold md:text-lg mt-3 text-sm capitalize md:leading-10 text-secondary -tracking-tighter capittalize">
            If Rental not available for a stipulated range ,leave blank
        </p>

        <ul  className="flex mt-[3rem] gap-[20px] flex-col  justify-evenly w-full h-fit">
        <li className="flex  p-1 items-center gap-3">
           <span className="md:text-3xl  text-lg font-bold text-gray-500">Daily</span> :{" "}
          <input className='flex-1  outline-none p-2 h-[50px] border-b-2' type="text" inputmode="numeric" pattern="[0-9]*" />
        </li>
        <li className="flex   p-1 items-center gap-3">
           <span className="md:text-3xl text-lg font-bold text-gray-500">Monthly</span> :{" "}
          <input className='flex-1  outline-none p-2 h-[50px] border-b-2' type="text" inputmode="numeric" pattern="[0-9]*" />
        </li>
        <li className="flex   p-1 items-center gap-3">
           <span className="md:text-3xl text-lg font-bold text-gray-500">Yearly</span> :{" "}
          <input className='flex-1  outline-none p-2 h-[50px] border-b-2' type="text" inputmode="numeric" pattern="[0-9]*" />
        </li>
        </ul>
    </div>
  )
}

export default Tab5