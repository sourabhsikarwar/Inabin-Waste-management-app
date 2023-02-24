import axios from "axios"

const url = "https://inabin-waste-management-app.vercel.app";

export const pickRequest = async (params) => {
    try {
        console.log(params)
        const response = await axios.post(`${url}/user/request`, params);
        return response;
    } catch (error) {
        alert(error.message);
    }
}