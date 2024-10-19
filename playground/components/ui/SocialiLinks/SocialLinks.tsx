import React from 'react';
import { FaIcon } from '../FaIcon/FaIcon';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import './styles.scss';

export type SocialLinkType = {
    label: string,
    link: string,
    icon: IconProp,
    iconSolid?: boolean
}

export type SocialLinksPropTypes = {
    socialLinks: SocialLinkType[]
};

export const SocialLinks = (props: SocialLinksPropTypes) => {

    const {
        socialLinks
    } = props;

    return (
        <nav className={"social-media-links-wrapper"} >
            {
                socialLinks.map(({label, link, icon, iconSolid}) => <a className={"social-link group"} rel="noreferrer" key={label}  aria-label={label} target={"_blank"}
                    href={link}
                >
                    <FaIcon icon={iconSolid ? icon : ["fab", icon] as IconProp} />
                </a>)
            }
        </nav>
    );
}
