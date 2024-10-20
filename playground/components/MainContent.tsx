import React, {ReactNode, useEffect, useState} from 'react';
import {
    Footer
} from "../components/ui/Footer/Footer";
import {
    socialLinks
} from '../data/socialLinks';
import HeaderWrapper from './HeaderWrapper';
import {inDevEnvironment} from '../utils/utils';

export type MainContentPropTypes = {
    pageNameClass: string,
    children: ReactNode
};

// eslint-disable-next-line react/display-name
const MainContent = (props: MainContentPropTypes) => {
    const {
        pageNameClass, children
    } = props;

    const [versionName, setVersionName] = useState<null | string>(null);

    useEffect(() => {
        try {
            fetch('./version.txt').then(r => r.text()).then(s =>  {
                try {
                    if (typeof s === "string" && s.indexOf('release-') !== -1 && s.length >= 20) {
                        setVersionName(s.replace('release-','').slice(0, 12));
                    } else {
                        setVersionName('dev');
                    }
                } catch (e) {
                    setVersionName('dev');
                }
            });
        } catch (e) {
            setVersionName('dev');
        }
    },[])

    return (
        <>
            <HeaderWrapper />
            <main className={"main-content-wrapper "+pageNameClass}>
                {children}
            </main>
            <Footer socialLinks={socialLinks} versionName={versionName} />
        </>
    );
};

export default MainContent;
