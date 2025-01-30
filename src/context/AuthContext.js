import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser , setCurrentUser ] = useState(null);

    const signup = async (userData) => {
        // Implement your signup logic here (e.g., API call)
        // On success, set the currentUser  
        setCurrentUser (userData); // Store user data including role
    };

    const login = async (email, password, role) => {
        // Implement your login logic here (e.g., API call)
        // On success, set the currentUser  
        setCurrentUser ({ email, role }); // Store user data including role
    };

    const logout = () => {
        // Implement your logout logic here
        setCurrentUser (null);
    };

    const value = {
        currentUser ,
        signup,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};