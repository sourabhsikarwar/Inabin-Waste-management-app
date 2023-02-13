import React from "react";
import Navbar from "../Components/Navbar";
import RequestInfoTrack from "../Components/User/RequestInfoTrack";
import Sidebar from "../Components/User/Sidebar";

const RequestInfo = () => {
  return (
    <div>
      <Navbar />
      <div className="container max-w-7xl mx-auto py-8 flex gap-6">
        <div className="hidden md:block w-1/5">
          <Sidebar />
        </div>
        <div className="w-full md:w-4/5">
          <RequestInfoTrack />
        </div>
      </div>
    </div>
  );
};

export default RequestInfo;
