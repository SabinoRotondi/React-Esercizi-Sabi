import { useCallback, useState } from "react";

export const useCallbackCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue)
    const handleCounterIncrement = useCallback(() => {
        setCounter((counter) => counter + 1)
    }, []);
    const handleCounterDecrement = useCallback(() => {
        setCounter((counter) => counter - 1)
    }, []);
    const handleCounterReset = useCallback(() => {
        setCounter(initialValue)
    }, [initialValue])
    return {
        counter: counter,
        onIncrement: handleCounterIncrement,
        onDecrement: handleCounterDecrement,
        onReset: handleCounterReset
    }
}