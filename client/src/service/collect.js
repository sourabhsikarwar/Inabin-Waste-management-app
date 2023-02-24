import axios from 'axios';

export const getCollection = async (id) => {
    try {
        let response = await axios.get(`https://inabin-waste-management-app.vercel.app/collector/historyByReq/${id}`);
        return response;
    } catch (error) {
        console.log(error.message);
    }
}

export const getCollection2 = async (id) => {
    try {
        let response = await axios.get(`https://ecell-nitb-hack2k23-team-asper-otfo-git-main-sandeshj-07.vercel.app/collector/history/${id}`);
        return response;
    } catch (error) {
        console.log(error.message);
    }
}
