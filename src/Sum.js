import React from 'react'

export default function Sum({props=20}) {
    // let sum = props.numbers.reduce((num1,num2)=>num1+num2)
  return (
      <div>
          <h1>Sum of the given values is : {props}</h1>

    </div>
  )
}
