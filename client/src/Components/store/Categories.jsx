import React from 'react'
import cat1 from "../../assets/images/store/category/icon1.png"
import cat2 from "../../assets/images/store/category/icon4.png"
import cat3 from "../../assets/images/store/category/icon6.png"
import cat4 from "../../assets/images/store/category/icon7.png"

const Categories = () => {
  return (
    <div className='container max-w-7xl mx-auto p-16 md:p-8'>
        <h1 className='text-center text-2xl text-darkGreen my-4 font-semibold'>Top Picks for a green lifestyle</h1>
        <div className='grid md:grid-cols-4 sm:grid-col-2 gap-8'>
            <div className='flex flex-col justify-center rounded-lg items-center hover:shadow-md p-8 cursor-pointer'>
                <img src={cat1} alt="" className='p-16' />
                <h1 className='text-lg font-medium text-gray-500'>Organic</h1>
            </div>
            <div className='flex flex-col justify-center rounded-lg items-center hover:shadow-md p-8 cursor-pointer'>
                <img src={cat2} alt="" className='p-16' />
                <h1 className='text-lg font-medium text-gray-500'>Upcycled</h1>
            </div>
            <div className='flex flex-col justify-center rounded-lg items-center hover:shadow-md p-8 cursor-pointer'>
                <img src={cat3} alt="" className='p-16' />
                <h1 className='text-lg font-medium text-gray-500'>Recycled</h1>
            </div>
            <div className='flex flex-col justify-center rounded-lg items-center hover:shadow-md p-8 cursor-pointer'>
                <img src={cat4} alt="" className='p-16' />
                <h1 className='text-lg font-medium text-gray-500'>Natural</h1>
            </div>
        </div>
    </div>
  )
}

export default Categories