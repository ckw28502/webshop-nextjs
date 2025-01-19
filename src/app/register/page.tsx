"use client";

import { Box, Button, TextField } from "@mui/material";
import InputPassword from "../components/inputs/Password";
import { JSX } from "react";
import { useTranslations } from "next-intl";
import { useRegisterPage } from "./hooks/useRegisterPage";

/**
 * RegisterPage component - Provides a user registration form with validation for username, password, and confirmation password.
 * 
 * @returns {JSX.Element} A form containing fields for username, password, and password confirmation.
 */
const RegisterPage = (): JSX.Element => {
    // Hook for accessing translations for the page content
    const t = useTranslations("RegisterPage");

    // Custom hook managing form logic and validation
    const formik = useRegisterPage();
    return (
        <form onSubmit={formik.handleSubmit}> {/* Attach Formik submission handler to form */}
            
            {/* Username input field */}
            <TextField
                label={t("username")} // Field label
                variant="standard" // Material UI variant
                id="register-username" // Unique field identifier
                name="username" // Field name (linked to Formik state)
                fullWidth // Expand field to full width
                value={formik.values.username} // Bind value to Formik state
                onChange={formik.handleChange} // Update state on change
                onBlur={formik.handleBlur} // Trigger validation on blur
                error={formik.touched.username && Boolean(formik.errors.username)} // Display error state if field is invalid and touched
                helperText={formik.touched.username && Boolean(formik.errors.username) && t(formik.errors.username)} // Display validation error message
                sx={{
                    mb: 3, // Margin-bottom for spacing
                    minWidth: "100%" // Minimum width for responsive design
                }}
            />
            {/* Email input field */}
            <TextField
                label={t("email")} // Field label
                variant="standard" // Material UI variant
                id="register-email" // Unique field identifier
                name="email" // Field name (linked to Formik state)
                fullWidth // Expand field to full width
                value={formik.values.email} // Bind value to Formik state
                onChange={formik.handleChange} // Update state on change
                onBlur={formik.handleBlur} // Trigger validation on blur
                error={formik.touched.email && Boolean(formik.errors.email)} // Display error state if field is invalid and touched
                helperText={formik.touched.email && Boolean(formik.errors.email) && t(formik.errors.email)} // Display validation error message
                sx={{
                    mb: 3, // Margin-bottom for spacing
                    minWidth: "100%" // Minimum width for responsive design
                }}
            />
        
            {/* Password input field */}
            <Box mb={3}> {/* Box wrapper for password input */}
                <InputPassword
                    label={t("password")} // Field label
                    id="register-password" // Unique field identifier
                    name="password" // Field name (linked to Formik state)
                    value={formik.values.password} // Bind value to Formik state
                    onChange={formik.handleChange} // Update state on change
                    onBlur={formik.handleBlur} // Trigger validation on blur
                    error={formik.touched.password && Boolean(formik.errors.password)} // Display error if invalid and touched
                    helperText={formik.touched.password && Boolean(formik.errors.password) && t(formik.errors.password)} // Show error message if invalid
                />
            </Box>
        
            {/* Confirmation Password input field */}
            <InputPassword
                label={t("confirmPassword")} // Field label
                id="register-confirmation-password" // Unique identifier
                name="confirmationPassword" // Field name (linked to Formik state)
                value={formik.values.confirmationPassword} // Bind value to Formik state
                onChange={formik.handleChange} // Update state on change
                onBlur={formik.handleBlur} // Trigger validation on blur
                error={formik.touched.confirmationPassword && Boolean(formik.errors.confirmationPassword)} // Display error if invalid and touched
                helperText={formik.touched.confirmationPassword && Boolean(formik.errors.confirmationPassword) && t(formik.errors.confirmationPassword)} // Show error message if invalid
            />
        
            {/* Submit button to register user */}
            <Box display="flex" justifyContent="center"> {/* Center the button horizontally */}
                <Button 
                    type="submit" // Submit button type
                    id="btn-register" // Unique button identifier
                    sx={{
                        minWidth: { xs: "90%", sm: "70%", md: "50%" }, // Responsive width based on screen size
                        mt: 5 // Margin-top for spacing
                    }}
                    variant="contained" // Use contained button style (filled)
                >
                    {t("register")} {/* Button text */}
                </Button>
            </Box>
        </form>
    );
};

export default RegisterPage;
