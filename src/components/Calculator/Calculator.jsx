import { useState } from "react";
import styles from "./Calculator.module.css";
import Keyboard from "../Keyboard";
import Screen from "../Screen";
import { CalculatorProvider } from "../CalculatorContext";

function Calculator() {
    const [inputSequence, setInputSequence] = useState([]);
    const [output, setOutput] = useState("");

    function handleButtonClicked(value) {
        if (!output) {
            switch (value) {
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                case "+":
                case "-":
                case "*":
                case "/":
                case "0":
                case ".":
                    setInputSequence([...inputSequence, value]);
                    break;
                case "AC":
                    setInputSequence([]);
                    break;
                case "=":
                    setOutput(eval(inputSequence.join("")));
                    break;
                default:
                    break;
            }
        } else {
            switch (value) {
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    setInputSequence([value]);
                    setOutput("");
                    break;
                case "+":
                case "-":
                case "*":
                case "/":
                case "0":
                case ".":
                    setInputSequence([output, value]);
                    setOutput("");
                    break;
                default:
                    break;
            }
        }
    }

    const value = {
        inputSequence,
        output,
        onButtonClicked: handleButtonClicked
    };

    return (
        <CalculatorProvider value={value}>
            <div className={styles.main}>
                <h1 className={styles.title}>Calculator app</h1>

                <Screen />

                <Keyboard />
            </div>
        </CalculatorProvider>
    );
}

export default Calculator;
