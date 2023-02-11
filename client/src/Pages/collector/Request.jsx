import React from "react";
import Navbar from "../../Components/collector/Navbar";
import Requests from "../../Components/collector/Requests";
import Sidebar from "../../Components/collector/Sidebar";

const Request = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="container max-w-7xl mx-auto p-4">
        <div className="flex justify-between gap-4">
          <div className="hidden w-1/5 md:flex">
            <Sidebar />
          </div>
          <div className="w-full md:w-4/5">
            <Requests />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
