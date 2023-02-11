import axios from "axios";

export const getAllPickupRequests = async () => {
    try{
        const response = await axios.get("http://localhost:80/user/requests");
        return response.data;
    } catch(error){
        console.log(error)
    }
};
