import React, {useContext} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ThemeSwitchContext } from './../../providers';
import {ThemeType} from './../../types';
import {
    ThemeSwitcherContainer,
    SunIconWrapper,
    MoonIconWrapper,
    GlobalStyles
} from './ThemeSwitcherDiv';


export type ThemeSwitcherBtnPropTypes = {
    theme: "light" | "dark",
    setTheme: (s: ThemeType) => void,
    themeSwitcherContainerClassName ?: string,
    iconWrapperClassName ?: string,
    sunIconWrapperClassName ?: string,
    moonIconWrapperClassName ?: string,
};

export const ThemeSwitcherBtn = (props: ThemeSwitcherBtnPropTypes) => {
    const { theme, setTheme, themeSwitcherContainerClassName, iconWrapperClassName, sunIconWrapperClassName, moonIconWrapperClassName } = props;
    const p = theme === "light";
    return (
        <>
            <GlobalStyles />
            <ThemeSwitcherContainer lightActive={p} darkActive={!p} className={`theme-switcher-container ${p ? 'light-active' : 'dark-active'} ${themeSwitcherContainerClassName || ""} `} >
                <SunIconWrapper active={p} role={"button"} className={` icon-wrapper sun-wrapper  ${p ? 'active' : ''} ${iconWrapperClassName || ""} ${sunIconWrapperClassName || ""} `} onClick={() => {
                    setTheme("light");
                }} >
                    <FontAwesomeIcon icon={faSun} />
                </SunIconWrapper>
                <MoonIconWrapper active={!p} role={"button"} className={` icon-wrapper moon-wrapper ${p ? '' : 'active'} ${iconWrapperClassName || ""} ${moonIconWrapperClassName || ""} `} onClick={() => {
                    setTheme("dark");
                }}>
                    <FontAwesomeIcon icon={faMoon} />
                </MoonIconWrapper>
            </ThemeSwitcherContainer>
        </>
    );
}

export type ThemeSwitcherBtnProviderChildPropTypes = {
    themeSwitcherContainerClassName ?: string,
    iconWrapperClassName ?: string,
    sunIconWrapperClassName ?: string,
    moonIconWrapperClassName ?: string,
};

export const ThemeSwitcherBtnProviderChild = (props: ThemeSwitcherBtnProviderChildPropTypes) => {
    const {
        themeSwitcherContainerClassName, iconWrapperClassName, sunIconWrapperClassName, moonIconWrapperClassName
    } = props;
    const { theme, setTheme } = useContext(ThemeSwitchContext);
    return (
        <ThemeSwitcherBtn theme={theme} setTheme={setTheme} themeSwitcherContainerClassName={themeSwitcherContainerClassName} iconWrapperClassName={iconWrapperClassName} sunIconWrapperClassName={sunIconWrapperClassName} moonIconWrapperClassName={moonIconWrapperClassName} />
    );
}
