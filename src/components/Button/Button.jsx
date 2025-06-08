import { useContext } from "react";
import styles from "./Button.module.css";
import { CalculatorContext } from "../CalculatorContext";

function Button({ area, children }) {
    const context = useContext(CalculatorContext);

    return (
        <button
            type="button"
            style={{ "--grid-area": area }}
            className={styles.button}
            onClick={() => {
                context.onButtonClicked(children);
            }}
        >
            {children}
        </button>
    );
}

export default Button;
