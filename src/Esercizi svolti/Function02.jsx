import React from 'react'

function Sum({num = [1, 2, 3] }) {
    const sum = num.reduce((a, b) => a + b)
  return (
    <h1>Sum: {sum}</h1>
  )
}

export default Sum