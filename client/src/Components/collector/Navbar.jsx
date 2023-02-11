import React from 'react'
import logo from "../../assets/react.svg"

const Navbar = () => {
  return (
    <div className='bg-white'>
    <div className='container max-w-7xl mx-auto flex justify-between items-center p-4'>
        <div className="w-12 flex items-center gap-4">
            <img src={logo} alt="logo" />
            <h1>React</h1>
        </div>
        <div className="flex gap-8 items-center">
            <div className='hover:bg-lightGreen rounded-lg cursor-pointer p-2'>Profile</div>
            <div className='hover:bg-lightGreen rounded-lg cursor-pointer p-2'>Learn</div>
            <button className='bg-green py-2 px-4 text-white rounded-md cursor-pointer hover:bg-darkGreen'>Use Coins</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar