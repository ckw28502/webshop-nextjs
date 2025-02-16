import userService from "@/services/userService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { VerificationStatus } from "../statusEnum";

/**
 * Custom hook for verifying a user based on a token.
 * 
 * This hook is responsible for handling the verification process 
 * when a token is passed as a URL parameter, updating the verification 
 * status accordingly.
 *
 * @returns {VerificationStatus} The current verification status (loading, success, or error).
 */
export const useVerifyPage = (): VerificationStatus => {
    // Retrieving the verification token from the URL parameters
    const { token } = useParams<{ token: string }>();

    // State to track the verification status, defaulting to 'Loading'
    const [status, setStatus] = useState<VerificationStatus>(VerificationStatus.Loading);
    
    useEffect(() => {
        // Calling the verify method of the user service with the token
        userService.verify(token)
            .then(() => {
                // On success, update the status to 'Success'
                setStatus(VerificationStatus.Success);
            })
            .catch(() => {
                // On error, update the status to 'Error'
                setStatus(VerificationStatus.Error);
            });
    }, [token]); // Effect runs when the token changes
    
    // Returning the current verification status
    return status;
}
