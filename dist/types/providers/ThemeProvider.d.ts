import React from 'react';
import { ThemeType } from '../types';
export interface ThemeContextType {
    theme: ThemeType;
    setTheme: (x: ThemeType, fromLocalStorage?: boolean) => void;
}
export declare const ThemeContext: React.Context<ThemeContextType>;
export type ThemeProviderProps = {
    children: React.ReactNode;
    applyTo?: 'html' | 'body';
};
export declare const ThemeProvider: ({ children, applyTo }: ThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
