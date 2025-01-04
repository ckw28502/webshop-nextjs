'use client';

import { useAuth } from "@/context/AuthContext";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { JSX } from "react";
import LightDarkModeSwitch from "./LightDarkModeSwitch";
import LanguageSelect from "./LanguageSelect";
import { useTranslations } from "next-intl";

/**
 * Navbar component that displays navigation links based on authentication status.
 * Provides links to login, register, or logout depending on user state.
 * 
 * @returns {JSX.Element} - The rendered navigation bar.
 */
export default function Navbar(): JSX.Element {
     // Retrieve authentication status from context (whether the user is authenticated)
     const { isAuthenticated } = useAuth();

     // Use next-intl for translating text in the navigation bar based on the current language
     const t = useTranslations("Navbar");

    return (
        <Box marginBottom={10} sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1, ml: 1 }}>
                        WEBSHOP
                    </Typography>
                    <LanguageSelect authenticated={isAuthenticated} />
                    <LightDarkModeSwitch />
                    {isAuthenticated ? (
                        <Link href="/logout" passHref>
                            <Button color="inherit">{t("logout")}</Button>
                        </Link>
                    ) : (
                        <>
                            <Link href="/register" passHref>
                                <Button color="inherit">{t("register")}</Button>
                            </Link>
                            <Link href="/login" passHref>
                                <Button color="inherit">{t("login")}</Button>
                            </Link>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};
