import React from 'react'

const Card = (props) => {

  var tDate = "";
  if (props.data && props.data.createdAt) {
    const date = new Date(props.data.createdAt);
    tDate = date.toLocaleDateString();
  }
  return (
    <div className='w-full p-4 flex justify-between h-32 rounded-lg shadow-md'>
      <div className='flex flex-col justify-between'>
        <div>{props.data.requestUser}</div>
        <div className='text-gray-400'>{props.data.address}</div>
        <div className='capitalize'>{props.data.status}</div>
      </div>
      <div className='flex flex-col items-center justify-between'>
        <div className='text-gray-400'>{tDate}</div>
        <button className='bg-green hover:bg-darkGreen py-1 px-4 text-white rounded-lg' onClick={() => window.location.href = `https://inabin-git-master-sourabhsikarwar.vercel.app/collector/request/${props.data._id}`}>{props.data.status === "started" ?"View" : "Collect" }</button>
      </div>
    </div>
  )
}

export default Card
