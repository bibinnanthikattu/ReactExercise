import './App.css';
import React from 'react';
import Welcome from './Welcome';
import Sum from './Sum';
import { Routes, Route, Link } from "react-router-dom";
import ClickCounter from './ClickCounter';

export default function App() {
  // const numbers = [10, 20, 30, 40, 50]

  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome name='React Router'/>}  />
          
        <Route path='/counter' element={<ClickCounter />} />
      </Routes>
      {/* <Sum /> */}
            </>

  );
}


