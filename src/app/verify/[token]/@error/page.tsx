// Import necessary components from Material-UI and Next.js
import { Box, Button, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { JSX } from "react";

/**
 * VerifyErrorPage Component
 * 
 * This component displays an error message for the verification process and provides
 * a button for the user to take corrective action, such as navigating back or retrying.
 *
 * @returns {JSX.Element} The VerifyErrorPage component.
 */
const VerifyErrorPage = (): JSX.Element => {
    // Hook to fetch translations from the internationalization (i18n) files
    const t = useTranslations("VerifyPage.Error");

    return (
        <Box>
            {/* Error message container */}
            <Box
                display="flex"
                justifyContent="center"
            >
                {/* Display error message in a Typography element */}
                <Typography variant="h3" color="error">
                    {t("message").toLocaleUpperCase()} {/* Fetches the translated "message" text */}
                </Typography>
            </Box>
            {/* Button container */}
            <Box
                display="flex"
                justifyContent="center"
                mt={3} // Adds margin-top of 3 units
            >
                {/* Button for corrective action */}
                <Button>{t("link")} {/* Fetches the translated "link" text */}</Button>
            </Box>
        </Box>
    );
};

export default VerifyErrorPage;
