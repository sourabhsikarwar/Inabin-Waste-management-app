import axios from "axios";

export const getAllPickupRequests = async () => {
    try{
        const response = await axios.get("https://ecell-nitb-hack2k23-team-asper-otfo-git-main-sandeshj-07.vercel.app/user/requests");
        // const response = await axios.get("http://localhost:80/user/requests");
        return response.data;
    } catch(error){
        console.log(error)
    }
};

export const collectWaste = async (params) => {
    try {
        const response = await axios.post("https://ecell-nitb-hack2k23-team-asper-otfo-git-main-sandeshj-07.vercel.app/collector/pickups", params);
        // const response = await axios.post("http://localhost:80/collector/pickups", params);
        return response.data;
    } catch (error) {   
        console.log(error);
    }
}