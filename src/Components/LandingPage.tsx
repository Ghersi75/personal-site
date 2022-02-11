import React, { useState, useEffect } from "react";
import "./Navbar";
import Navbar from "./Navbar";
import "./LandingPage.css";

export default function LandingPage() {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        // Add listener for resizing
        window.addEventListener("resize", handleResize);

        // Clean up once unmounted
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="wrapper">
            <div className="hero"><h1>Width: {width}</h1></div>
        </div>
    )
}