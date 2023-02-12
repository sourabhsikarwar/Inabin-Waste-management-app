import React from "react";
import { Link } from "react-router-dom";
import bell from "../../assets/images/bell.svg"
import profile from "../../assets/images/profile.svg"
import route from "../../assets/images/route.svg"
import history from "../../assets/images/history.svg"
import logout from "../../assets/images/logout.svg"

const Sidebar = () => {
  return (
    <div className="h-96 p-4 flex shadow-md rounded-lg flex-col justify-between items-start w-full bg-white">
      <div className="flex flex-col gap-2 w-full">
        <Link
          to='/collector/dashboard'
          className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer flex gap-4"
        >
          <img src={bell} alt="task" className="w-4" />
          <p>Pickup Requests</p>
        </Link>
        <Link
          to='/collector/profile'
          className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer flex gap-4"
        >
          <img src={profile} alt="task" className="w-4" />
          <p>Profile</p>
        </Link>
        <Link
          to="/collector/pickups"
          className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer flex gap-4"
        >
          <img src={route} alt="task" className="w-4" />
          <p>Today's Route</p>
        </Link>
        <Link
          to="/collector/history"
          className="bg-transparent hover:bg-lightGreen w-full px-4 py-2 rounded-lg cursor-pointer flex gap-4"
        >
          <img src={history} alt="task" className="w-4" />
          <p>Pickup History</p>
        </Link>
      </div>
      <div className="w-full cursor-pointer rounded-lg">
        <Link to="/login">
          <div className="px-4 py-2 flex gap-4">
            <img src={logout} alt="logout" className="w-4" /> <span>Logout</span>
          </div></Link>
      </div>
    </div>
  );
};

export default Sidebar;
