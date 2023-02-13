import React from "react";
import { getRequests } from "../../service/api.js";

const PickupRequest = () => {

    const [requests, setRequests] = React.useState([]);

    let initial = async () => {
        let data = await getRequests();
        console.log(data);
    }

    React.useEffect(() => {
        initial();
    }, []);

    return (
        <div className='h-auto flex gap-4 flex-col p-4 shadow-md rounded-lg'>

            <p className="text-xl font-semibold pb-4">PickUp Requests</p>

            <div className="space-y-4">

            </div>

        </div>
    )
}

export default PickupRequest;