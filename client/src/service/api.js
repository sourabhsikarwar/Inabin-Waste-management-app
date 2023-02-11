import axios from "axios";

const url = "http://localhost:80";

// Log In API
export const userLogin = async (params) => {
  try {
    const response = await axios.post(`${url}/userLogin`, params);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

// Register API
export const userRegister = async (params) => {
  try {
    const response = await axios.post(`${url}/userRegister`, params);
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
