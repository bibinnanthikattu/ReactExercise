import './App.css';

import ClickCounter from './ClickCounter';

import Login from './Login';


import Counter from './Counter';
import { useState } from 'react';


function App() {

  const [mount,setMount]=useState(true)
  let onLogin = (state) => {
    console.log(state)
  }
  const onCounterChange = (counter) => {
    console.log(`the counter is : ${counter}`);
  }
  const handleToggleCounter= ()=>setMount(state=>!state)
  return (
    <>


      {/* <Login func={onLogin} /> */}
      {/* <ClickCounter onCounterChange={onCounterChange} /> */}

      <button onClick={handleToggleCounter}>Toggle Counter</button>
     {mount && <Counter increment={1} initialValue={0} timeout={1000}  />} 
    </>

  );
}

export default App;
