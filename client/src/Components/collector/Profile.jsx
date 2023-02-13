import React from "react";

// Images
import rating from "../../assets/images/rating.svg";
import trash from "../../assets/images/trash.svg";
import avatar from "../../assets/images/avatar.jpg";
import { getUser } from "../../service/api";
import CollectorProfileComp from "./ProfileComp";

const collectorProfileComp = () => {


    return (
        <div className='h-auto flex gap-4 flex-col p-4 shadow-md rounded-lg'>

            <p className="text-xl font-semibold pb-4">Profile </p>
            <CollectorProfileComp/>     
        </div>
    )
};

export default collectorProfileComp;