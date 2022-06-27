import './App.css';
import React from 'react';
import Welcome from './Welcome';
import Sum from './Sum';

export default function App() {
  const numbers = [10, 20, 30, 40, 50]

  return (
    <>
      {/* <Welcome  />    */}
      <Sum numbers={numbers}/>
            </>
  );
}


