import React, {useRef} from "react";
import Hero from "./Hero";
import About from "./About";
import ProjectShowcase from "./Projects";

export default function App() {
  const aboutRef = useRef(null);
  return <>
  <Hero scrollToAbout={() => aboutRef.current?.scrollIntoView({ behavior: 'smooth' })} />
  <div className="z-[-1]"ref={aboutRef}>
    <About/>
  </div>
  <ProjectShowcase />
  </>;
}
