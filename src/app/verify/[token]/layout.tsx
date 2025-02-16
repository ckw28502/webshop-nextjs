"use client";

import { JSX, ReactNode } from "react";
import { VerificationStatus } from "./statusEnum";
import { useVerifyPage } from "./hooks/useVerifyPage";
import { Box } from "@mui/material";

export default function VerifyLayout({
    loading,
    error
}: Readonly<{
    loading: ReactNode;
    error: ReactNode;
}>): JSX.Element {
    const status: VerificationStatus = useVerifyPage();

    let body: ReactNode;
    switch (status) {
        case VerificationStatus.Loading:
            body = loading;
            break;
        
        case VerificationStatus.Error:
            body = error;
        default:
            break;
    }

    return (
        <Box
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        width="100%"
        height="60vh"
        >
            {body}
        </Box>
    );  
}