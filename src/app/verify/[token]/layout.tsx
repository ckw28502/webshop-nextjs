"use client";

import { JSX, ReactNode } from "react";
import { VerificationStatus } from "./statusEnum";
import { useVerifyPage } from "./hooks/useVerifyPage";
import { Box } from "@mui/material";

/**
 * Layout component for displaying different UI states based on the verification process.
 * 
 * This component uses the verification status to display different content based on 
 * whether the verification is loading, completed successfully, or encountered an error.
 * It passes in custom ReactNode elements for the loading and error states.
 * 
 * @param {Object} props - The props for the layout component.
 * @param {ReactNode} props.loading - The content to display when verification is loading.
 * @param {ReactNode} props.error - The content to display when verification encounters an error.
 * @returns {JSX.Element} The layout component with the appropriate state content.
 */
export default function VerifyLayout({
    loading,
    error
}: Readonly<{
    loading: ReactNode;
    error: ReactNode;
}>): JSX.Element {
    // Getting the current verification status using the custom hook
    const status: VerificationStatus = useVerifyPage();

    // Variable to hold the content to display based on the verification status
    let body: ReactNode;

    // Determining which content to display based on the verification status
    switch (status) {
        case VerificationStatus.Loading:
            body = loading; // Display loading content
            break;
        
        case VerificationStatus.Error:
            body = error; // Display error content
            break;
        default:
            break; // If status is Success, no specific content is set (could be handled differently)
    }

    return (
        /**
         * Box component from Material UI used to center the content
         * both horizontally and vertically in the layout.
         */
        <Box
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        width="100%"
        height="60vh"
        >
            {body} {/* Rendering the determined content based on status */}
        </Box>
    );  
}
