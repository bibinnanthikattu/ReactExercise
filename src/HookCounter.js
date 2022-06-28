import React from 'react'
import { useCount } from './useCount'

export default function HookCounter(initialValue) {
    const { counter, onIncrement, onDecrement, onReset } = useCount(initialValue);
  return (
      <div>
          <h1>The counter is : {counter}</h1>
          <button onClick={onIncrement}>Increment</button>
          <button onClick={onDecrement}>Decrement</button>
          <button onClick={onReset}>Reset</button>
    </div>
  )
}
