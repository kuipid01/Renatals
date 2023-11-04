import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { PiImagesFill } from "react-icons/pi";
const Tab4 = () => {
  return (
    <div className='shadow-md text-gray-600 w-[80%] flex flex-col p-2 py-5 mx-auto border mt-[4rem] h-[500px] bg-white'>

        <div className='flex p-3 flex-col gap-3'>
            <h1 className='font-bold text-4xl'>Upload Images</h1>
            <p className='text-xl'>Add Upto 4 images</p>
            <div className='flex gap-5'>
                <div className='w-[200px] flex flex-col border-dashed border-2  justify-center items-center  h-[200px]'>
                    <label className='w-full h-full flex justify-center items-center flex-col cursor-pointer hover:bg-gray-200 transition-all' htmlFor="image">
                     <AiOutlinePlus className='text-3xl font-bold '/>
                     <small className='font-bold capitalize'>Add Image</small>
                     <PiImagesFill className='text-5xl'/>
                     </label>
                     <input className='hidden' type="file" name="image" id="image" />
                </div>
                {
                    [0,1,2,3].map((item,index) => <div key={index} className='w-[200px] flex flex-col border-solid shadow-md border-2  justify-center items-center  h-[200px]'>
                    {/* <AiOutlinePlus className='text-3xl font-bold '/>
                    <small>Add Image</small>
                    <PiImagesFill className='text-5xl'/> */}
               </div> )
                }  
            </div>
        </div>
    </div>
  )
}

export default Tab4