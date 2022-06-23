import logo from './logo.svg';
import './App.css';
import Container from './Container';
import Children from './Children';

function App() {
  return (
    <>
      <Container title={<h1>This is the Header for the container component</h1>}>
        {<h3>This is an example for Component composition </h3>}
        <Children />
      </Container>
    </>
  );
}

export default App;
