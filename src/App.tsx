import React from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import ProjectsPage from "./Components/ProjectsPage";

export default function App() {
    return(
        <>
            <Navbar />
            <LandingPage />
            <AboutMe />
            <ProjectsPage />
        </>
    );
}