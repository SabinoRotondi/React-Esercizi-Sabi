import React from 'react'
import { useState } from 'react'

const ClickCounter = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  return (
    <div>
     <h1>Counter: {count}</h1> 
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default ClickCounter