import React from "react";

// Images
import rating from "../../assets/images/rating.svg";
import trash from "../../assets/images/trash.svg";
import avatar from "../../assets/images/avatar.jpg";

const collectorProfileComp = () => {
    return (
        <div className='h-auto flex gap-4 flex-col p-4 shadow-md rounded-lg'>

            <p className="text-xl font-semibold pb-4">Profile </p>
            <div className="flex items-center space-x-8 w-full">
                <img src={avatar} className="h-24  w-24" />
                <div>
                    <p className="text-lg leading-6 font-semibold capitalize">Khushi marothi</p>
                    <p className="leading-6 text-gray-500 text-sm">Collector</p>
                    <div className="flex items-center space-x-2">
                        <img src={rating} className="h-4 w-4" /> <p>500</p>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <button className="bg-blue hover:bg-darkBlue px-4 rounded-md py-1 text-xs">Change Photo</button>
                    <div className="flex space-x-1 py-3 text-red items-center cursor-pointer">
                        <img src={trash} className="h-4 w-4" />
                        <p className="text-xs text-red">Remove Photo</p>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-3 py-8 hidden">
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
            <div className="grid grid-cols-2 py-6">
                <p className="font-bold pb-3 col-span-2">User Information</p>
                <div className="pr-2 col-span-1">
                    <p className="font-semibold">Name</p>
                    <input type="text" className="w-1/2  drop-shadow-none appearance-none bg-transparent border-gray-300 rounded-lg p-2" value="Khushi" disabled />
                </div>
                <div className="pr-2 col-span-1 pb-4">
                    <p className="font-semibold">Last Name</p>
                    <input type="text" className="w-1/2  drop-shadow-none appearance-none bg-transparent border-gray-300 rounded-lg p-2" value="Marothi" disabled />
                </div>
                <p className="font-bold py-4 col-span-2">Contact Information</p>
                <div className="pr-2 col-span-1 pb-4">
                    <p className="font-semibold">Email</p>
                    <input type="text" className="rounded-lg p-2" value="khushimarothi@gmail.com" disabled />
                </div>
                <div className="pr-2 col-span-1">
                    <p className="font-semibold">Phone</p>
                    <input type="text" className="w-1/2 rounded-lg p-2" value="9876543210" disabled />
                </div>
                <div className="pr-2 col-span-2 pb-4">
                    <p className="font-semibold">Address</p>
                    <input type="text" className="w-full rounded-lg p-2" value="B-101, Shreeji Apartment, Near SBI Bank, Kandivali West" disabled />
                </div>
                <div className="pr-2 col-span-1">
                    <p className="font-semibold">City</p>
                    <input type="text" className="w-full rounded-lg p-2" value="Mumbai, 400067" disabled />
                </div>
                <div>
                    <p className="font-semibold">Country</p>
                    <input type="text" className="w-full rounded-lg p-2" value="India" disabled />
                </div>
            </div>

        </div>
    )
};

export default collectorProfileComp;