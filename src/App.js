import './App.css';
import ClickCounter from './ClickCounter';

import Login from './Login';


function App() {
  let onLogin = (state) => {
    console.log(state)
  }
  const onCounterChange = (counter) => {
    console.log(`the counter is : ${counter}`);
  }
  return (
    <>

      {/* <Login func={onLogin} /> */}
      <ClickCounter onCounterChange={onCounterChange} />
              </>


  );
}

export default App;
