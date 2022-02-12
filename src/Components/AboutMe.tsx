import React, { useState } from "react";
import "./AboutMe.css";

export default function AboutMe() {
    const [isShown, setIsShown] = useState(false);

    const handleOnHover = () => {
        setIsShown(true);
    }

    const handleOffHover = () => {
        setIsShown(false);
    }

    return (
        <div className="about-me-wrapper">
            <div className="grid-item one" onMouseEnter={handleOnHover} onMouseLeave={handleOffHover}>
                1
                {isShown && <div><button> Live demo </button> <button> Source Code </button></div>}
            </div>
            <div className="grid-item two">
                2
            </div>
        </div>
    );
}