import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <>
            <ul className="navbar">
                <li><a href="/" className="underline">Home</a></li>
                <li><a href="#about-me" className="underline">About me</a></li>
                <li><a href="#projects" className="underline">Projects</a></li>
                <li><a href="#contact-me" className="underline">Contact Me</a></li>
            </ul>
        </>
    );
}