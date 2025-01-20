import { LoginDto } from "@/dto/requests/loginDto";
import userService from "@/services/userService";
import { getErrorMessage, getSuccessMessage } from "@/utils/httpResponseHandler";
import toastify from "@/utils/toastify";
import { FormikProps, useFormik } from "formik";
import { useTranslations } from "next-intl";
import { object, string } from "yup";

/**
 * @interface LoginFormValues
 * Represents the structure of the values used in the login form.
 * @property {string} username - The username entered by the user.
 * @property {string} password - The password entered by the user.
 */
interface LoginFormValues {
    username: string;
    password: string;
}

/**
 * Custom hook for handling the Login page logic using Formik and Yup.
 *
 * This hook manages form state, validation, and submission for the login page.
 * It integrates with the user service to authenticate users and handles success/error feedback
 * using toast notifications.
 *
 * @returns {FormikProps<LoginDto>} - Formik properties and methods for form management.
 */
export const useLoginPage = (): FormikProps<LoginDto> => {
    // Hook for accessing translations specific to the Login page
    const t = useTranslations("LoginPage");

    // Yup validation schema for the login form fields
    const validationSchema = object({
        username: string()
            .required("errors.username.required"), // Username is required
        password: string()
            .required("errors.password.required") // Password is required
    });

    /**
     * Submits the login data to the API for authentication.
     *
     * @param {LoginFormValues} values - The form data containing the username and password.
     * @returns {Promise<void>} A promise that resolves after handling the login logic.
     */
    async function login(values: LoginFormValues): Promise<void> {
        const request: LoginDto = { ...values }; // Prepare the login request payload

        userService
            .login(request)
            .then(() => {
                // Show success notification
                toastify.toastSuccess(t(getSuccessMessage()));
                // Reset the form state after successful login
                formik.resetForm();
            })
            .catch((error) => {
                // Show error notification with the message from the API response
                toastify.toastError(t(getErrorMessage(error.response.data)));
            });
    }

    // Initialize Formik for managing form state, validation, and submission
    const formik = useFormik({
        initialValues: {
            username: "", // Initial value for the username field
            password: "", // Initial value for the password field
        },
        validationSchema, // Attach the Yup validation schema
        onSubmit: async (values: LoginFormValues): Promise<void> => {
            // Handle form submission by calling the login logic
            await login(values);
        },
    });

    return formik; // Return Formik properties for use in the UI
};
