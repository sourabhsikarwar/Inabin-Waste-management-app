import axios from 'axios'

const url = "http://localhost:80";

export const acceptRequest = async ({ _id, collectorName, collectorContact, status, collectorID }) => {
    try {
        const response = await axios.put(`${url}/user/updateRequest/${_id}`, { collectorName, collectorContact, status,collectorID });
        return response.data;
    } catch (error) {
        alert(error.message);
    }
}