import React from "react";
import "./Navbar";
import "./LandingPage.css";
import LinkedIn from "../iconComponents/LinkedIn";
import Github from "../iconComponents/Github";

interface Props {
    ref?: React.RefObject<HTMLInputElement>
}

export default function LandingPage(props: Props) {
    return (
        <div className="hero-wrapper" ref={props.ref}>
            <div className="hero">
                <div className="hero-details-wrapper">
                    <h1 className="hero-details">Ghersi Doci</h1>
                    <p className="hero-details">CSE student at UConn</p>
                    <div className="hero-details icons"> 
                        <a href="https://github.com/Ghersi75" target="_blank" rel="noreferrer noopener"> <Github /> </a>
                        <a href="https://www.linkedin.com/in/ghersi-doci-695839211/" target="_blank" rel="noreferrer noopener"> <LinkedIn /> </a>
                    </div>
                </div>
            </div>
        </div>
    )
}