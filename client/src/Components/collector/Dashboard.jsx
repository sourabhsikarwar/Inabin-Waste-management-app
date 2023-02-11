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
    <div>
      <p className="text-xl font-semibold pb-4">Dashboard</p>
      <RequestInfo/>
      <div className="my-2">
        <CollectionForm />
      </div>
    </div>
  );
};

export default CollectorDashboard;
