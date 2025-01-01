import axios from 'axios';

// URL of the API, fetched from environment variables for secure configuration
const API_URL: string = process.env.NEXT_PUBLIC_API_URL;

/**
 * Axios instance creation - This instance is used to configure and manage API requests.
 * The `baseURL` is set to the API URL from environment variables to ensure flexibility 
 * across different environments (development, production, etc.).
 * 
 */
const axiosInstance = axios.create({
    baseURL: API_URL // Set the base URL for all API requests using the API_URL environment variable
});

export default axiosInstance;
