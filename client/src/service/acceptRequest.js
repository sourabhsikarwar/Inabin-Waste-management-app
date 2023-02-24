import axios from 'axios'

const url = "https://inabin-waste-management-app.vercel.app";

export const acceptRequest = async ({ _id, collectorName, collectorContact, status, collectorID }) => {
    try {
        const response = await axios.put(`${url}/user/updateRequest/${_id}`, { collectorName, collectorContact, status,collectorID });
        return response.data;
    } catch (error) {
        alert(error.message);
    }
}