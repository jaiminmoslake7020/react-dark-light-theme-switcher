import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @media (prefers-color-scheme: dark) {
    :root {
      --color-bkg-theme-switch-container: 2 6 23;
      --color-content-theme-switch-container: 243 244 246;
    }
  }

  body[data-theme="dark"] {
    --color-bkg-theme-switch-container: 2 6 23;
    --color-content-theme-switch-container: 243 244 246;
  }

  :root {
    --color-bkg-theme-switch-container: 226 232 240;
    --color-content-theme-switch-container: 39 39 42;
  }

  body[data-theme="light"] {
    --color-bkg-theme-switch-container: 226 232 240;
    --color-content-theme-switch-container: 39 39 42;
  }
  
`;

interface DivProps {
    lightActive?: boolean;
    darkActive?: boolean;
}

interface IconWrapperProps {
    active: boolean;
}

// Define the styled component
export const ThemeSwitcherContainer = styled('div').withConfig({
    shouldForwardProp: (prop) => !['lightActive', 'darkActive'].includes(prop)
})<DivProps>`
  display: flex;
  width: -moz-fit-content;
  width: fit-content;
  gap: 0;
  border-radius: 9999px;
  padding: 0.25rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  position: relative;
  background-color: rgb(var(--color-content-theme-switch-container));
  color: rgb(var(--color-bkg-theme-switch-container));

  &:before{
    content: "";
    position: absolute;
    z-index: 0;
    height: 2.25rem;
    width: 3rem;
    border-radius: 9999px;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 1000ms;
    top: 0.25rem;
    left: 0;
    background-color: ${(props) => (props.lightActive ? 'rgb(96, 165, 250)' : 'rgb(30, 58, 138)')};
    transform: ${(props) => (props.lightActive ? 'translateX(0.25rem)' : 'translateX(3.25rem)')};
  }
`;


export const IconWrapper = styled('div').withConfig({
    shouldForwardProp: (prop) => !['active'].includes(prop)
})<IconWrapperProps>`
  z-index: 10;
  width: -moz-fit-content;
  width: fit-content;
  border-radius: 9999px;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  cursor: ${(props) => (props.active ? 'text' : 'pointer')};
`;


export const SunIconWrapper = styled(IconWrapper)`
  color: ${(props) => (props.active ? 'rgb(250, 204, 21)' : '')};
`;

export const MoonIconWrapper = styled(IconWrapper)`
  color: ${(props) => (props.active ? 'rgb(255, 255, 255)' : '')};
`;
