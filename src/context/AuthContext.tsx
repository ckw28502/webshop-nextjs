'use client';

import { createContext, Dispatch, JSX, ReactNode, SetStateAction, useContext, useMemo, useState } from "react";

/**
 * @interface AuthContextType
 * Represents the structure of the authentication context state.
 * 
 * @property {boolean} isAuthenticated - Indicates if the user is authenticated.
 * @property {Dispatch<SetStateAction<boolean>>} setIsAuthenticated - Function to update authentication status.
 */
interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}

/**
 * @interface AuthProviderProps
 * Props for the AuthProvider component, which wraps child components to provide authentication state.
 * 
 * @property {ReactNode} children - Child components to receive the authentication context.
 */
interface AuthProviderProps {
    children: ReactNode;
}

// Create a context with default values for authentication state
const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false, // Default to not authenticated
    setIsAuthenticated: () => {} // Placeholder function to avoid undefined errors
});

/**
 * AuthProvider component - Wraps application components and manages global authentication state.
 * 
 * @param {AuthProviderProps} props - Props containing children components to be wrapped by the provider.
 * @returns {JSX.Element} Context provider that passes authentication state to children.
 */
export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
    // State hook to manage and track authentication status
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const authContextValue = useMemo(() => ({ isAuthenticated, setIsAuthenticated }), [isAuthenticated]);

    return (
        /**
         * Provides the authentication state and setter to child components.
         */
        <AuthContext.Provider value={authContextValue}>
            {children} {/* Render wrapped child components */}
        </AuthContext.Provider>  
    );
}

/**
 * useAuth hook - Provides easy access to authentication context.
 * 
 * @returns {AuthContextType} The current authentication context, including state and setter.
 */
export const useAuth = (): AuthContextType => useContext(AuthContext);
