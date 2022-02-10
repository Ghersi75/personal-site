import React from "react";
import "./Navbar.css";

export default function Navbar() {
    return (
        <>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about-me">About me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact-me">Contact Me</a></li>
            </ul>
        </>
    );
}