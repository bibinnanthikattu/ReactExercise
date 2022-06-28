import React from 'react'
import { useState } from 'react'

export function useCount({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue);
    const handleCounterIncrement = () => {
        setCounter((state) => state + 1)
    };
    const handleCounterDecrement = () => {
        setCounter((state) => state - 1)
    };
    const handleCounterReset = () => {
        setCounter(initialValue)
    }

  return (
      {
          counter: counter,
          onIncrement: handleCounterIncrement,
          onDecrement: handleCounterDecrement,
          onReset:handleCounterReset
    }
  )
}
