import './App.css';

function App() {
  // const hello = "Hello, World !"
  const printName = (name) => <h1>Hello, {name}</h1>
  return (
    <>
    {printName("Jhon")}
    </>
  );
}

export default App;
