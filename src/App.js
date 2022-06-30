import './App.css';
import React from 'react';
import Welcome from './Welcome';
import Sum from './Sum';
import { Routes, Route, Link } from "react-router-dom";
import ClickCounter from './ClickCounter';
import ShowGithubUser from './ShowGithubUser';

export default function App() {
  // const numbers = [10, 20, 30, 40, 50]

  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome name='React Router'/>}  />
          <Route path='users/:username' element={<ShowGithubUser />} />
        <Route path='/counter' element={<ClickCounter />} />
      </Routes>
      {/* <Sum /> */}
            </>

// import ClickCounter from './ClickCounter';

// import Login from './Login';


// import Counter from './Counter';
// import { useState } from 'react';
// import GithubUser from './GithubUser';
// import GithubUserList from './GithubUserList';


// function App() {

//   const [mount,setMount]=useState(true)
//   let onLogin = (state) => {
//     console.log(state)
//   }
//   const onCounterChange = (counter) => {
//     console.log(`the counter is : ${counter}`);
//   }
//   const handleToggleCounter= ()=>setMount(state=>!state)
//   return (
//     <>


//       {/* <Login func={onLogin} /> */}
//       {/* <ClickCounter onCounterChange={onCounterChange} /> */}

//       {/* <button onClick={handleToggleCounter}>Toggle Counter</button>
//      {mount && <Counter increment={1} initialValue={0} timeout={1000}  />}  */}
//       {/* <GithubUser  /> */}
//       <GithubUserList />
//     </>
// >>>>>>> useEffect

  );
}


