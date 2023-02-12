import React from "react";
import { Link } from "react-router-dom";
import volume from "../../assets/images/volume-white.svg";

const Sidebar = () => {
  return (
    <div className="h-96 p-4 flex shadow-md rounded-lg flex-col justify-between items-start w-full bg-white">
      <div className="flex flex-col gap-2 w-full">
        <Link
          to="#"
          className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer flex gap-4"
        >
          <img src={volume} alt="task" className="w-4" />
          <p>Task</p>
        </Link>
        <Link
          to="#"
          className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer flex gap-4"
        >
          <img src={volume} alt="task" className="w-4" />
          <p>Task</p>
        </Link>
        <Link
          to="#"
          className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer flex gap-4"
        >
          <img src={volume} alt="task" className="w-4" />
          <p>Analytics</p>
        </Link>
        <Link
          to="#"
          className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer flex gap-4"
        >
          <img src={volume} alt="task" className="w-4" />
          <p>Route</p>
        </Link>
      </div>
      <div className="w-full cursor-pointer rounded-lg">
        <div className="px-4 py-2 flex gap-4">
          <img src={volume} alt="logout" className="w-4" /> <span>logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
