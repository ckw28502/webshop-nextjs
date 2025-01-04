"use client";

import { object, ref, string } from "yup";
import { useFormik } from "formik";
import { Box, Button, TextField } from "@mui/material";
import InputPassword from "../_components/inputs/Password";
import { JSX } from "react";
import userService from "@/services/userService";
import toastify from "@/utils/toastify";
import { RegisterDto } from "@/dto/requests/registerDto";

/**
 * @interface RegisterFormValues
 * Represents the structure of the values used in the registration form.
 * @property {string} username - The username entered by the user.
 * @property {string} password - The password entered by the user.
 * @property {string} confirmationPassword - The confirmation of the entered password.
 */
interface RegisterFormValues {
    username: string;
    password: string;
    confirmationPassword: string;
}

/**
 * RegisterPage component - Provides a user registration form with validation for username, password, and confirmation password.
 * 
 * @returns {JSX.Element} A form containing fields for username, password, and password confirmation.
 */
export default function RegisterPage(): JSX.Element {
    // Yup validation schema for form fields
    const validationSchema = object({
        username: string()
        .required("Enter your username!") // Validation: Username is required
        .min(3, "Username must be at least 3 characters!") // Minimum username length
        .max(50, "Username must be at most 50 characters!"), // Maximum username length
        password: string()
            .required("Password is required!") // Validation: Password is required
            .matches(/[A-Z]/, 'Password must contain at least one uppercase letter!') // Require at least one uppercase letter
            .matches(/[a-z]/, 'Password must contain at least one lowercase letter!') // Require at least one lowercase letter
            .matches(/[0-9]/, 'Password must contain at least one number!') // Require at least one digit
            .min(8, 'Password must be at least 8 characters!'), // Minimum password length
        confirmationPassword: string()
            .required("Confirmation password field is required!") // Validation: Confirmation password is required
            .oneOf([ref("password")], "Passwords must match!") // Must match the password field
    });

    /**
     * Registers a new user by submitting form data to the createUser service method.
     * Handles success and error responses using toast notifications.
     * 
     * @param {RegisterFormValues} values - User-entered form data containing username, password, and confirmation password.
     */
    async function register(values: RegisterFormValues) {
        const request: RegisterDto = { ...values }; // Prepare data for API request

        userService.createUser(request)
        .then(() => toastify.toastSuccess("User registered successfully!")) // Display success notification
        .catch((error) => { // Handle error response
            toastify.toastError(error.response.data); // Show error notification
        })
    }

    // Formik hook to manage form state, validation, and submission
    const formik = useFormik({
        initialValues: {
            username: "", // Default username field value
            password: "", // Default password field value
            confirmationPassword: "", // Default confirmation password field value
        },
        validationSchema: validationSchema, // Attach Yup validation schema
        onSubmit: async(values: RegisterFormValues): Promise<void> => { // Form submission handler
            await register(values); // Trigger registration logic
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}> {/* Attach Formik submission handler to form */}
            
            {/* Username input field */}
            <TextField
                label="Username" // Field label
                variant="standard" // Material UI variant
                id="register-username" // Unique field identifier
                name="username" // Field name (linked to Formik state)
                fullWidth // Expand field to full width
                value={formik.values.username} // Bind value to Formik state
                onChange={formik.handleChange} // Update state on change
                onBlur={formik.handleBlur} // Trigger validation on blur
                error={formik.touched.username && Boolean(formik.errors.username)} // Display error state if field is invalid and touched
                helperText={formik.touched.username && formik.errors.username} // Display validation error message
                sx={{
                    mb: 3, // Margin-bottom for spacing
                    minWidth: "100%" // Minimum width for responsive design
                }}
            />
        
            {/* Password input field */}
            <Box mb={3}> {/* Box wrapper for password input */}
                <InputPassword
                    label="Password" // Field label
                    id="register-password" // Unique field identifier
                    name="password" // Field name (linked to Formik state)
                    value={formik.values.password} // Bind value to Formik state
                    onChange={formik.handleChange} // Update state on change
                    onBlur={formik.handleBlur} // Trigger validation on blur
                    error={formik.touched.password && Boolean(formik.errors.password)} // Display error if invalid and touched
                    helperText={formik.touched.password && formik.errors.password} // Show error message if invalid
                />
            </Box>
        
            {/* Confirmation Password input field */}
            <InputPassword
                label="Confirmation Password" // Field label
                id="register-confirmation-password" // Unique identifier
                name="confirmationPassword" // Field name (linked to Formik state)
                value={formik.values.confirmationPassword} // Bind value to Formik state
                onChange={formik.handleChange} // Update state on change
                onBlur={formik.handleBlur} // Trigger validation on blur
                error={formik.touched.confirmationPassword && Boolean(formik.errors.confirmationPassword)} // Display error if invalid and touched
                helperText={formik.touched.confirmationPassword && formik.errors.confirmationPassword} // Show error message if invalid
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
                    REGISTER {/* Button text */}
                </Button>
            </Box>
        </form>
    );
}
