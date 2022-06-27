import './App.css';

import Login from './Login';


function App() {
  let onLogin = (state) => {
    console.log(state)
  }
  return (
    <>

      <Login func={onLogin} />
              </>


  );
}

export default App;
