import React from "react";
import pickup from "../../assets/images/pickup.svg";
import accuracy from "../../assets/images/accuracy.svg";
import points from "../../assets/images/rating-white.svg";
import { getAnalytics } from "../../service/api";

const Analytics = () => {

  const [analytics, setAnalytics] = React.useState(null);

  React.useEffect(() => {
    const getAnalytics1 = async () => {
      let id = localStorage.getItem('userId');
      let res = await getAnalytics(id);
      setAnalytics(res.data);
    }
    getAnalytics1();
  }, [])

  return (
    <div>
      <div className="p-4 md:p-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        <div className="py-4 px-6 shadow-md bg-white rounded-md flex justify-between">
          <div>
            <p className="text-md font-semibold text-gray-700">Pickups</p>
            <p className="text-xl">{analytics ? analytics.c : "--"}</p>
          </div>
          <img
            src={pickup}
            className="w-10 h-10 bg-blue rounded-full p-2"
            alt="pickup"
          />
        </div>
        <div className="p-4 px-6 shadow-md bg-white rounded-md flex justify-between">
          <div className="">
            <p className="text-md font-semibold text-gray-700">Accuracy</p>
            <p className="text-xl">
              85<span className="text-sm">%</span>
            </p>
          </div>
          <img
            src={accuracy}
            className="w-10 h-10 bg-yellow rounded-full p-2"
            alt="pickup"
          />
        </div>
        <div className="p-4 px-6 shadow-md bg-white rounded-md flex justify-between">
          <div>
            <p className="text-md font-semibold text-gray-700">Points</p>
            <p className="text-xl">{analytics ? analytics.p : "--"}</p>
          </div>
          <img
            src={points}
            className="w-10 h-10 bg-green rounded-full p-2"
            alt="pickup"
          />
        </div>
        <div className="p-4 px-6 shadow-md bg-white rounded-md flex justify-between">
          <div>
            <p className="text-md font-semibold text-gray-700">Pickups Left</p>
            <p className="text-xl">{analytics ? analytics.r : "--"}</p>
          </div>
          <img
            src={points}
            className="w-10 h-10 bg-green rounded-full p-2"
            alt="pickup"
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
