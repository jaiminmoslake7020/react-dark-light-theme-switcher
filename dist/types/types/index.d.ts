export type ThemeType = "light" | "dark";
export type ElWithClassType = `.${string}`;
export type ElWithIdType = `#${string}`;
export type ApplyToType = 'html' | 'body' | keyof HTMLElementTagNameMap | ElWithClassType | ElWithIdType | undefined;
