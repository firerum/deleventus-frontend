import axios from 'axios';

const API_URL = process.env.API_URL;

export const registerUser = async (data) => {
    return await axios.post(`${API_URL}/auth/signup`, data);
};

export const loginUser = async (data) => {
    return await axios.post(`${API_URL}/auth/signin`, data);
};

export async function getAuthenticatedData(url, bearerToken, params = {}) {
    const config = {
        headers: {
            Authorization: `Bearer ${bearerToken}`,
        },
        params: params,
    };

    try {
        const response = await axios
            .get(url, config);
        return response.data;
    } catch (error) {
        throw error;
    }
}
