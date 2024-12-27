'use client';

import { useAuth } from "@/context/AuthContext";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
    const { isAuthenticated } = useAuth();
    return (
        <Box marginBottom={10} sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1 }}>
                        WEBSHOP
                    </Typography>
                    {isAuthenticated ? (
                        <Link href={"/logout"} passHref>
                            <Button color="inherit">Logout</Button>
                        </Link>
                    ) : (
                        <Link href={"/login"} passHref>
                            <Button color="inherit">Login</Button>
                        </Link>
                    )}

                </Toolbar>
            </AppBar>
        </Box>
    );
};