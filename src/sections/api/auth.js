import axios from 'axios';

const API_URL = 'http://localhost:5000/v1/api';

export const registerUser = async (data) => {
    return await axios.post(`${API_URL}/auth/signup`, data);
};

export const loginUser = async (data) => {
    return await axios.post(`${API_URL}/auth/signin`, data);
};
