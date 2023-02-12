import React from "react";
import Navbar from "../Components/Navbar";
import Analytics from "../Components/User/Analytics";
import Sidebar from "../Components/User/Sidebar";
import UserRequests from "../Components/User/UserRequests";
import UserSidebar from "../Components/User/UserSidebar";

const Requests = () => {
  return (
    <div>
      <Navbar />
      <div className="container max-w-7xl mx-auto py-8 flex gap-6">
        <div className="hidden md:block w-1/5">
          <Sidebar />
        </div>
        <div className="w-full md:w-4/5 flex flex-col gap-6">
          <div>
            <Analytics />
          </div>
          <div>
            <UserRequests />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requests;
