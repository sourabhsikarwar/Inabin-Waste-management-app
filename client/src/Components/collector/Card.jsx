import React from 'react'

const Card = (props) => {
  return (
    <div className='w-full p-4 flex justify-between h-32 rounded-lg shadow-md'>
        <div className='flex flex-col justify-between'>
            <div>{props.data.requestUser}</div>
            <div className='text-gray-400'>{props.data.address}</div>
            <div className='capitalize'>{props.data.status}</div>
        </div>
        <div className='flex flex-col items-center justify-between'>
            <div className='text-gray-400'>10.15.13</div>
            <button className='bg-green hover:bg-darkGreen py-1 px-4 text-white rounded-lg'>view</button>
        </div>
    </div>
  )
}

export default Card