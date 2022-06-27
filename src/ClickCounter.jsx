import React, {useState } from 'react'

export default function ClickCounter() {
  const [counter,setCounter]=useState(0)
 
   const incrimentByClick =()=>(setCounter(counter +1))

    return (
        <div>
            <button onClick={incrimentByClick}>Click Me</button>
            <p>You have pressed the button { 
            counter} times.</p>
      </div>
    )
  }

