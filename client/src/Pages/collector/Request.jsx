import React from "react";
import Requests from "../../Components/collector/Requests";
import Sidebar from "../../Components/collector/Sidebar";

const Request = () => {
  return (
    <div className="container max-w-7xl mx-auto p-4">
      <div className="flex justify-between gap-4">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5">
          <Requests />
        </div>
      </div>
    </div>
  );
};

export default Request;
