import React from "react";

const Sidebar = () => {
  return (
    <div className="h-96 p-4 flex shadow-md rounded-lg flex-col justify-between w-1/5 items-start bg-white">
      <div className="flex flex-col gap-4 w-full">
        <div className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer">
          Task
        </div>
        <div className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer">
          <a href="/collector/profile">Profile</a>
        </div>
        <div className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer">
          Analytics
        </div>
        <div className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer">
          <a href="/collector/route">
            Route
          </a>
        </div>
      </div>
      <div className="w-full cursor-pointer rounded-lg">
        <a href='/login'><h1 className="px-4 py-2">Logout</h1></a>
      </div>
    </div>
  );
};

export default Sidebar;
