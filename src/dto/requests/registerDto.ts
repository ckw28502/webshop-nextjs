import { Locale } from "@/i18n/const";

/**
 * RegisterDto interface - Represents the data transfer object (DTO) used for user registration.
 * This structure is typically used when sending registration data to the server.
 * 
 * @interface RegisterDto
 */
export interface RegisterDto {
    /**
     * The username of the user being registered.
     * 
     * @type {string}
     * @example "john_doe"
     */
    username: string;

     /**
     * The email address of the user.
     * 
     * @type {string}
     * @example "john.doe@example.com"
     */
     email: string;

    /**
     * The password of the user being registered.
     * It is expected to be a secure string, usually hashed before storage on the server.
     * 
     * @type {string}
     * @example "password123"
     */
    password: string;

    /**
     * The user's preferred language for localization.
     * This value corresponds to one of the supported locales defined in the application.
     * 
     * @type {Locale}
     * @example "en"
     */
    language: Locale;
};
