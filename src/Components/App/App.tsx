import React, { useRef } from "react";
import "./App.css";
import LandingPage from "../LandingPage/LandingPage";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import Projects from "../Projects/Projects";

export default function App() {
    // const pageRefs = useRef({
    //     home: useRef<HTMLLIElement>(null),
    //     about: useRef<HTMLLIElement>(null),
    //     projects: useRef<HTMLLIElement>(null),
    //     contact: useRef<HTMLLIElement>(null)
    // });

    return(
        <>
            <Navbar />
            <LandingPage />
            <About />
            <Projects />
        </>
    );
}