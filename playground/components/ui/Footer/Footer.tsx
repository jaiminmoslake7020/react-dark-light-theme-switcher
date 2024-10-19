import React from 'react';
import { FaIcon } from '../FaIcon/FaIcon';
import './footer.scss';
import {SocialLinks, SocialLinkType} from '../SocialiLinks/SocialLinks';

export const WebsiteInfo = ({versionName}: {versionName?: string | null}) => {
    return <div className={"website-info"}>
        <p><span>Built with&nbsp;</span><FaIcon icon={"heart"} className={"icon-heart"} /><span>&nbsp;in Vancouver, BC.</span></p>
        {
            versionName && <div className={"version-wrapper"}><VersionInfo versionName={versionName} /></div>
        }
    </div>
}

export const VersionInfo = ({versionName}: {versionName: string}) => {
    return <div className={"website-info"}>
        <p>{versionName}</p>
    </div>
}

export type FooterPropTypes = {
    nav?: React.JSX.Element,
    socialLinks?: SocialLinkType[],
    versionName?: string | null
};

export const Footer = (props: FooterPropTypes) => {
    const { nav, socialLinks, versionName } = props;
    return (
        <footer className={"main-footer"}>
            <WebsiteInfo versionName={versionName} />
            <div className={"nav-wrapper-footer"}>
                {nav}
            </div>
            <div className={"social-media-links-wrapper-container"}>
                { socialLinks && <SocialLinks socialLinks={socialLinks} /> }
            </div>
        </footer>
    );
}

