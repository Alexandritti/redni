import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/montserrat/cyrillic-500.css";
import "@fontsource/montserrat/cyrillic-700.css";
import "@fontsource/montserrat/cyrillic-800.css";
import "@fontsource/montserrat/latin-500.css";
import "@fontsource/montserrat/latin-700.css";
import "@fontsource/montserrat/latin-800.css";
import "@fontsource/marck-script/cyrillic-400.css";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
