import React from "react";

const Sidebar = () => {
  return (
    <div className="h-96 p-4 flex shadow-md rounded-lg flex-col justify-between items-start">
      <div className="flex flex-col gap-4 w-full">
        <div className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer">
          Task
        </div>
        <div className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer">
          Profile
        </div>
        <div className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer">
          Analytics
        </div>
      </div>
      <div className="w-full cursor-pointer rounded-lg">
        <h1 className="px-4 py-2">logout</h1>
      </div>
    </div>
  );
};

export default Sidebar;
