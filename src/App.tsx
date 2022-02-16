import React, { useRef } from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import ProjectsPage from "./Components/ProjectsPage";

export default function App() {
    const pageRefs = useRef({
        home: useRef<HTMLLIElement>(null),
        about: useRef<HTMLLIElement>(null),
        projects: useRef<HTMLLIElement>(null),
        contact: useRef<HTMLLIElement>(null)
    });

    return(
        <>
            <Navbar />
            <LandingPage />
            {/* <Link to="/snapshot">snapshot</Link> */}
            <About />
            <ProjectsPage />
        </>
    );
}