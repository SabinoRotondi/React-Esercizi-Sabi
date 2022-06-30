import { useCounter } from "./useCounter";

export const Counter = ({ initialValue = 0 }) => {
    const { counter, onIncrement, onDecrement, onReset } = useCounter(initialValue)

    return (
        <div>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>

            <h2>Counter: {counter}</h2>
        </div>
    )
}