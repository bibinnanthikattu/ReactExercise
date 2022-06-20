import './App.css';
import InteractiveWelcome from './InteractiveWelcome';
import Login from './Login';
import UncontrolledLogin from './UncontrolledLogin';

function App() {
  let onLogin = (state) => {
    console.log(state)
  }
  return (
    <>
      {/* <InteractiveWelcome /> */}
      {/* <Login func={onLogin} /> */}
      <UncontrolledLogin />
              </>

  );
}

export default App;
