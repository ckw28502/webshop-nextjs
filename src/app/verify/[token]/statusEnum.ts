/**
 * Enum representing the status of a verification process.
 * This can be used to manage the state of an operation such as 
 * API calls, form submissions, or any asynchronous verification flow.
 * 
 * @enum {string}
 */
export enum VerificationStatus {
    /**
     * Indicates that the verification process is currently in progress.
     * Use this status to display loading indicators or disable user interaction
     * during the ongoing process.
     * 
     * @type {string}
     */
    Loading = "loading",

    /**
     * Indicates that the verification process completed successfully.
     * Use this status to inform the user of the success and proceed with the
     * next steps in your application.
     * 
     * @type {string}
     */
    Success = "success",

    /**
     * Indicates that the verification process encountered an error.
     * Use this status to display error messages and allow the user to retry
     * or fix any issues.
     * 
     * @type {string}
     */
    Error = "error"
};
