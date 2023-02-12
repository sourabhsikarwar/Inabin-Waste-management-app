import React, { useState } from 'react'
import Card from "./Card.jsx";
import TodayRequests from './TodaysCard.jsx';

const CollectionToday = () => {

  return (
    <div className="w-full">

      <p className="text-lg font-semibold my-4">Your Today's PickUp</p>
      <TodayRequests />
    </div>
  );
}

export default CollectionToday;