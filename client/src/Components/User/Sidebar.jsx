import React from "react";
import { Link } from "react-router-dom";
import bell from "../../assets/images/bell.svg";
import profile from "../../assets/images/profile.svg";
import logout from "../../assets/images/logout.svg";

const Sidebar = () => {
  return (
    <div className="h-96 p-4 flex shadow-md rounded-lg flex-col justify-between items-start w-full bg-white">
      <div className="flex flex-col gap-2 w-full">
        <Link
          to='/user/requests'
          className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer flex gap-4"
        >
          <img src={bell} alt="task" className="w-4" />
          <p>All Requests</p>
        </Link>
        <Link
          to="/user/profile"
          className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer flex gap-4"
        >
          <img src={profile} alt="task" className="w-4" />
          <p>Profile</p>
        </Link>
      </div>
      <div className="w-full cursor-pointer rounded-lg">
        <a href="/login">
          <div className="px-4 py-2 flex gap-4">
            <img src={logout} alt="logout" className="w-4" /> <span>Logout</span>
          </div></a>
      </div>
    </div>
  );
};

export default Sidebar;
