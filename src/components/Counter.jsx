import React, { useState } from 'react'

export default function Counter() {
 
    const [counter, setCounter] = useState(0)

    const incrementfun = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }
  return (
     <div className="testBtn">

        <br /><br />
        <h1>Current counter {counter}</h1>
        <button onClick={incrementfun}>
            Incrment
        </button>


        <button onClick={decrement}>
            Decrement
        </button>
     </div>
  )
}
