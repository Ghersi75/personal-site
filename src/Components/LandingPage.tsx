import React, { useState, useEffect } from "react";
import "./Navbar";
import "./LandingPage.css";
import LinkedIn from "../iconComponents/LinkedIn";
import Github from "../iconComponents/Github";

export default function LandingPage() {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
        console.log(width);
    }

    useEffect(() => {
        // Add listener for resizing
        window.addEventListener("resize", handleResize);

        // Clean up once unmounted
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="hero-wrapper">
            <div className="hero">
                <div className="hero-details-wrapper">
                    <h1 className="hero-details">Ghersi Doci</h1>
                    <p className="hero-details">CSE student at UConn</p>
                    <div className="hero-details icons"> 
                        <a href="https://github.com/Ghersi75" target="_blank" rel=""> <Github /> </a>
                        <a href="https://www.linkedin.com/in/ghersi-doci-695839211/" target="_blank" rel=""> <LinkedIn /> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}