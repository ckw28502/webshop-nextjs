/**
 * getErrorMessage function - Formats an error message by prepending a standard prefix.
 * This is used to standardize error messages in the application.
 * 
 * @param {string} errorMessage - The specific error message to format (e.g., "invalid_credentials").
 * @returns {string} - The formatted error message with the standard "response.error" prefix.
 */
export function getErrorMessage(errorMessage: string): string {
    return "response.errors." + errorMessage;
}

/**
 * getSuccessMessage function - Returns a standard success message.
 * This function provides a consistent way to handle success messages across the application.
 * 
 * @returns {string} - The standard success message: "response.success".
 */
export function getSuccessMessage(): string {
    return "response.success";
}
