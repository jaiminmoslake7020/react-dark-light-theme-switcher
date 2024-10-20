import React from 'react';
import { ThemeType } from '../types';
export interface ThemeSwitchContextType {
    theme: ThemeType;
    setTheme: (x: ThemeType, fromLocalStorage?: boolean) => void;
}
export declare const ThemeSwitchContext: React.Context<ThemeSwitchContextType>;
export type ThemeSwitchProviderProps = {
    children: React.ReactNode;
    applyTo?: 'html' | 'body';
    preferColorScheme?: boolean;
};
export declare const ThemeSwitchProvider: ({ children, applyTo, preferColorScheme }: ThemeSwitchProviderProps) => import("react/jsx-runtime").JSX.Element;
