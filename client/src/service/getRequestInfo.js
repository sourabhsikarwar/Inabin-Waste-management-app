import axios from "axios"

const url = "https://ecell-nitb-hack2k23-team-asper-otfo-git-main-sandeshj-07.vercel.app";

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