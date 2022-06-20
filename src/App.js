import './App.css';
import InteractiveWelcome from './InteractiveWelcome';
import Login from './Login';

function App() {
  let onLogin = (state) => {
    console.log(state)
  }
  return (
    <>
      {/* <InteractiveWelcome /> */}
      <Login func={onLogin} />
              </>

  );
}

export default App;
