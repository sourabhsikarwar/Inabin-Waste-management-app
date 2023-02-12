import axios from 'axios';

export const getCollection = async (id) => {
    try {
        let response = await axios.get(`http://localhost:80/collector/historyByReq/${id}`);
        return response;
    } catch (error) {
        console.log(error.message);
    }
}