import React from "react";
import { Link } from "react-router-dom";
import volume from "../../assets/images/volume-white.svg";

const Sidebar = () => {
  return (
    <div className="h-96 p-4 flex shadow-md rounded-lg flex-col justify-between items-start w-full bg-white">
      <div className="flex flex-col gap-2 w-full">
        <a
          href='/collector/dashboard'
          className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer flex gap-4"
        >
          <img src={volume} alt="task" className="w-4" />
          <p>Pickup Requests</p>
        </a>
        <a
          href='/collector/profile'
          className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer flex gap-4"
        >
          <img src={volume} alt="task" className="w-4" />
          <p>Profile</p>
        </a>
        <a
          href="/collector/pickups"
          className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer flex gap-4"
        >
          <img src={volume} alt="task" className="w-4" />
          <p>Today's Route</p>
        </a>
        <a
          href="/collector/history"
          className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer flex gap-4"
        >
          <img src={volume} alt="task" className="w-4" />
          <p>Pickup History</p>
        </a>
      </div>
      <div className="w-full cursor-pointer rounded-lg">
        <a href="/login">
          <div className="px-4 py-2 flex gap-4">
            <img src={volume} alt="logout" className="w-4" /> <span>Logout</span>
          </div></a>
      </div>
    </div>
  );
};

export default Sidebar;
