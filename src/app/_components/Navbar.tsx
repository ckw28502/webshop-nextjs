'use client';

import { useAuth } from "@/context/AuthContext";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { JSX } from "react";
import LightDarkModeSwitch from "./LightDarkModeSwitch";

/**
 * Navbar component that displays navigation links based on authentication status.
 * Provides links to login, register, or logout depending on user state.
 * 
 * @returns {JSX.Element} - The rendered navigation bar.
 */
export default function Navbar(): JSX.Element {
    const { isAuthenticated } = useAuth();

    return (
        <Box marginBottom={10} sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1, ml: 1 }}>
                        WEBSHOP
                    </Typography>
                    <LightDarkModeSwitch />
                    {isAuthenticated ? (
                        <Link href="/logout" passHref>
                            <Button color="inherit">LOGOUT</Button>
                        </Link>
                    ) : (
                        <>
                            <Link href="/register" passHref>
                                <Button color="inherit">REGISTER</Button>
                            </Link>
                            <Link href="/login" passHref>
                                <Button color="inherit">LOGIN</Button>
                            </Link>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};
