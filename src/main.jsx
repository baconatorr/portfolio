import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./fonts.css";
import "./index.css";
import App from "./App";
import About from "./About";
import AnimatedCursor from "react-animated-cursor";
import ProjectShowcase from "./Projects";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnimatedCursor />
    <App />
    <About />
    <ProjectShowcase />
  </StrictMode>
);
