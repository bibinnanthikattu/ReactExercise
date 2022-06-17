import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <>
      <Counter increment={1} initialValue={0} timeout={1000}  />
    </>
  );
}

export default App;
