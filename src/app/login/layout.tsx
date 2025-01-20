import { JSX, ReactNode } from "react";
import Form from "../components/Form";

/**
 * Layout for the login page.
 * 
 * @param {object} props - The props object containing the children.
 * @param {ReactNode} props.children - The child elements (form inputs, buttons, etc.) to be rendered inside the login form.
 * @returns {JSX.Element} A Form component wrapped around the login page content.
 */
export default function LoginLayout({
    children
}: Readonly<{
    children: ReactNode; // The children elements passed to the layout, usually form fields or buttons
}>): JSX.Element {
    return (
        // Wrap the children inside a Form component with a title "login"
        <Form title="login">
            {children} {/* Render the children passed to this layout */}
        </Form>
    );
}
