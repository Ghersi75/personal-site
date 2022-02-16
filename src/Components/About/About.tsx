import React from "react";
import "./About.css";

interface Props {
    ref?: React.RefObject<HTMLInputElement>
}

export default function AboutMe(props: Props) {
    return (
        <div className="about-wrapper" ref={props.ref}>
            <div className="about-text-wrapper left">
                <div className="about-text">
                    1
                </div>
            </div>
            <div className="about-text-wrapper right">
                <div className="about-text">
                    2
                </div>
            </div>
        </div>
    );
}