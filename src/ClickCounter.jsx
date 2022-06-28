import React, {useState,useEffect } from 'react'

export default function ClickCounter({onCounterChange}) {
  const [counter, setCounter] = useState(0)
 useEffect(()=>onCounterChange(counter),[counter,onCounterChange])
 
  const incrimentByClick = () => (setCounter(counter + 1))
  
 
    return (
        <div>
            <button onClick={incrimentByClick}>Click Me</button>
            <p>You have pressed the button { 
          counter} times.</p>
        
      </div>
    )
  }

