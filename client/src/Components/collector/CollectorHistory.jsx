import React, { useState } from 'react';
import HistoryCard from './HistoryCard';

const CollectionHistory = () => {


  return (
    <div className="w-full">

      <p className="text-lg font-semibold my-4">Your PickUp History</p>
      <div className='py-6'>
        <HistoryCard/>
         </div>        
    </div>
  );
}

export default CollectionHistory;