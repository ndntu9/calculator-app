import { useContext } from "react";
import styles from "./Screen.module.css";
import { CalculatorContext } from "../CalculatorContext";

function Screen() {
    const context = useContext(CalculatorContext);

    return (
        <div className={styles.screen}>
            <div className={styles.fomular}>
                {context.inputSequence.join(" ")}
            </div>
            <div className={styles.output}>{context.output}</div>
        </div>
    );
}

export default Screen;
