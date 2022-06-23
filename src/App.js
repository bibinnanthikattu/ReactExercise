import logo from './logo.svg';
import './App.css';
import Container from './Container';
import Children from './Children';

function App() {
  return (
    <>
      <Container>
        {<h1>This is an example for Component composition </h1>}
        <Children />
      </Container>
    </>
  );
}

export default App;
