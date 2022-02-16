import React from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import ProjectsPage from "./Components/ProjectsPage";
import { Link } from "react-router-dom";

export default function App() {
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