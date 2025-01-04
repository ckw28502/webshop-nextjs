import { Locale } from "@/i18n/const";
import { setLocale } from "@/i18n/locale";
import { NativeSelect } from "@mui/material";
import { useLocale } from "next-intl";
import { ChangeEvent, JSX } from "react";

/**
 * @interface LanguageSelectProps
 * Represents the props that can be passed to the LanguageSelect component.
 * 
 * @property {boolean} authenticated - A flag indicating whether the user is authenticated or not.
 * If the user is authenticated, the language preference will be saved in the system.
 */
interface LanguageSelectProps {
    authenticated: boolean;
}

/**
 * LanguageSelect component - A dropdown selection for changing the language preference.
 * Allows users to select their preferred language (English or Bahasa Indonesia) from a list of options.
 * 
 * @param {LanguageSelectProps} props - The props object containing the `authenticated` flag.
 * 
 * @returns {JSX.Element} - The rendered LanguageSelect component containing a dropdown to select a language.
 */
export default function LanguageSelect({ authenticated }: LanguageSelectProps): JSX.Element {
    // Get the current locale (language) from the next-intl context
    const locale = useLocale();

    /**
     * Handles changes in language selection.
     * Updates the language preference in the system by calling the `setLocale` function.
     * 
     * @param {ChangeEvent<HTMLSelectElement>} event - The change event triggered when a user selects a new language.
     * It contains the value of the selected language option.
     */
    function onLanguageChange(event: ChangeEvent<HTMLSelectElement>) {
        // Set the new locale based on the selected value
        setLocale(event.target.value as Locale, authenticated);
    }

    return (
        <NativeSelect
            defaultValue={locale} // Set the default selected language to the current locale
            inputProps={{
                name: "language" // Set the name attribute for the select element (for form handling)
            }}
            onChange={onLanguageChange} // Call the onLanguageChange function when the language is changed
        >
            {/* Language options */}
            <option value="en">English</option>
            <option value="id">Bahasa Indonesia</option>
        </NativeSelect>
    );
}
