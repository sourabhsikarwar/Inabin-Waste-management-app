import axios from "axios"

const url = "https://ecell-nitb-hack2k23-team-asper-otfo-git-main-sandeshj-07.vercel.app";
// const url= 'http://localhost:80'

export const pickRequest = async (params) => {
    try {
        console.log(params)
        const response = await axios.post(`${url}/user/request`, params);
        return response;
    } catch (error) {
        alert(error.message);
    }
}