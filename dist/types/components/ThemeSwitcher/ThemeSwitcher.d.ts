import { ThemeType } from './../../types';
export type ThemeSwitcherBtnPropTypes = {
    theme: "light" | "dark";
    setTheme: (s: ThemeType) => void;
    themeSwitcherContainerClassName?: string;
    iconWrapperClassName?: string;
    sunIconWrapperClassName?: string;
    moonIconWrapperClassName?: string;
};
export declare const ThemeSwitcherBtn: (props: ThemeSwitcherBtnPropTypes) => import("react/jsx-runtime").JSX.Element;
export type ThemeSwitcherBtnProviderChildPropTypes = {
    themeSwitcherContainerClassName?: string;
    iconWrapperClassName?: string;
    sunIconWrapperClassName?: string;
    moonIconWrapperClassName?: string;
};
export declare const ThemeSwitcherBtnProviderChild: (props: ThemeSwitcherBtnProviderChildPropTypes) => import("react/jsx-runtime").JSX.Element;
