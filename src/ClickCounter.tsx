import { useState } from "react";
import styles from "./ClickCounter.module.css";

export function ClickCounter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div className={styles["counter-container"]}>
            <p>You have clicked the button {count} times.</p>
            <p>Here we another reference to the counter: {count}</p>
            <button className={styles["counter-button"]} onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}
