import React from 'react';
import { SocialLinkType } from '../SocialiLinks/SocialLinks';
import { FaIcon } from '../FaIcon/FaIcon';
import {WebsiteInfo} from '../Footer/Footer';
import './sidebar.scss'
import { SocialLinks } from '../SocialiLinks/SocialLinks';
import {Button} from '../Button/Button';

export type SidebarPropTypes = {
    sidebar: boolean,
    showSidebar: Function,
    nav: React.JSX.Element,
    socialLinks?: SocialLinkType[]
};

export const Sidebar = (props: SidebarPropTypes) => {
    const {
        sidebar,
        showSidebar,
        nav,
        socialLinks
    } = props;
    return (
        <aside className={`sidebar ${sidebar ? 'open' : ''} `}>
            <div className={"sidebar-control-wrapper"}>
                <Button type={"button"} className={"btn sidebar-closer"}
                    onClick={() => {
                        showSidebar(false);
                    }}
                    round
                >
                    <FaIcon icon={"close"} />
                </Button>
            </div>
            {nav}
            { socialLinks && <SocialLinks socialLinks={socialLinks} /> }
            <WebsiteInfo />
        </aside>
    );
}
