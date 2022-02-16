import React, { useState, FormEvent } from "react";
import "./Snapshot.css";

export default function Snapshot() {
    const [addr, setAddr] = useState("");


    const handleSubmit = ( e: FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        console.log(addr);
    }

    return (
        <>
            {/* <Navbar /> */}
            <div className="snapshot-wrapper">
                <form className="snapshot" onSubmit={handleSubmit}>
                    <label className="snapshot" htmlFor="address">Enter contract address: </label>
                    <input className="snapshot input" type="text" name="name" id="address" placeholder="nice" value={addr} onChange={e => setAddr(e.target.value)}/>
                    <input className="snapshot submit" type="submit" value="Submit"/>
                </form>
                {addr && <p className="snapshot">entered: {addr}</p>}
            </div>
        </>
        
    )
}