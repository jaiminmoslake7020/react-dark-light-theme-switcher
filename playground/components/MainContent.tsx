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
        if (!inDevEnvironment) {
            try {
                fetch('./version.txt').then(r => r.text()).then(s =>  {
                    try {
                        if (typeof s === "string" && s.indexOf('author-release-') !== -1 && s.length >= 20) {
                            setVersionName(s.replace('author-release-','').slice(0, 12));
                        } else {
                            setVersionName('bx-0.0.1');
                        }
                    } catch (e) {
                        setVersionName('cx-0.0.1');
                    }
                });
            } catch (e) {
                setVersionName('dx-0.0.1');
            }
        } else {
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
