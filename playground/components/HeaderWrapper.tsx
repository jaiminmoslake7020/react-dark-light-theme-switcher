import React from 'react';
import {menuLinksHeader} from '../data/menuLinksHeader';
import Nav from './Nav';
import {Header} from './ui/Header/Header';

const HeaderWrapper = () => {
    return (
        <Header
            nav={<Nav menuLinks={menuLinksHeader} /> }
        />
    );
}

export default HeaderWrapper;
