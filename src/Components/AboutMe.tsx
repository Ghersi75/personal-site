import React, { useState } from "react";
import "./AboutMe.css";

interface Props {
    ref?: React.RefObject<HTMLInputElement>
}

export default function AboutMe(props: Props) {
    const [isShown, setIsShown] = useState(false);

    const handleOnHover = () => {
        setIsShown(true);
    }

    const handleOffHover = () => {
        setIsShown(false);
    }

    return (
        <div className="about-me-wrapper" ref={props.ref}>
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