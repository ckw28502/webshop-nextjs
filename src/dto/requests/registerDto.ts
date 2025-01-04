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
     * The password of the user being registered.
     * It is expected to be a secure string, usually hashed before storage on the server.
     * 
     * @type {string}
     * @example "password123"
     */
    password: string;

    /**
     * The language preference of the user.
     * This indicates the preferred locale for the user, which could affect how content is displayed,
     * such as translations or regional settings.
     * 
     * @type {Locale}
     * @example "en"
     * @example "id"
     */
    language: Locale;
};
