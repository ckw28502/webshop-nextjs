import { JSX, ReactNode } from "react";
import Form from "../_components/Form";

/**
 * Layout for the registration page.
 * 
 * @param {object} props - The props object containing the children.
 * @param {ReactNode} props.children - The child elements (form inputs, buttons, etc.) to be rendered inside the registration form.
 * @returns {JSX.Element} A Form component wrapped around the registration page content.
 */
export default function RegisterLayout({
    children
}: Readonly<{
    children: ReactNode; // The children elements passed to the layout, usually form fields or buttons
}>): JSX.Element {
    return (
        // Wrap the children inside a Form component with a title "register"
        <Form title="register">
            {children} {/* Render the children passed to this layout */}
        </Form>
    );
}
