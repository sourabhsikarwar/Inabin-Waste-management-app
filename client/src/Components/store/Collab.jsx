import React from 'react'
import bg from "../../assets/images/store/bg2.jpg"

const Collab = () => {
  return (
    <div className="container max-w-7xl mx-auto my-4 p-4">
        <h1 className='text-center mx-auto text-2xl text-darkGreen font-semibold my-4'>Our Collaborator for shopping and coupons</h1>
      <div className="h-84 w-full p-8 rounded-xl grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-8 bg-white">
        <div className='cursor-pointer'>
            <img src="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676184047/Products/collab3_kgfrsm.png" className='mx-auto w-1/3' alt="collab" />
        </div>
        <div className='cursor-pointer'>
            <img src="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676184048/Products/collab5_svgt81.jpg" className='mx-auto w-1/3' alt="collab" />
        </div>
        <div className='cursor-pointer'>
            <img src="https://res.cloudinary.com/dzdaulvbt/image/upload/v1676183700/Products/collab1_pdokwb.jpg" className='mx-auto w-1/3' alt="collab" />
        </div>
      </div>
    </div>
  )
}

export default Collab