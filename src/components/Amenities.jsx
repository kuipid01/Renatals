import React from 'react'
import { FaKitchenSet } from "react-icons/fa6";
// import { FaKitchenSet } from "react-icons/fa";
const Amenities = () => {
  return (
    <div className='flex justify-center flex-wrap gap-4'>
       { [1,2,3,4,5,6,7,8,9].map(item  => <div className='flex gap-1 w-1/5 font-light text-xl items-center' key={item}>
        <FaKitchenSet className='text-primary'/> <span className=' px-2 border-gray-300 rounded border-2'>3</span>
       </div> )}
    </div>
  )
}

export default Amenities