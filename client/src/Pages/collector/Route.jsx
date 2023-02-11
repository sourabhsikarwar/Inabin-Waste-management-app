import React from "react";
import Navbar from "../../Components/collector/Navbar";
import Sidebar from "../../Components/collector/Sidebar";

const CollectorRoute = () => {
    return (
        <div>
            <Navbar />
            <div className="container max-w-7xl mx-auto p-4">
                <div className="flex justify-between gap-4">
                    <div className="w-1/5">
                        <Sidebar />
                    </div>
                    <div className="w-4/5">
                    <div className='h-auto flex gap-4 flex-col p-4 shadow-md rounded-lg'>
                        <p className="font-semibold">Today's Route</p>
                    </div>
                    </div>
                </div>
            </div></div>
    );
}

export default CollectorRoute;