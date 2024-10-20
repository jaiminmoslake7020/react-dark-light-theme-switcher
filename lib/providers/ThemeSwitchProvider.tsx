import React, { createContext } from 'react';
import {useThemeSwitch} from '../hooks';
import {ThemeType} from '../types';

export interface ThemeSwitchContextType {
    theme: ThemeType;
    setTheme: (x: ThemeType, fromLocalStorage?: boolean) => void;
}

// Create the context
export const ThemeSwitchContext: React.Context<ThemeSwitchContextType> = createContext({
    theme: "light" as ThemeType,
    setTheme: (x: ThemeType, fromLocalStorage?: boolean) => {}
});

export type ThemeSwitchProviderProps = {
    children: React.ReactNode,
    applyTo?: 'html' | 'body',
    preferColorScheme?: boolean
};

// Create a provider component
export const ThemeSwitchProvider = ({ children, applyTo, preferColorScheme }: ThemeSwitchProviderProps ) => {
    const { theme, setTheme } = useThemeSwitch(applyTo, typeof preferColorScheme === 'boolean' ? preferColorScheme : true);
    return (
        <ThemeSwitchContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeSwitchContext.Provider>
    );
};

