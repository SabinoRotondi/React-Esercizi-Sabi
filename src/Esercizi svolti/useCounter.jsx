import { useState } from "react";

export const useCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue)
    function handleCounterIncrement() {
        setCounter(counter => counter + 1)
    }
    function handleCounterDecrement() {
        setCounter(counter => counter - 1)
    }
    function handleCounterReset() {
        setCounter(initialValue)
    }
    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset
    }
}