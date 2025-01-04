"use server";

import userService from "@/services/userService";
import { Locale } from "./const";
import { cookies } from "next/headers";

/**
 * @function getLocale
 * Retrieves the current locale for the user, prioritizing the cookie value
 * and falling back to the user's language setting from the user service if no cookie is found.
 * 
 * @returns {Promise<Locale>} - The locale of the user, either from cookies or the user service, or "en" if neither is available.
 */
export async function getLocale(): Promise<Locale> {
    // Try to get locale from cookies
    let locale = await getLocaleFromCookie();

    // If no locale is found in cookies, fetch it from the user service
    if (!locale) {
        locale = await userService.getLanguage();
    }

    // Return the locale or default to "en"
    return locale || "en";
}

/**
 * @function getLocaleFromCookie
 * Retrieves the locale from the cookies if available.
 * 
 * @returns {Promise<Locale | null>} - The locale value from cookies, or null if no locale cookie is found.
 */
async function getLocaleFromCookie(): Promise<Locale | null> {
    const cookieStore = await cookies(); // Access the cookies from the request headers
    // Retrieve the "LOCALE" cookie and return its value, cast to the `Locale` type
    return cookieStore.get("LOCALE")?.value as Locale || null;
}

/**
 * @function setLocale
 * Sets the user's locale by storing it in cookies and updating the user service with the new locale.
 * 
 * @param {Locale} locale - The locale to set, either "en" or "id".
 * @param {boolean} authenticated - A flag indicating if the user is authenticated.
 * If true, the locale will be updated in the user service.
 * 
 * @returns {Promise<void>} - A promise that resolves when the locale is successfully set.
 */
export async function setLocale(locale: Locale, authenticated: boolean): Promise<void> {
    const cookieStore = await cookies(); // Access the cookies from the request headers
    // Set the "LOCALE" cookie with the provided locale
    cookieStore.set("LOCALE", locale);

    if (authenticated) {
        // Update the user service with the new locale
        await userService.setLanguage(locale);
    }
}
