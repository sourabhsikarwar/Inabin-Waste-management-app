import React from "react";
import pickup from "../../assets/images/pickup.svg";
import accuracy from "../../assets/images/accuracy.svg";
import points from "../../assets/images/rating-white.svg";
import Requests from "./Requests";
import Analytics from "./Analytics";
import RequestInfo from "./RequestInfo";
import CollectionForm from "./CollectionForm";

const CollectorDashboard = () => {
  return (
    <div className="w-full">
      <p className="text-xl font-semibold mb-4">Dashboard</p>
      <Analytics />
      <p className="text-lg font-semibold my-4">PickUp Requests</p>
      <Requests />
    </div>
  );
};

export default CollectorDashboard;
