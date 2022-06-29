import React from 'react'
import { useState,useCallback } from 'react'

export function useCount({ initialValue = 0 }) {
    const [counter, setCounter] = useState(initialValue);

    const handleCounterIncrement= useCallback(
       function handleCounterIncrement  ()  {
            setCounter((state) => state + 1)
        },[]
    ) 

    const handleCounterDecrement = useCallback(
         function handleCounterDecrement () {
            setCounter((state) => state - 1)
        },[]

    ) 
    const handleCounterReset = useCallback(
        function handleCounterReset ()  {
            setCounter(initialValue)
        },[initialValue]
        ) 

  return (
      {
          counter: counter,
          onIncrement: handleCounterIncrement,
          onDecrement: handleCounterDecrement,
          onReset:handleCounterReset
    }
  )
}
