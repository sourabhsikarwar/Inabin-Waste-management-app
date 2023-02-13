import axios from "axios";

export const getAllPickupRequests = async () => {
    try{
        const response = await axios.get("https://ecell-nitb-hack2k23-team-asper-otfo-git-main-sandeshj-07.vercel.app/user/requests");
        return response.data;
    } catch(error){
        console.log(error)
    }
};

export const collectWaste = async (params) => {
    try {
        console.log(params);
        const response = await axios.post("https://ecell-nitb-hack2k23-team-asper-otfo-git-main-sandeshj-07.vercel.app/collector/pickups", params);
        return response.data;
    } catch (error) {   
        console.log(error);
    }
}