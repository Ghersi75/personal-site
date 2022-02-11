import React from "react";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";

export default function App() {
    return(
        <>
            <Navbar />
            <LandingPage />
            <AboutMe />
        </>
    );
}