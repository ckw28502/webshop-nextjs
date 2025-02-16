import userService from "@/services/userService";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { VerificationStatus } from "../statusEnum";

export const useVerifyPage = () => {
    const { token } = useParams<{ token: string }>();
    const [status, setStatus] = useState<VerificationStatus>(VerificationStatus.Loading);
    
    useEffect(() => {
        userService.verify(token)
            .then(() => {
                setStatus(VerificationStatus.Success);
            })
            .catch(() => {
                setStatus(VerificationStatus.Error);
            });
    }, [token]);
    
    return status;
}