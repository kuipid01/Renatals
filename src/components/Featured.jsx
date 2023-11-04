import React, { useState } from 'react'
import Card from './Card'

const Featured = () => {
  const [index, setIndex] = useState(0)
  return (
    <div className='flex py-6 w-11/12 mx-auto min-h-screen flex-col items-center '>
        <small className='text-gray w-full tracking-wider uppercase'>Newly Added</small>
        <div className="flex w-full items-center mt-3 justify-between">
        <h1 className='text-xl md:text-5xl text-secondary'>Featured Properties</h1>
        <div className="flex">
          <ul className='flex gap-10 text-xs'>
            <li onClick={() => setIndex(0)} className={`font-light text-xs ${index===0 && 'border-b-2 border-secondary'} text-primary pb-1 cursor-pointer`}>All Properties</li>
            <li onClick={() => setIndex(1)} className={`font-light text-xs  lg:text-base ${index===1 && 'border-b-2 border-secondary'} text-primary pb-1 cursor-pointer`}>For Sale</li>
            <li onClick={() => setIndex(2)} className={`font-light text-xs  lg:text-base ${index===2 && 'border-b-2 border-secondary'} text-primary pb-1 cursor-pointer`}>For Rent</li>
          </ul>
        </div>
        </div>
       
        <div className="flex my-6 p-3 md:p-8 flex-wrap justify-center gap-6">
          {
            [1,2,3,4,5,6].map(item => <Card key={item}/>)
          }

        </div>
    </div>
  )
}

export default Featured