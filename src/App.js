import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <>
      <Counter increment={2} initialValue={10} timeout={500}  />
    </>
  );
}

export default App;
