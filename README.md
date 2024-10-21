# React Component Package

This package includes React components which can be used to add "light" and "dark" theme to your web application. CSS
used in website example project is built with Tailwind seperately.

### Website

[https://react-dark-light-theme-switcher.netlify.app/](https://react-dark-light-theme-switcher.netlify.app/)

## Installation

```bash
npm install @jaiminmoslake7020/react-dark-light-theme-switcher
```

## How to use it

Use it with the provider, which will apply either [theme="dark"] or [theme="light"] to the applyTo selector. In the
example below, a button will appear, allowing the user to change the theme, which will be applied to the body.
preferColorScheme when true retrieves the color scheme from the system. And false then saves it to localStorage.

```jsx
<ThemeSwitchProvider applyTo={"body"} preferColorScheme={false}>
  ...
  <ThemeSwitcherBtnProviderChild/>
</ThemeSwitchProvider>
```

or just use button and apply it by yourself.

```jsx
<ThemeSwitcherBtn theme={theme}
                  setTheme={setTheme}
                  themeSwitcherContainerClassName={themeSwitcherContainerClassName}
                  iconWrapperClassName={iconWrapperClassName}
                  sunIconWrapperClassName={sunIconWrapperClassName}
                  moonIconWrapperClassName={moonIconWrapperClassName}/>
```

or hook with **ThemeSwitcherBtn** component,

```typescript
const applyTo = 'body';
const preferColorScheme = true; // boolean
const {theme, setTheme} = useThemeSwitch(applyTo, preferColorScheme);
```

## Component Properties

### ThemeSwitcherBtn

| Properties                       | Type               | Values              | Default |
|----------------------------------|--------------------|---------------------|---------|
| theme                            | 'light'  \| 'dark' | 'light', 'dark'     | 'light' |                                                 
| setTheme                         | Function           |                     |         |
| themeSwitcherContainerClassName? | string             | "any-styling-class" |         |
| iconWrapperClassName?            | string             | "any-styling-class" |         |
| sunIconWrapperClassName?         | string             | "any-styling-class" |         |
| moonIconWrapperClassName?        | string             | "any-styling-class" |         |

### ThemeSwitcherBtnProviderChild

| Properties                       | Type   | Values              | Default |
|----------------------------------|--------|---------------------|---------|
| themeSwitcherContainerClassName? | string | "any-styling-class" |         |
| iconWrapperClassName?            | string | "any-styling-class" |         |
| sunIconWrapperClassName?         | string | "any-styling-class" |         |
| moonIconWrapperClassName?        | string | "any-styling-class" |         |

```typescript
export type ElWithClassType = `.${string}`;
export type ElWithIdType = `#${string}`;
export type ApplyToType = 'html' | 'body' | keyof HTMLElementTagNameMap | ElWithClassType | ElWithIdType;
```

### ThemeSwitchProvider

| Properties         | Type            | Values                                         | Default   |
|--------------------|-----------------|------------------------------------------------|-----------|
| applyTo            | ApplyToType     | 'html' \| 'body' \| "any-class-or-id-selector" | 'body'    |
| preferColorScheme? | boolean         | true, false                                    | undefined |
| children           | React.ReactNode |                                                |           |

When preferColorScheme is undefined, it uses browser's "localStorage" API.
