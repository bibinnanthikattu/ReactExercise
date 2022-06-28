import React, {useState,useEffect} from 'react'

export default function Counter({ increment, initialValue, timeout }) {
  const [counter, seCounter] = useState(initialValue)
  


  // It is unmounting everytime as the set interval runs, not when the component is unmounting.

//   useEffect(() => {
//     console.log("the component ahve mounted");
//     const interval= setInterval(() => {
//       seCounter(counter + 1)
//     }, 1000);
//     return () => {
//       console.log("The component is about to be unmounted");
//       return clearInterval(interval)
// }
//   });
//   useEffect(() => {
//     console.log("the component have mounted");
//     setInterval(() => {
//       seCounter(counter + increment)
//     }, timeout);
//     return () => {
//       console.log("The component is about to be unmounted");
//       return clearInterval(initialValue)
// }
//   },[initialValue,increment,timeout,counter]);
  




    return (
      <div>
        <h2>The counnter is : {counter}</h2>
      </div>
    )
  }

