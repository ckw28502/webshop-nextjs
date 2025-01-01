import axios from 'axios';

const API_URL: string = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
    baseURL: API_URL
});

export default axiosInstance;