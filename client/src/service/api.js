import axios from "axios";

const url = "http://localhost:80";
// Log In API
export const userLogin = async(params) => {
    try {
        console.log(params);
        const response = await axios.post(`${url}/userLogin`, params);
        return response;
    } catch (error) {
        console.log(error.message);
    }
}