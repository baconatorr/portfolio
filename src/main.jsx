import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./fonts.css";
import "./index.css";
import App from "./App";

import AnimatedCursor from "react-animated-cursor";
import AudioButton from "./AudioButton";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnimatedCursor />
    <AudioButton />
    <App />
  </StrictMode>
);
