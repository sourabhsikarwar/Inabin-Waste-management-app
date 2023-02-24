import axios from "axios"

const url = "https://inabin-waste-management-app.vercel.app";

export const getRequestData = async (params) => {
    try{        
        const data = await axios.post(`${url}/user/getRequest`,params);
        return data;
    } catch(error){
        console.log(error);
    }
}

// update request status 

export const updateRequestStatus = async (params) => {
    try{
        const data = await axios.put(`${url}/request/${params}`);
        return data;
    } catch(error){
        console.log(error);
    }
}