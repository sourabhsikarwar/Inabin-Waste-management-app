import axios from 'axios';

export const getCollection = async (id) => {
    try {
        let response = await axios.get(`https://inabin-waste-management-app.vercel.app/collector/historyByReq/${id}`);
        return response;
    } catch (error) {
        console.log(error.message);
    }
}