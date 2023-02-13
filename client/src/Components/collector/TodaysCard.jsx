import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getAllPickupRequests } from "../../service/allPickRequest";

const TodayRequests = () => {
  const [pickRequestData, setPickRequestData] = useState([]);

  const id = localStorage.getItem("userId");
  useEffect(() => {
    const getRequests = async () => {
      try{
        const data = await getAllPickupRequests();
        setPickRequestData(data.filter((item) => item.collectorID === id && item.status === "in-progress"));
      } catch(error){
        console.log(error);
      }
    }
    getRequests();
  }, [])

  return (
    <div className="h-auto w-full flex gap-4 flex-col p-4 shadow-md bg-white rounded-lg">
      {pickRequestData.map((item) => {
            return <Card key={item._id} data={item}/>;
      })}
      {pickRequestData.length == 0 && <h1 className="text-center">No PickUps Today</h1>}
    </div>
  );
};

export default TodayRequests;
