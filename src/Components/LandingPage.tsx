import React, { useState, useEffect } from "react";
import "./Navbar";
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
        <div className="hero-wrapper">
            <div className="hero">
                <div className="hero-details-wrapper">
                    <h1 className="hero-details">Ghersi Doci</h1>
                    <p className="hero-details">CSE major at UConn</p>
                    <ul className="hero-details hero-icons">
                        <li>Github</li>
                        <li>LinkedIn</li>
                        <li>Email</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}