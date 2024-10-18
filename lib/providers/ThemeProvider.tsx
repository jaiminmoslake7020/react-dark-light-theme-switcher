import React, { createContext } from 'react';
import {useTheme} from '../hooks';
import {ThemeType} from '../types';

export interface ThemeContextType {
    theme: ThemeType;
    setTheme: (x: ThemeType, fromLocalStorage?: boolean) => void;
}

// Create the context
export const ThemeContext: React.Context<ThemeContextType> = createContext({
    theme: "light" as ThemeType,
    setTheme: (x: ThemeType, fromLocalStorage?: boolean) => {}
});

export type ThemeProviderProps = {
    children: React.ReactNode,
    applyTo?: 'html' | 'body'
};

// Create a provider component
export const ThemeProvider = ({ children, applyTo }: ThemeProviderProps ) => {
    const { theme, setTheme } = useTheme(applyTo);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

