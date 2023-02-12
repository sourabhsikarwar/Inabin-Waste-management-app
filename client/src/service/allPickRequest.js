import axios from "axios";

export const getAllPickupRequests = async () => {
    try{
        const response = await axios.get("http://localhost:80/user/requests");
        return response.data;
    } catch(error){
        console.log(error)
    }
};

export const collectWaste = async (params) => {
    try {
        console.log(params);
        const response = await axios.post("http://localhost:80/collector/pickups", params);
        return response.data;
    } catch (error) {   
        console.log(error);
    }
}