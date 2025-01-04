import { getRequestConfig } from 'next-intl/server';
import { getLocale } from './locale';

/**
 * Default configuration for the request, including the locale and the corresponding messages.
 * 
 * This function fetches the user's locale using `getLocale()` and dynamically imports
 * the appropriate message file based on that locale.
 */
export default getRequestConfig(async () => {
    // Retrieve the current locale
    const locale = await getLocale();

    // Dynamically import the messages file corresponding to the locale
    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});
