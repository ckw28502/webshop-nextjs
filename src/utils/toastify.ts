import { Bounce, toast } from "react-toastify";

/**
 * Display an error toast notification.
 * 
 * @param {string} message - The error message to be displayed in the toast.
 * 
 * This function uses `react-toastify` to show an error notification with custom settings like auto-close time, position, etc.
 * 
 * @returns {void} This function does not return any value.
 */
function toastError(message: string): void {
    // Display the error toast with custom settings
    toast.error(message, {
        position: "bottom-right", // Toast will appear at the bottom-right of the screen
        autoClose: 5000, // Auto-close the toast after 5000ms (5 seconds)
        hideProgressBar: false, // Show the progress bar
        closeOnClick: true, // Allow closing the toast by clicking on it
        pauseOnHover: true, // Pause the progress bar when hovering over the toast
        draggable: true, // Allow the toast to be draggable
        progress: undefined, // No custom progress bar configuration
        theme: "colored", // Use the colored theme for the toast (can be 'light', 'dark', 'colored')
        transition: Bounce, // Use the Bounce transition effect for the toast
    });
}

// Export the toastError function as part of the toastify object
const toastify = {
    toastError // Add the toastError function to the toastify object
};

export default toastify; // Export the toastify object for usage in other parts of the app
