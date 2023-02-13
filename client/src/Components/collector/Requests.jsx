import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getAllPickupRequests } from "../../service/allPickRequest";

const Requests = () => {
  const [pickRequestData, setPickRequestData] = useState([]);

  useEffect(() => {
    const getRequests = async () => {
      try{
        const data = await getAllPickupRequests();
        setPickRequestData(data);
      } catch(error){
        console.log(error);
      }
    }
    getRequests();
  }, [])

  return (
    <div className="h-auto w-full flex gap-4 flex-col p-4 shadow-md bg-white rounded-lg">
      {pickRequestData.map((item) => {
        if(item.status === "started")
          return <Card key={item._id} data={item}/>;
        return null;
      })}
      {pickRequestData.filter(item => item.status === "started").length === 0 && (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-gray-500">No requests found</p>
        </div>
      )}
    </div>
  );
};

export default Requests;
