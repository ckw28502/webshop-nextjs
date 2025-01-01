'use client';

import { createContext, Dispatch, JSX, ReactNode, SetStateAction, useContext, useState } from "react";

// Interface to define the shape of the authentication context state
interface AuthContextType {
    isAuthenticated: boolean; // The authentication status (true or false)
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>; // Function to update the authentication status
}

interface AuthProviderProps {
    children: ReactNode; // The children elements to be wrapped by the AuthProvider
}

// Create a context to manage authentication state across the application
const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false, // Default authentication status is false (not authenticated)
    setIsAuthenticated: () => {} // Placeholder function for setting the authentication status
});

/**
 * AuthProvider component - Provides authentication state to the rest of the application.
 * 
 * @param {AuthProviderProps} props - The props containing children elements.
 * @returns {JSX.Element} The context provider wrapped around the children.
 */
export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
    // State to track the authentication status
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        // Providing the authentication state and setter function to the children
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children} {/* Render children components */}
        </AuthContext.Provider>  
    );
}

/**
 * useAuth hook - Custom hook to access the authentication context.
 * 
 * @returns {AuthContextType} The authentication context with `isAuthenticated` and `setIsAuthenticated`.
 */
export const useAuth = (): AuthContextType => useContext(AuthContext);
