import axios from "axios"

export const getAllPickupRequests = () => {
    return axios.get("http://localhost:5000/requests")
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}