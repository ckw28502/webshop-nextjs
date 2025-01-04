import { Bounce, toast } from "react-toastify";

/**
 * Display an error toast notification.
 * 
 * @param {string} message - The error message to be displayed in the toast.
 * 
 * This function utilizes `react-toastify` to present an error notification. 
 * The toast is displayed at the bottom-right corner of the screen and disappears 
 * automatically after 5 seconds. Users can manually close it by clicking on it, 
 * and the progress bar pauses on hover.
 * 
 * @returns {void} This function does not return any value.
 */
function toastError(message: string): void {
    toast.error(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}

/**
 * Display a success toast notification.
 * 
 * @param {string} message - The success message to be displayed in the toast.
 * 
 * This function leverages `react-toastify` to show a success notification. 
 * The toast appears at the bottom-right corner of the screen and closes automatically 
 * after 5 seconds. Users can close it by clicking, and hovering over the toast 
 * pauses the progress bar.
 * 
 * @returns {void} This function does not return any value.
 */
function toastSuccess(message: string): void {
    toast.success(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
}

/**
 * Object containing utility functions for displaying toast notifications.
 * 
 * Provides methods for showing both error and success toasts using `react-toastify`. 
 * 
 * @property {Function} toastError - Displays an error notification.
 * @property {Function} toastSuccess - Displays a success notification.
 */
const toastify = {
    toastError,
    toastSuccess,
};

export default toastify;
