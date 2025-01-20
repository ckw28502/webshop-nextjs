import { RegisterDto } from "@/dto/requests/registerDto";
import axiosInstance from "../utils/axios";
import { LoginDto } from "@/dto/requests/loginDto";

// Base API endpoint path for user-related operations
const PATH = "/user";

/**
 * Sends a POST request to create a new user.
 * This function handles user registration by sending the data in the `RegisterDto` to the server.
 *
 * @async
 * @function createUser
 * @param {RegisterDto} request - The registration data containing username, email, and password.
 * @returns {Promise<void>} A promise that resolves when the registration request is successfully completed.
 *
 * @example
 * await userService.createUser({ 
 *   username: 'john_doe', 
 *   email: 'john.doe@example.com', 
 *   password: 'password123' 
 * });
 */
async function createUser(request: RegisterDto): Promise<void> {
    return axiosInstance.post(PATH, request);
}

/**
 * Sends a POST request to authenticate a user.
 * This function handles user login by sending the data in the `LoginDto` to the server.
 *
 * @async
 * @function login
 * @param {LoginDto} request - The login data containing username and password.
 * @returns {Promise<void>} A promise that resolves when the login request is successfully completed.
 *
 * @example
 * await userService.login({ 
 *   username: 'john_doe', 
 *   password: 'password123' 
 * });
 */
async function login(request: LoginDto): Promise<void> {
    return axiosInstance.post(`${PATH}/login`, request);
}

/**
 * A service object for user-related operations, such as creating a new user and logging in.
 * This object exports methods to interact with the user API endpoints.
 */
const userService = { 
    createUser,
    login
};

export default userService;
