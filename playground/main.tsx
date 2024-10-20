// Dependencies
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Local
import App from "./App";
import {
    ThemeSwitchProvider
} from "@lib/providers";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<StrictMode>
    <ThemeSwitchProvider applyTo={"body"} preferColorScheme={false} >
        <App />
    </ThemeSwitchProvider>
</StrictMode>);
