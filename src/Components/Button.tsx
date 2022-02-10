import React, { useState } from "react";
import "./Button.css";

export default function Button(props) {
    const [count, setCount] = useState(0);

    const handleIncreaseButton = () => {
        setCount(count + 1);
    }

    const handleDecreaseButton = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return(
        <div>
            <h1>Count {count}</h1>
            <button onClick={handleIncreaseButton}>+1</button>
            <button onClick={handleDecreaseButton}>-1</button>
        </div>
    );
}