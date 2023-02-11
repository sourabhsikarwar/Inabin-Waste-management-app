import React from "react";
import Sidebar from "../../Components/collector/Sidebar";
import Navbar from "../../Components/collector/Navbar.jsx";
import CollectorProfileComp from "../../Components/collector/Profile.jsx";

const CollectorProfile = () => {
    return (
        <div>
            <Navbar />
            <div className="container max-w-7xl mx-auto p-4">
                <div className="flex justify-between gap-4">
                    <div className="w-1/5">
                        <Sidebar />
                    </div>
                    <div className="w-4/5">
                        <CollectorProfileComp/>
                    </div>
                </div>
            </div></div>
    )
}
export default CollectorProfile;