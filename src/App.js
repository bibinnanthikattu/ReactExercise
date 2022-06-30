import './App.css';
import React from 'react';
import Welcome from './Welcome';
import Sum from './Sum';
import { Routes, Route, Link } from "react-router-dom";
import ClickCounter from './ClickCounter';
import ShowGithubUser from './ShowGithubUser';
import Link1 from './LinkOne';
import Link2 from './Link2';
import NotFound from './NotFound';

export default function App() {
  // const numbers = [10, 20, 30, 40, 50]

  return (
    <>

        <h6><Link to='/LinkOne'>Link one</Link></h6> 
        <h6><Link to='/Link2'>Link two</Link></h6> 
        <h6><Link to="/Link3">Link three</Link></h6> 
      <Routes>
        <Route path='/' element={<Welcome name='React Router'/>}  />
          <Route path='users/:username' element={<ShowGithubUser />} />
        <Route path='/counter' element={<ClickCounter />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* <Sum /> */}
      {/* <Link1 /> */}
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


