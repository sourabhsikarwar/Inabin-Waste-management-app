import axios from "axios";

export const getAllPickupRequests = async () => {
    try{
        const response = await axios.get("https://inabin-waste-management-app.vercel.app/user/requests");
        return response.data;
    } catch(error){
        console.log(error)
    }
};

export const collectWaste = async (params) => {
    try {
        console.log(params);
        const response = await axios.post("https://inabin-waste-management-app.vercel.app/collector/pickups", params);
        return response.data;
    } catch (error) {   
        console.log(error);
    }
}