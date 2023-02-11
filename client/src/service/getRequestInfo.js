import axios from "axios"

// get request data 

export const getRequestData = async (params) => {
    try{
        const data = await axios.get(`/api/request/${params}`);
        return data;
    } catch(error){
        console.log(error);
    }
}

// update request status 

export const updateRequestStatus = async (params) => {
    try{
        const data = await axios.put(`/api/request/${params}`);
        return data;
    } catch(error){
        console.log(error);
    }
}