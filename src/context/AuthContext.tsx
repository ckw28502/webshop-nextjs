'use client';

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

const AuthContext = createContext<{
    isAuthenticated: boolean;
    setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
}>({
    isAuthenticated: false,
    setIsAuthenticated: () => {}
});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>  
    );
}

export const useAuth = () => useContext(AuthContext);