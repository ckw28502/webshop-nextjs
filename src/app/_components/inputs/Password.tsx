"use client";

import { IconButton, InputAdornment, TextField } from "@mui/material";
import { ChangeEvent, FocusEvent, JSX, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

/**
 * Props for the InputPassword component
 * 
 * @interface InputPasswordProps
 * @property {string} id - The unique identifier for the password input field.
 * @property {string} name - The name of the password input field.
 * @property {string} value - The current value of the password input.
 * @property {string} [label] - Optional label for the password input.
 * @property {function} [onChange] - Optional function that handles changes to the password input value.
 * @property {function} [onBlur] - Optional function that handles the blur event for the password input.
 * @property {boolean} [error] - Optional flag indicating if the input has an error (used for styling and validation).
 * @property {string | false} [helperText] - Optional helper text to display beneath the input, or `false` if no helper text.
 */
interface InputPasswordProps {
    id: string; // The unique identifier for the password input field.
    name: string; // The name of the password input field.
    value: string; // The current value of the password input.
    label?: string; // Optional label for the password input.
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void; // Optional change handler for the password input.
    onBlur?: (event: FocusEvent<HTMLInputElement>) => void; // Optional blur handler for the password input.
    error?: boolean; // Flag indicating if the input has an error.
    helperText?: string | false; // Optional helper text for the password input.
}

/**
 * InputPassword component - A password input field that allows toggling between visible and hidden text.
 * 
 * @param {InputPasswordProps} props - The props object containing all properties for the password input.
 * @returns {JSX.Element} A TextField component with an optional visibility toggle for the password.
 */
export default function InputPassword({ 
    id,
    name,
    value,
    label,
    onChange,
    onBlur,
    error,
    helperText
 }: InputPasswordProps): JSX.Element {
    // State to track if the password is visible or hidden
    const [isVisible, setVisibility] = useState(false);

    // Method to toggle the visibility of the password
    function handleClickToggleVisibility(): void {
        setVisibility(!isVisible);
    }

    return(
        <TextField
            label={label} // Display the label for the password input
            id={id} // Set the unique identifier for the input
            name={name} // Set the name for the input
            value={value} // Set the value of the input
            onChange={onChange} // Call the provided onChange function when the value changes
            onBlur={onBlur} // Call the provided onBlur function when the input loses focus
            error={error} // Pass error state to the TextField to apply error styles
            helperText={helperText} // Display helper text or validation message
            type={isVisible ? "text" : "password"} // Toggle between password and text input based on visibility state
            variant="standard" // Use the standard variant for the TextField
            fullWidth // Make the input take up the full width of its container
            // SlotProps for adding the visibility toggle icon inside the input
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password"
                                onClick={handleClickToggleVisibility} // Toggle visibility on click
                            >
                                {isVisible ? <VisibilityOff /> : <Visibility />} {/* Display the appropriate icon based on visibility */}
                            </IconButton>
                        </InputAdornment>
                    )
                }
            }}
        />
    );
}
