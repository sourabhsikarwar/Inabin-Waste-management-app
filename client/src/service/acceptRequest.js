import axios from 'axios'

const url = "http://localhost:80";

export const acceptRequest = async ({ _id, collectorName, collectorContact, status }) => {
    try {
        const response = await axios.put(`${url}/user/updateRequest/${_id}`, { collectorName, collectorContact, status });
        alert(response);
        return response.data;
    } catch (error) {
        alert(error.message);
    }
}