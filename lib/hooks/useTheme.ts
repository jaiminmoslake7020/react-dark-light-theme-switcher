import React, {useCallback, useEffect, useState} from 'react';
import {ApplyToType, ThemeType} from '../types';

export type UseThemeType = {
    theme: ThemeType,
    setTheme: (x: ThemeType, fromLocalStorage?: boolean) => void
};

export const useTheme = ( applyTo : ApplyToType = undefined ) : UseThemeType => {

    const [theme, setThemeCall] = useState<ThemeType>('light');

    const setTheme = useCallback((x: ThemeType, fromLocalStorage: boolean = false) => {
        if (!fromLocalStorage) {
            localStorage.setItem('theme', x);
        }
        if (applyTo) {
            const getEl = document.querySelector(applyTo);
            if (getEl) {
                getEl.setAttribute('data-theme', x);
            }
        }
        setThemeCall(x);
    }, [])

    useEffect(() => {
        const mount = () => {
            if (window) {
                const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (prefersDarkScheme) {
                    const x = localStorage.getItem('theme');
                    if (x === 'light') {
                        setTheme('dark');
                    } else if (x === 'dark' ) {
                        setTheme(x, true);
                    }
                } else {
                    const x = localStorage.getItem('theme');
                    if (x === 'light' || x === 'dark') {
                        setTheme(x);
                    }
                }
            }
        }
        return mount();
    }, [setTheme]);

    return {
        theme, setTheme
    };
}
