import React from "react";

import pickup from "../../assets/images/pickup.svg";
import accuracy from "../../assets/images/accuracy.svg";
import points from "../../assets/images/rating-white.svg"
const CollectorDashboard = () => {
    return (
        <div>
            <p className="text-xl font-semibold pb-4">Dashboard</p>
            <div className="grid grid-cols-3 gap-5">
                <div className="p-4 px-6 shadow-md bg-gray-100 rounded-md flex justify-between">
                    <div className="">
                        <p className="text-md font-semibold text-gray-700">Pickups</p>
                        <p className="text-xl">70</p>
                    </div>
                    <img src={pickup} className="w-10 h-10 bg-blue rounded-full p-2" alt="pickup" />
                </div>
                <div className="p-4 px-6 shadow-md bg-gray-100 rounded-md flex justify-between">
                    <div className="">
                        <p className="text-md font-semibold text-gray-700">Accuracy</p>
                        <p className="text-xl">85<span classsName="text-sm">%</span></p>
                    </div>
                    <img src={accuracy} className="w-10 h-10 bg-yellow rounded-full p-2" alt="pickup" />
                </div>
                <div className="p-4 px-6 shadow-md bg-gray-100 rounded-md flex justify-between">
                    <div>
                        <p className="text-md font-semibold text-gray-700">Points</p>
                        <p className="text-xl">70</p>
                    </div>
                    <img src={points} className="w-10 h-10 bg-green rounded-full p-2" alt="pickup" />
                </div>
            </div>
            <div className="py-8">
                <p className="font-semibold">
                Routes For Today</p>
            </div>
        </div>
    );
}

export default CollectorDashboard;