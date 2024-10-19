import React from "react";
import "./styles/output.css";
import {ThemeSwitcherBtnProviderChild} from '@lib/components';
import Example from './components/Example';
import MainContent from './components/MainContent';

const App = () => {
    return <main className={"App"}>
        <MainContent pageNameClass={"home-page"} >
            <div className="sections-wrapper min-h-[90dvh] ">
                <section className=" text-container text-one w-full flex justify-center ">
                    <ThemeSwitcherBtnProviderChild />
                </section>
                <section className={"w-full flex justify-center"}>
                    <Example />
                </section>
            </div>
        </MainContent>
    </main>
};

export default App;
