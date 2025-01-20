import { RegisterDto } from "@/dto/requests/registerDto";
import userService from "@/services/userService";
import { getErrorMessage, getSuccessMessage } from "@/utils/httpResponseHandler";
import toastify from "@/utils/toastify";
import { FormikProps, useFormik } from "formik";
import { useTranslations } from "next-intl";
import { object, ref, string } from "yup";

/**
 * @interface RegisterFormValues
 * Represents the structure of the values used in the registration form.
 * @property {string} username - The username entered by the user.
 * @property {string} email - The email address entered by the user.
 * @property {string} password - The password entered by the user.
 * @property {string} confirmationPassword - The confirmation of the entered password.
 */
interface RegisterFormValues {
    username: string;
    email: string;
    password: string;
    confirmationPassword: string;
}

/**
 * Custom hook for handling the Register page logic using Formik and Yup.
 *
 * This hook manages form state, validation, and submission for the registration page.
 * It integrates with a user service to create new users and handles success/error feedback
 * using toast notifications.
 *
 * @returns {FormikProps<RegisterFormValues>} - Formik properties and methods for form management.
 */
export const useRegisterPage = (): FormikProps<RegisterFormValues> => {
    // Hook for accessing translations specific to the Register page
    const t = useTranslations("RegisterPage");

    // Yup validation schema for the form fields
    const validationSchema = object({
        username: string()
            .required("errors.username.required") // Username is required
            .min(3, "errors.username.minLength") // Minimum username length
            .max(50, "errors.username.maxLength"), // Maximum username length
        email: string()
            .required("errors.email.required") // Email is required
            .email("errors.email.valid"), // Must be a valid email format
        password: string()
            .required("errors.password.required") // Password is required
            .matches(/[A-Z]/, "errors.password.uppercase") // Require at least one uppercase letter
            .matches(/[a-z]/, "errors.password.lowercase") // Require at least one lowercase letter
            .matches(/\d/, "errors.password.number") // Require at least one digit
            .min(8, "errors.password.minLength"), // Minimum password length
        confirmationPassword: string()
            .required("errors.confirmPassword.required") // Confirmation password is required
            .oneOf([ref("password")], "errors.confirmPassword.mustMatch"), // Must match the password field
    });

    /**
     * Submits the registration data to the API to create a new user.
     *
     * @param {RegisterFormValues} values - The form data containing username, email, password, and confirmation password.
     */
    async function register(values: RegisterFormValues) {
        const request: RegisterDto = { ...values }; // Prepare request payload

        userService
            .createUser(request)
            .then(() => {
                // Show success notification
                toastify.toastSuccess(t(getSuccessMessage()));
                // Reset the form state after successful registration
                formik.resetForm();
            })
            .catch((error) => {
                // Show error notification with the error message from the API
                toastify.toastError(t(getErrorMessage(error.response.data)));
            });
    }

    // Initialize Formik for managing form state, validation, and submission
    const formik = useFormik({
        initialValues: {
            username: "", // Initial value for the username field
            email: "", // Initial value for the email field
            password: "", // Initial value for the password field
            confirmationPassword: "", // Initial value for the confirmation password field
        },
        validationSchema, // Attach the Yup validation schema
        onSubmit: async (values: RegisterFormValues): Promise<void> => {
            // Handle form submission by calling the registration logic
            await register(values);
        },
    });

    return formik; // Return Formik props for use in the UI
};