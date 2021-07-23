import React, { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>you clicked me {count} times !</p>
      <button onClick={() => setCount(count < 10 ? count + 1 : count + 10)}>
        click me
      </button>
    </div>
  )
}

export default Count
