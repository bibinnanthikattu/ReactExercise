import './App.css';
import HookCounter from './HookCounter';
import HookForm from './HookForm';

import ClickCounter from './ClickCounter';

import Login from './Login';


import Counter from './Counter';
import { useState } from 'react';
import GithubUser from './GithubUser';
import GithubUserList from './GithubUserList';


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

      {/* <HookCounter initialValue={10} /> */}
      {/* <HookForm /> */}
  

      {/* <Login func={onLogin} /> */}
      {/* <ClickCounter onCounterChange={onCounterChange} /> */}

      {/* <button onClick={handleToggleCounter}>Toggle Counter</button>
     {mount && <Counter increment={1} initialValue={0} timeout={1000}  />}  */}
      <GithubUser username='bibinnanthikattu' />
      {/* <GithubUserList /> */}
    </>
  );
}

export default App;
