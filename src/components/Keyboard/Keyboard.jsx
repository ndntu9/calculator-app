import Button from "../Button";
import styles from "./Keyboard.module.css";

function Keyboard() {
    return (
        <div className={styles.keyboard}>
            <Button area="ac">AC</Button>
            <Button area="percent">/</Button>
            <Button area="multiply">*</Button>
            <Button area="seven">7</Button>
            <Button area="eight">8</Button>
            <Button area="nine">9</Button>
            <Button area="subtract">-</Button>
            <Button area="four">4</Button>
            <Button area="five">5</Button>
            <Button area="six">6</Button>
            <Button area="add">+</Button>
            <Button area="one">1</Button>
            <Button area="two">2</Button>
            <Button area="three">3</Button>
            <Button area="zero">0</Button>
            <Button area="dot">.</Button>
            <Button area="equal">=</Button>
        </div>
    );
}

export default Keyboard;
