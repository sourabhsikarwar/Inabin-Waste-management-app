import { useState } from "react";
import { useParams } from "react-router-dom";
import { getRequestData } from "../../service/getRequestInfo";

const RequestInfo = (props) => {
  let tDate
  let date
  if ( props.data && props.data.createdAt) {
    date = new Date(props.data.createdAt);
    tDate = date.toLocaleDateString();
  }

  return (
    <div className="bg-white shadow-lg h-auto w-full rounded-lg flex justify-between p-8">
      <div className="flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="font-medium">Name: {props.data.requestUser || " "}</h1>
          <p className="text-gray-500">Contact: {props.data.contact || " "}</p>
        </div>
        <div className="flex gap-4">
          <h1 className="font-medium">Address : {props.data.address || " "}</h1>
          <p className="text-green cursor-pointer">Open in Map</p>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end">
        <div className="text-gray-500">{tDate || " "}</div>
        <div className="px-2 py-1 bg-green text-white rounded-lg capitalize">{props.data.status || " "}</div>
      </div>
    </div>
  );
};

export default RequestInfo;
