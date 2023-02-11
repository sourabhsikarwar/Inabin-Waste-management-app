import React from "react";

// Images
import wasteman from "../../assets/images/Waste management-pana.svg"
import trash from "../../assets/images/trash.svg";
import avatar from "../../assets/images/avatar.jpg";

const collectorProfileComp = () => {
    return (
        <div className='h-auto flex gap-4 flex-col p-4 shadow-md rounded-lg bg-gray-100'>
            <span className="leading-3 font-semibold text-gray-500">Collector</span>
            <p className="text-lg leading-3 font-semibold capitalize">Khushi marothi</p>
            <div className="flex pt-8 items-center space-x-8 w-full">
                <img src={avatar} className="h-24 w-24 rounded-full" />
                <div>
                    <button className="bg-green hover:bg-darkGreen px-6 py-1">Change Photo</button>
                    <div className="flex space-x-1 py-3 text-red items-center cursor-pointer">
                        <img src={trash} className="h-4 w-4" />
                        <p className="text-xs text-red">Remove Photo</p>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-3 py-8">
                <div>
                    <p className="text-xl font-semibold text-blue">40</p>
                    <p className="text-gray-500">Total Points</p>
                </div>
                <div>
                    <p className="text-xl font-semibold text-darkGreen">80%</p>
                    <p className="text-gray-500">Accuracy</p>
                </div>
                <div>
                    <p className="text-xl font-semibold text-blue">40</p>
                    <p className="text-gray-500">Total Pickups</p>
                </div>
            </div>
            <div className="grid grid-cols-2 space-y-8">
                <div className="pr-4 col-span-2 ">
                    <p className="font-semibold">Name</p>
                    <input type="text" className="w-1/2  drop-shadow-none appearance-none bg-transparent border-gray-300 rounded-lg p-2" value="Khushi Marothi" disabled />
                </div>
                <div className="pr-4 col-span-1">
                    <p className="font-semibold">Email</p>
                    <input type="text" className="w-1/2 rounded-lg p-2" value="khushimarothi@gmail.com" disabled />
                </div>
                <div className="pr-4 col-span-1">
                    <p className="font-semibold">Phone</p>
                    <input type="text" className="w-1/2 rounded-lg p-2" value="9876543210" disabled />
                </div>
                <div className="pr-4 col-span-2">
                    <p className="font-semibold">Address</p>
                    <input type="text" className="w-full rounded-lg p-2" value="B-101, Shreeji Apartment, Near SBI Bank, Kandivali West, Mumbai, Maharashtra 400067" disabled />
                </div>
            </div>

        </div>
    )
};

export default collectorProfileComp;