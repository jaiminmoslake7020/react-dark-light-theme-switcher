import React from "react";
import "./output.css";
import {ThemeSwitcherBtnProviderChild} from '@lib/components';
import Example from './components/Example';

const App = () => {
    return <main className={"App"}>
        <div className="sections-wrapper">
            <section className=" text-container text-one w-full flex justify-center ">
                <ThemeSwitcherBtnProviderChild />
            </section>
            <section className={"w-full flex justify-center"}>
                <Example />
            </section>
        </div>
    </main>
};

export default App;
