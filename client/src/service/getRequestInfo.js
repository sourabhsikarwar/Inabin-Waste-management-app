import axios from "axios"

const url = "http://localhost:80";
// get request data 

export const getRequestData = async (params) => {
    try{
        console.log(params);
        const data = await axios.post(`${url}/user/getRequest`,params);
        console.log(data);
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