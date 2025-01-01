/**
 * Extracts the error message from an API error response.
 * 
 * @param {object} error - The error object received from an API call (usually contains response data).
 * 
 * @returns {string} The error message extracted from the response data.
 * 
 * This function assumes that the `error` object is structured with a `response` property that holds the API response data.
 * Typically, it would be used to handle Axios or other HTTP request errors.
 */
function getErrorMessage(error: object): string {
    // Extract and return the error message from the API response data
    return error.response.data;
}

// Export the getErrorMessage function as part of the responseHandler object
const responseHandler = {
    getErrorMessage // Add the getErrorMessage function to the responseHandler object
};

export default responseHandler; // Export the responseHandler object for usage in other parts of the app
