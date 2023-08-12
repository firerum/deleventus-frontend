import axios from 'axios';

const API_URL = process.env.API_URL;

export const registerUser = async (data) => {
    return await axios.post(`${API_URL}/auth/signup`, data);
};

export const loginUser = async (data) => {
    return await axios.post(`${API_URL}/auth/signin`, data);
};
