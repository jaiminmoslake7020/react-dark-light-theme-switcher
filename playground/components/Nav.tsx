import React, {useCallback, useEffect} from 'react';
import {MenuLinkType} from '../types';

export type NavPropTypes = {
    showSidebar?: Function,
    menuLinks: MenuLinkType[]
};

const Nav = ({showSidebar, menuLinks}: NavPropTypes) => {
    const moveContent = useCallback((content:string) => {
        const item = document.querySelector('.section.section-'+content);
        if (item) {
            item.scrollIntoView({ behavior: 'smooth' });
            if (showSidebar) {
                showSidebar(false);
            }
        }
    }, [showSidebar])

    useEffect(() => {
        const handleWindowLoad = () => {
            const hash = window.location.hash.replaceAll("#", "");
            moveContent(hash);
        };

        // Add the event listener for window load
        window.addEventListener('load', handleWindowLoad);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('load', handleWindowLoad);
        };
    }, [moveContent]);

    return (
        <nav className={"nav nav-main"}>
            {
                menuLinks.map(({label, content, isOuterLink}) => <a key={label} href={content} className={"nav-link"}
                    onClick={(e) => {
                        if (!isOuterLink) {
                            e.preventDefault();
                            if (content) {
                                moveContent(content);
                            }
                        }
                    }}
                >{label}</a>)
            }
        </nav>
    );
}




export default Nav;
