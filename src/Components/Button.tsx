import React, { useState } from "react";

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
            <p>Count {count}</p>
            <button onClick={handleIncreaseButton}>+1</button>
            <button onClick={handleDecreaseButton}>-1</button>
        </div>
    );
}