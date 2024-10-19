import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

type ThemeType = "light" | "dark";
type ElWithClassType = `.${string}`;
type ElWithIdType = `#${string}`;
type ApplyToType = 'html' | 'body' | keyof HTMLElementTagNameMap | ElWithClassType | ElWithIdType | undefined;

type ThemeSwitcherBtnPropTypes = {
    theme: "light" | "dark";
    setTheme: (s: ThemeType) => void;
    themeSwitcherContainerClassName?: string;
    iconWrapperClassName?: string;
    sunIconWrapperClassName?: string;
    moonIconWrapperClassName?: string;
};
declare const ThemeSwitcherBtn: (props: ThemeSwitcherBtnPropTypes) => react_jsx_runtime.JSX.Element;
type ThemeSwitcherBtnProviderChildPropTypes = {
    themeSwitcherContainerClassName?: string;
    iconWrapperClassName?: string;
    sunIconWrapperClassName?: string;
    moonIconWrapperClassName?: string;
};
declare const ThemeSwitcherBtnProviderChild: (props: ThemeSwitcherBtnProviderChildPropTypes) => react_jsx_runtime.JSX.Element;

type UseThemeType = {
    theme: ThemeType;
    setTheme: (x: ThemeType, fromLocalStorage?: boolean) => void;
};
declare const useTheme: (applyTo?: ApplyToType, preferColorScheme?: boolean) => UseThemeType;

interface ThemeContextType {
    theme: ThemeType;
    setTheme: (x: ThemeType, fromLocalStorage?: boolean) => void;
}
declare const ThemeContext: React.Context<ThemeContextType>;
type ThemeProviderProps = {
    children: React.ReactNode;
    applyTo?: 'html' | 'body';
    preferColorScheme?: boolean;
};
declare const ThemeProvider: ({ children, applyTo, preferColorScheme }: ThemeProviderProps) => react_jsx_runtime.JSX.Element;

export { type ApplyToType, ThemeContext, type ThemeContextType, ThemeProvider, ThemeSwitcherBtn, type ThemeSwitcherBtnPropTypes, ThemeSwitcherBtnProviderChild, type ThemeSwitcherBtnProviderChildPropTypes, type ThemeType, type UseThemeType, useTheme };
