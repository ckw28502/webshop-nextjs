import { Locale } from "@/i18n/const";
import { setLocale } from "@/i18n/locale";
import { NativeSelect } from "@mui/material";
import { useLocale } from "next-intl";
import { ChangeEvent, JSX } from "react";

/**
 * LanguageSelect component - A dropdown selection for changing the language preference.
 * 
 * @returns {JSX.Element} - The rendered LanguageSelect component containing a dropdown to select a language.
 */
const LanguageSelect = (): JSX.Element => {
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
        setLocale(event.target.value as Locale);
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
};

export default LanguageSelect;
