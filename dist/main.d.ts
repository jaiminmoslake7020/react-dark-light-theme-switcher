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

type UseThemeSwitchType = {
    theme: ThemeType;
    setTheme: (x: ThemeType, fromLocalStorage?: boolean) => void;
};
declare const useThemeSwitch: (applyTo?: ApplyToType, preferColorScheme?: boolean) => UseThemeSwitchType;

interface ThemeSwitchContextType {
    theme: ThemeType;
    setTheme: (x: ThemeType, fromLocalStorage?: boolean) => void;
}
declare const ThemeSwitchContext: React.Context<ThemeSwitchContextType>;
type ThemeSwitchProviderProps = {
    children: React.ReactNode;
    applyTo?: 'html' | 'body';
    preferColorScheme?: boolean;
};
declare const ThemeSwitchProvider: ({ children, applyTo, preferColorScheme }: ThemeSwitchProviderProps) => react_jsx_runtime.JSX.Element;

export { type ApplyToType, ThemeSwitchContext, type ThemeSwitchContextType, ThemeSwitchProvider, ThemeSwitcherBtn, type ThemeSwitcherBtnPropTypes, ThemeSwitcherBtnProviderChild, type ThemeSwitcherBtnProviderChildPropTypes, type ThemeType, type UseThemeSwitchType, useThemeSwitch };
