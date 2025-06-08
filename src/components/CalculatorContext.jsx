import { createContext } from "react";

const CalculatorContext = createContext();

function CalculatorProvider({ value, children }) {
    return (
        <CalculatorContext.Provider value={value}>
            {children}
        </CalculatorContext.Provider>
    );
}

export { CalculatorProvider, CalculatorContext };
