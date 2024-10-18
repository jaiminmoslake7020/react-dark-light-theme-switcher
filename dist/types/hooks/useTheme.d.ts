import { ApplyToType, ThemeType } from '../types';
export type UseThemeType = {
    theme: ThemeType;
    setTheme: (x: ThemeType, fromLocalStorage?: boolean) => void;
};
export declare const useTheme: (applyTo?: ApplyToType) => UseThemeType;
