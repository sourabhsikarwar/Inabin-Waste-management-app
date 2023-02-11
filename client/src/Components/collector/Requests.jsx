import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getAllPickupRequests } from "../../service/allPickRequest";

const Requests = () => {
  const [pickRequestData, setPickRequestData] = useState([]);

  useEffect(() => {
    const getRequests = async () => {
      try{
        const data = await getAllPickupRequests();
        console.log(data)
        setPickRequestData(data);
      } catch(error){
        console.log(error);
      }
    }
    getRequests()
  }, [])

  return (
    <div className="h-auto w-full flex gap-4 flex-col p-4 shadow-md bg-white rounded-lg">
      {pickRequestData.map((item) => {
        return <Card key={item._id} data={item}/>;
      })}
    </div>
  );
};

export default Requests;
