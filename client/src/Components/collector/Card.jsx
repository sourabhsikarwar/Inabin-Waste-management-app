import React from 'react'

const Card = () => {
  return (
    <div className='w-full p-4 flex justify-between h-32 rounded-lg shadow-md'>
        <div className='flex flex-col justify-between'>
            <div>Name of the pickup</div>
            <div className='text-gray-400'>Name of the pickup</div>
            <div >address: Lorem ipsum dolor sit.</div>
        </div>
        <div className='flex flex-col items-center justify-between'>
            <div className='text-gray-400'>10.15.13</div>
            <button className='bg-green hover:bg-darkGreen py-1 px-4 text-white rounded-lg'>view</button>
        </div>
    </div>
  )
}

export default Card