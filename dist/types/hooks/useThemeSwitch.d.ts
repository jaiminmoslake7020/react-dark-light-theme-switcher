import { ApplyToType, ThemeType } from '../types';
export type UseThemeSwitchType = {
    theme: ThemeType;
    setTheme: (x: ThemeType, fromLocalStorage?: boolean) => void;
};
export declare const useThemeSwitch: (applyTo?: ApplyToType, preferColorScheme?: boolean) => UseThemeSwitchType;
