import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <>
            <ul className="navbar">
                <li className="navbar underline">Home</li>
                <li className="navbar underline">About</li>
                <li className="navbar underline">Projects</li>
                <li className="navbar underline">Contact Me</li>
            </ul>
        </>
    );
}