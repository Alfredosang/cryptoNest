"use client"; 

import { createContext, useState, useEffect } from 'react';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    // useEffect(() => {
    //     // Check if the user has a saved preference for dark mode
    //     const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    //     setDarkMode(storedDarkMode);

    //     if (storedDarkMode) {
    //         document.documentElement.classList.add('dark');
    //     }
    // }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        // Save the preference in localStorage
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    return (
        <MyContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyContext;
