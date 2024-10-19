import React, {useState} from 'react';
import { FaIcon } from '../FaIcon/FaIcon';
import { Sidebar } from '../Sidebar/Sidebar';
import './header.scss';


export type HeaderPropTypes = {
    nav: React.JSX.Element,
};

export const Header = (props: HeaderPropTypes) => {
    const {
        nav
    } = props;

    const [sidebar, showSidebar] = useState<boolean>(false);

    return (
        <>
            <header className={"main-header"} >
                <div className={"nav-wrapper"}>
                    {nav}
                </div>
                <button type={"button"} className={"btn sidebar-opener"}
                    onClick={() => {
                        showSidebar(true);
                    }}
                >
                    <FaIcon icon={"bars"} />
                </button>
            </header>
            <Sidebar sidebar={sidebar} showSidebar={showSidebar} nav={nav} />
        </>
    );
}

