import { useCallbackCounter } from "./useCallback";

export const Counter = ({ initialValue = 0 }) => {
    const { counter, onIncrement, onDecrement, onReset } = useCallbackCounter(initialValue)

    return (
        <div>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>

            <h2>Counter: {counter}</h2>
        </div>
    )
}