import React from 'react'
import { useState, useEffect } from 'react'

const ClickCounter = ({initialValue=0, change}) => {
    const [count, setCount] = useState(initialValue)
    const increment = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        change(count)
    }, [count, change])

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default ClickCounter