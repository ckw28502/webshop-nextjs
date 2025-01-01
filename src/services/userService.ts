import { RegisterDto } from "@/dto/requests/registerDto";
import axiosInstance from "../utils/axios";

// API endpoint path for user-related operations
const PATH = "/user";

/**
 * createUser function - Sends a POST request to create a new user.
 * This function uses the provided RegisterDto to send the user registration data to the server.
 * 
 * @param {RegisterDto} request - The registration data for the user.
 * @returns {Promise<void>} A promise that resolves once the request is completed.
 * 
 * @example
 * createUser({ username: 'john_doe', password: 'password123' });
 */
async function createUser(request: RegisterDto): Promise<void> {
    // Sends the POST request to the user API endpoint with the registration data
    await axiosInstance.post(PATH, request);
}

// Exporting the userService object which contains the createUser function
const userService = { 
    createUser
};

export default userService;
