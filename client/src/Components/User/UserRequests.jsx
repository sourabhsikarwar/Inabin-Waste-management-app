import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getAllPickupRequests } from "../../service/allPickRequest";

const UserRequests = () => {
  const [userRequestData, setUserRequestData] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const getRequests = async () => {
      try{
        const data = await getAllPickupRequests();
        console.log(data);
        setUserRequestData(data);
      } catch(error){
        console.log(error);
      }
    }
    getRequests();
  }, [])

  return (
    <div className="h-auto w-full flex gap-4 flex-col p-4 shadow-md bg-white rounded-lg">
      {userRequestData.map((item) => {
        if(item.requestUserID == userId)
          return <Card key={item.requestUserId} data={item}/>;
        return null;
      })}
      {userRequestData.filter(item => item.requestUserID === userId).length === 0 && (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-gray-500">No requests found</p>
        </div>
      )}
    </div>
  );
};

export default UserRequests;
