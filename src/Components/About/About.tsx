import React from "react";
import "./About.css";

interface Props {
    ref?: React.RefObject<HTMLInputElement>
}

export default function AboutMe(props: Props) {
    return (
        <div className="about-wrapper" ref={props.ref}>
            <div className="about-text-wrapper left">
                <div className="about-text left">
                    <h1 className="about-h1 left">About</h1>
                    <h2 className="about-h2 left">About myself</h2>
                    <p className="about-p left">My name is Ghersi, and I’m currently pursuing a Computer Science and Engineering major at the University of Connecticut with a focus on software design and engineering.</p>
                    <h2 className="about-h2 left">About experience</h2>
                    <p className="about-p left">Outside of school I enjoy learning new things on my own. The latest thing I’ve spent time learning is frontend web development with React. Another thing I’ve worked on is blockchain development, mainly the Ethereum blockchain and any Ethereum forks such as BSC. For blockchain development I used a variety of tools and languages such as Solidity to write smart contracts and Typescript for contract testing.</p>
                </div>
            </div>
            <div className="about-text-wrapper right">
                <div className="about-text right">
                    <h1 className="about-h1 right">Skills</h1>
                    <h2 className="about-h2 right">Typescript:</h2>
                    <p className="about-p right">Used Typescript for web development, solidity smart contract testing and some miscellaneous api based scripts.</p>
                    <h2 className="about-h2 right">Python:</h2>
                    <p className="about-p right">Used python for a variety of scripts and classwork, mainly data structures and algorithms and time complexity classwork.</p>
                    <h2 className="about-h2 right">Solidity:</h2>
                    <p className="about-p right">Wrote and deployed various ERC721 contracts and wrote ERC20 contracts.</p>
                    <h2 className="about-h2 right">Other skills:</h2>
                    <p className="about-p right">HTML, CSS, Git, Linux, Terminal, Mac.</p>
                </div>
            </div>
        </div>
    );
}