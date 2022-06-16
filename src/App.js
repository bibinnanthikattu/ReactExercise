import './App.css';

function App() {
  // const hello = "Hello, World !"
  // const printName = (name) => <h1>Hello, {name}</h1>
  let getSum = (a, b) => <h2>{a + b}</h2>
  return (
    <>
      {/* {printName("Jhon")} */}
      {getSum(10,20)}
    </>
  );
}

export default App;
