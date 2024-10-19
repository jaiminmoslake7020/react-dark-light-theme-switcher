// Dependencies
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Local
import App from "./App";
import {
    ThemeProvider
} from "@lib/providers";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<StrictMode>
    <ThemeProvider applyTo={"body"}>
        <App />
    </ThemeProvider>
</StrictMode>);
