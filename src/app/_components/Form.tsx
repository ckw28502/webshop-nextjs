import { Box, Paper, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { JSX, ReactNode } from "react";

/**
 * Props for the Form component
 * 
 * @interface FormProps
 * @property {string} title - The title to display at the top of the form.
 * @property {ReactNode} children - The child elements (form inputs, buttons, etc.) to be rendered inside the form.
 */
interface FormProps {
    title: string;
    children: ReactNode;
}

/**
 * Form component - A flexible container for displaying a form with a title and children components.
 * 
 * @param {FormProps} props - The props object containing `title` and `children`.
 * @returns {JSX.Element} A Box container with a Paper element that contains the form's title and children.
 */
export default function Form({ title, children }: Readonly<FormProps>): JSX.Element {
    // Use translations to handle dynamic language changes based on the 'FormComponent' namespace
    const t = useTranslations("FormComponent");

    return (
        // Container for centering the form on the page
        <Box display="flex" justifyContent="center">
            <Box 
                // Responsive width: Adjust form width based on screen size
                width={{ xs: "90%", sm: "50%", md: "30%", lg: "30%", xl: "19%" }}
                marginY={10} // Add vertical margin (spacing)
            >
                {/* Paper component for a white background with elevation (shadow) */}
                <Paper elevation={3} sx={{ pt: 3, px: 5, pb: 4, minWidth: "100%" }}>
                    {/* Title section, centered inside the form */}
                    <Box display="flex" justifyContent="center">
                        <Typography variant="h3">{t(title)}</Typography>
                    </Box>
                    {/* Children section, centered below the title */}
                    <Box display="flex" justifyContent="center" marginTop={5}>
                        {children}
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
}
