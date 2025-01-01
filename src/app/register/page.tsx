"use client";

import { object, ref, string } from "yup";
import { useFormik } from "formik";
import { Box, Button, TextField } from "@mui/material";
import InputPassword from "../_components/inputs/Password";
import { JSX } from "react";
import userService from "@/services/userService";
import toastify from "@/utils/toastify";
import responseHandler from "@/utils/responseHandler";

/**
 * Interface for the values used in the registration form.
 * Defines the structure of the form data, which includes a username, password, and confirmation password.
 */
interface RegisterFormValues {
    username: string;          // The username entered by the user.
    password: string;          // The password entered by the user.
    confirmationPassword: string;  // The password confirmation field to ensure passwords match.
}

/**
 * RegisterPage component - A form for user registration with validation and password confirmation.
 * 
 * @returns {JSX.Element} The registration form with fields for username, password, and confirmation password.
 */
export default function RegisterPage(): JSX.Element {
    // Validation schema using Yup for form fields
    const validationSchema = object({
        username: string().required("Enter your username!"), // Username is required
        password: string()
            .required("Password is required!") // Password is required
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter!') // Must contain at least one uppercase letter
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter!') // Must contain at least one lowercase letter
            .matches(/[0-9]/, 'Password must contain at least one number!') // Must contain at least one number
            .min(8, 'Password must be at least 8 characters!'), // Password must be at least 8 characters long
        confirmationPassword: string()
            .required("Confirmation password field is required!") // Confirmation password is required
            .oneOf([ref("password")], "Password must match!") // Must match the password field
    });

    /**
     * Registers a new user with the given form values.
     * This function creates a user by calling the `createUser` service method and handles any errors during the process.
     * 
     * @param {RegisterFormValues} values - The form values containing username, password, and confirmation password.
     */
    async function register(values: RegisterFormValues) {
        const request: RegisterRequest = { ...values }; // Prepare the request object

        try {
            await userService.createUser(request); // Call the user service to create a new user
        } catch (error) {
            // Handle any error by showing an error message using toastify
            toastify.toastError(responseHandler.getErrorMessage(error));
        };
    }

    // Formik hook for managing form state, validation, and submission
    const formik = useFormik({
        initialValues: {
            username: "", // Initial value for username
            password: "", // Initial value for password
            confirmationPassword: "", // Initial value for confirmation password
        },
        validationSchema: validationSchema, // Apply validation schema
        onSubmit: async(values: RegisterFormValues): Promise<void> => { // Handle form submission
            await register(values); // Call register function on form submission
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}> {/* Handle form submission with Formik */}
        
            {/* Username field */}
            <TextField
                label="Username" // Label for the field
                variant="standard" // Material UI standard variant
                id="register-username" // Unique ID for the field
                name="username" // Name of the field (used in Formik state)
                fullWidth // Full width input
                value={formik.values.username} // Bind Formik state value
                onChange={formik.handleChange} // Handle value change with Formik
                onBlur={formik.handleBlur} // Handle field blur (validation trigger)
                error={formik.touched.username && Boolean(formik.errors.username)} // Show error if touched and invalid
                helperText={formik.touched.username && formik.errors.username} // Show error message if touched and invalid
                sx={{
                    mb: 3, // Margin bottom for spacing
                    minWidth: "100%" // Minimum width for the input
                }}
            />
        
            {/* Password field */}
            <Box mb={3}> {/* Box to contain the password input */}
                <InputPassword
                    label="Password" // Label for the password field
                    id="register-password" // Unique ID for the field
                    name="password" // Name of the field (used in Formik state)
                    value={formik.values.password} // Bind Formik state value
                    onChange={formik.handleChange} // Handle value change with Formik
                    onBlur={formik.handleBlur} // Handle field blur (validation trigger)
                    error={formik.touched.password && Boolean(formik.errors.password)} // Show error if touched and invalid
                    helperText={formik.touched.password && formik.errors.password} // Show error message if touched and invalid
                />
            </Box>
        
            {/* Confirmation Password field */}
            <InputPassword
                label="Confirmation Password" // Label for the confirmation password field
                id="register-confirmation-password" // Unique ID for the field
                name="confirmationPassword" // Name of the field (used in Formik state)
                value={formik.values.confirmationPassword} // Bind Formik state value
                onChange={formik.handleChange} // Handle value change with Formik
                onBlur={formik.handleBlur} // Handle field blur (validation trigger)
                error={formik.touched.confirmationPassword && Boolean(formik.errors.confirmationPassword)} // Show error if touched and invalid
                helperText={formik.touched.confirmationPassword && formik.errors.confirmationPassword} // Show error message if touched and invalid
            />
        
            {/* Submit button */}
            <Box display="flex" justifyContent="center"> {/* Center the button */}
                <Button 
                    type="submit" // Button type to trigger form submission
                    id="btn-register" // Unique ID for the button
                    sx={{
                        minWidth: { xs: "90%", sm: "70%", md: "50%" }, // Responsive width
                        mt: 5 // Margin top for spacing
                    }}
                    variant="contained" // Material UI contained button style
                >
                    REGISTER {/* Button text */}
                </Button>
            </Box>
        </form>
    );
}
