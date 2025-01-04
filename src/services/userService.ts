import { RegisterDto } from "@/dto/requests/registerDto";
import axiosInstance from "../utils/axios";
import { Locale } from "@/i18n/const";

// API endpoint path for user-related operations
const PATH = "/user";
const LANG_PATH = PATH + "/language";

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
    await axiosInstance.post(PATH, request);
}

/**
 * Retrieves the current language preference of the user.
 * 
 * This function makes a GET request to fetch the user's language preference from the server.
 * If successful, it returns the locale as a string, otherwise it returns null.
 * 
 * @returns {Promise<Locale | null>} The user's preferred locale or null if not available.
 */
async function getLanguage(): Promise<Locale | null> {
    return axiosInstance.get(LANG_PATH, { withCredentials: true })
        .then(response => response.data as Locale)
        .catch(() => null);
}

/**
 * Sets the user's preferred language.
 * 
 * This function sends a PATCH request to update the user's language preference on the server.
 * The actual request is commented out, and a TODO is in place to implement the logic.
 * 
 * @param {Locale} locale - The locale (language) to set for the user.
 * @returns {Promise<void>} A promise that resolves once the language has been set.
 */
async function setLanguage(locale: Locale): Promise<void> {
    // await axiosInstance.patch(LANG_PATH, { locale }, { withCredentials: true });
    // TODO: Implement the setLanguage method to update the user's language preference
    console.log(`Setting language to ${locale}`);
}

// Exporting the userService object which contains the functions related to user operations
const userService = { 
    createUser,
    getLanguage,
    setLanguage
};

export default userService;
