import './App.css';
import HookCounter from './HookCounter';
import HookForm from './HookForm';

import ClickCounter from './ClickCounter';

import Login from './Login';


import Counter from './Counter';
import { useState } from 'react';
import GithubUser from './GithubUser';
import GithubUserList from './GithubUserList';
import { Routes, Route, Link } from "react-router-dom";

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
      {/* <Routes >
        <Route to='/users' element={<GithubUser username='bibinnanthikattu' />}/>
      </Routes> */}
<GithubUser username='bibinnanthikattu' />
      
    </>
  );
}

export default App;
