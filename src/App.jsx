import React, {useRef} from "react";
import Hero from "./Hero";
import About from "./About";
import ProjectShowcase from "./Projects";
import Toolset from "./Toolset";

export default function App() {
  const aboutRef = useRef(null);
  return <>
  <Hero scrollToAbout={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })} />
  <div ref={aboutRef}>
    <About/>
  </div>
  <ProjectShowcase />
  <Toolset />
  </>;
}
