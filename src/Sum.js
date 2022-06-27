import React from 'react'

export default function Sum(props) {
    let sum = props.numbers.reduce((num1,num2)=>num1+num2)
  return (
      <div>
          <h1>Sum of the given values is : {sum}</h1>

    </div>
  )
}
