import axios from 'axios';

export const getCollection = async (id) => {
    try {
        let response = await axios.get(`https://ecell-nitb-hack2k23-team-asper-otfo-git-main-sandeshj-07.vercel.app/collector/historyByReq/${id}`);
        // let response = await axios.get(`http://localhost:80/collector/historyByReq/${id}`);
        return response;
    } catch (error) {
        console.log(error.message);
    }
}


export const getCollectionHistory = async (id) => {
    try {
        let response = await axios.get(`https://ecell-nitb-hack2k23-team-asper-otfo-git-main-sandeshj-07.vercel.app/collector/historyByReq/${id}`);
        // let response = await axios.get(`http://localhost:80/collector/history/${id}`);
        return response;
    } catch (error) {
        console.log(error.message);
    }
}