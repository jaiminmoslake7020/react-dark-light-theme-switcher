import React, {useContext, useEffect, useState} from 'react';
import {TypingText} from '@jaiminmoslake7020/react-typing-text';
import {ThemeContext} from '@lib/providers';

const Example = () => {
    const { theme } = useContext(ThemeContext);
    const [text, setText] = useState<string>('');

    useEffect(() => {
        const mount = () => {
            setText("");
            setTimeout(() => {
                setText(theme.toUpperCase());
            }, 300);
        }
        return mount();
    }, [theme])

    return (
        text === "" ? <></> : <TypingText text={text} duration={500} className={"theme-text "+theme} noCursor={true} eachCharAsSpan />
    );
}

export default Example;
