import { RegisterDto } from "@/dto/requests/registerDto";
import axiosInstance from "../utils/axios";

// API endpoint path for user-related operations
const PATH = "/user";

/**
 * Sends a POST request to create a new user.
 * This function sends the registration data provided in the `RegisterDto` to the server for creating a new user.
 * 
 * @param {RegisterDto} request - The registration data to create a new user.
 * @returns {Promise<void>} A promise that resolves once the request is completed.
 * 
 * @example
 * createUser({ username: 'john_doe', password: 'password123' });
 */
async function createUser(request: RegisterDto): Promise<void> {
    // Sends the POST request to the user API endpoint with the registration data
    return axiosInstance.post(PATH, request);
}

// Exporting the userService object which contains the functions related to user operations
const userService = { 
    createUser
};

export default userService;
