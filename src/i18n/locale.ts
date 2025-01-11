"use server";

import { Locale } from "./const";
import { cookies } from "next/headers";

/**
 * @function getLocale
 * Retrieves the current locale for the user, prioritizing the cookie valu.
 * 
 * @returns {Promise<Locale>} - The locale of the user, either from cookies or the user service, or "en" if neither is available.
 */
export async function getLocale(): Promise<Locale> {
    // Try to get locale from cookies
    const locale = await getLocaleFromCookie();

    // Return the locale or default to "en"
    return locale ?? "en";
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
 * Sets the user's locale by storing it in cookies.
 * 
 * @param {Locale} locale - The locale to set, either "en" or "id".
 * 
 * @returns {Promise<void>} - A promise that resolves when the locale is successfully set.
 */
export async function setLocale(locale: Locale): Promise<void> {
    const cookieStore = await cookies(); // Access the cookies from the request headers
    // Set the "LOCALE" cookie with the provided locale
    cookieStore.set("LOCALE", locale);
}
