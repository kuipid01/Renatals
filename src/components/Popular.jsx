import React from 'react'
import Card from './Card'

const Popular = () => {
  return (
    <div className='flex py-6 min-h-screen flex-col items-center '>
        <small className='text-gray tracking-wider uppercase'>Best Choice</small>
        <h1 className='text-3xl md:text-5xl text-secondary'>Popular Properties</h1>
        <div className="flex my-6 p-3 md:p-8 flex-wrap justify-center gap-6">
          {
            [1,2,3,4,5,6].map(item => <Card key={item}/>)
          }

        </div>
    </div>
  )
}

export default Popular