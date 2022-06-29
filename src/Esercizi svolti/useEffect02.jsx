import React, { useEffect, useState } from 'react';

const ClickCounterSec = () => {
    const [counter, setCounter] = useState(0)
    const Counter = () => setInterval(() => {
        setCounter(counter + 1)
    }, 1000)
    useEffect(() => {
        console.log('Rendered')
        Counter();
        return () => {
            console.log('Clearing interval');
            clearInterval(Counter());
        }
    })
    return (
        <>
            <h1>Counter: {counter}</h1>
        </>
    )
}
export default ClickCounterSec