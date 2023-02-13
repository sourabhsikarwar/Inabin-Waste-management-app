import React from "react";

import rating from "../../assets/images/rating.svg";
import trash from "../../assets/images/trash.svg";
import avatar from "../../assets/images/avatar.jpg";
import { getUser } from "../../service/api";

const CollectorProfileComp = () => {
    const [profile, setProfile] = React.useState(null);

    React.useEffect(() => {
        const getProfile2 = async () => {
            let id = localStorage.getItem('userId');
            let res = await getUser(id);
            console.log(res);
            setProfile(res.data);
        }
        getProfile2();
    }, []);

    return (
        <div>
            {profile && (
                <div>
                    <div className="flex items-center space-x-8 w-full">
                        <img src={avatar} className="h-24  w-24" />
                        <div>
                            <p className="text-lg leading-6 font-semibold capitalize">{profile.name}</p>
                            <p className="leading-6 text-gray-500 text-sm capitalize">{profile.user_type}</p>
                            <div className="flex items-center space-x-2">
                                <img src={rating} className="h-4 w-4" /> <p>{profile.points}</p>
                            </div>
                        </div>
                        <div className="flex space-x-4 flex-wrap">
                            <button className="bg-blue hover:bg-darkBlue px-4 rounded-md py-1 text-xs">Change Photo</button>
                            <div className="flex space-x-1 py-3 text-red items-center cursor-pointer">
                                <img src={trash} className="h-4 w-4" />
                                <p className="text-xs text-red">Remove Photo</p>
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-2 py-6">
                        <p className="font-bold pb-3 col-span-2">User Information</p>
                        <div className="pr-2 col-span-1">
                            <p className="font-semibold">Name</p>
                            <input type="text" className="w-1/2  drop-shadow-none appearance-none bg-transparent border-gray-300 rounded-lg p-2" value={profile.name.split(" ")[0]} disabled />
                        </div>
                        <div className="pr-2 col-span-1 pb-4">
                            <p className="font-semibold">Last Name</p>
                            <input type="text" className="w-1/2  drop-shadow-none appearance-none bg-transparent border-gray-300 rounded-lg p-2" value={profile.name.split(" ").length > 1 && profile.name.split(" ")[1]} disabled />
                        </div>
                        <p className="font-bold py-4 col-span-2">Contact Information</p>
                        <div className="pr-2 col-span-1 pb-4">
                            <p className="font-semibold">Email</p>
                            <input type="text" className="rounded-lg p-2 w-full" value={profile.email} disabled />
                        </div>
                        <div className="pr-2 col-span-1">
                            <p className="font-semibold">Phone</p>
                            <input type="text" className="w-1/2 rounded-lg p-2" value={profile.contact} disabled />
                        </div>
                        <div className="pr-2 col-span-2 pb-4">
                            <p className="font-semibold">Address</p>
                            <input type="text" className="w-full rounded-lg p-2" value={profile.address} disabled />
                        </div>
                    </div>
                </div>
            )}
            {!profile && (
                <div className="flex justify-center items-center h-64">
                    <p className="text-lg font-semibold">Loading...</p>
                </div>
            )}
        </div>
    )
}

export default CollectorProfileComp;