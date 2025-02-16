import { CircularProgress } from "@mui/material";
import { JSX } from "react";

/**
 * Component displayed when the verification process is in progress.
 * 
 * This component renders a loading spinner to indicate that the user
 * verification process is being executed. It uses Material UI's 
 * CircularProgress component to show a spinning loader.
 * 
 * @returns {JSX.Element} The loading spinner component.
 */
const VerifyLoadingPage = (): JSX.Element => {
    return (
        /**
         * CircularProgress is a Material UI component that displays a circular loading indicator.
         * The size is set to 30% of the viewport height (30vh).
         */
        <CircularProgress size="30vh" />
    );
};

export default VerifyLoadingPage;
