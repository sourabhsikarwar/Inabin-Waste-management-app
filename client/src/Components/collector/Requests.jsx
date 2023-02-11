import React, { useEffect, useState } from 'react'
import Card from './Card'
import { getAllPickupRequests } from '../../service/allPickRequest'

const Requests = () => {
  const [pickRequestData, setPickRequestData] = useState([])

  // useEffect(() => {
  //   const data = getAllPickupRequests();
  //   setPickRequestData(data)
  // }, [pickRequestData, setPickRequestData])

  return (
    <div className='h-auto flex gap-4 flex-col p-4 shadow-md bg-white rounded-lg'>
      {/* {pickRequestData.map((item) => {
        return <Card />
      })} */}
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default Requests