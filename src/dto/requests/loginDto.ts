/**
 * LoginDto interface - Represents the data transfer object (DTO) used for user login.
 * This interface defines the structure of the data required for logging in a user.
 *
 * @interface LoginDto
 */
export interface LoginDto {
    /**
     * The username of the user attempting to log in.
     * This field is required and represents the unique identifier chosen by the user during registration.
     *
     * @type {string}
     * @example "john_doe" // Example of a valid username.
     */
    username: string;

    /**
     * The password of the user attempting to log in.
     * This field is required and represents the user's secret key used for authentication.
     *
     * @type {string}
     * @example "password123" // Example of a valid password entered by the user.
     */
    password: string;
}
