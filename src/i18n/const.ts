/**
 * @type Locale
 * Represents a specific locale from the available list of locales.
 * It can either be "en" (English) or "id" (Indonesian).
 */
export type Locale = typeof locales[number];

/**
 * @constant locales
 * Array containing the available locales in the system. 
 * These locales are "en" (English) and "id" (Indonesian).
 * The `as const` assertion ensures that the array elements are treated as literal types.
 */
export const locales = ["en", "id"] as const;

/**
 * @constant defaultLocale
 * Represents the default locale for the application.
 * The default locale is set to "en" (English).
 * 
 * @type {Locale} - The default locale is of type `Locale`.
 */
export const defaultLocale: Locale = "en";
