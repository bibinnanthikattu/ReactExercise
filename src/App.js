import logo from './logo.svg';
import './App.css';
import FilteredList from './FilteredList';

function App() {
  const persons = [
    {
      id: 1,
      name: 'Jhon',
      age:20
    },
    {
      id: 2,
      name: 'Mathew',
      age:25
    },
    {
      id: 3,
      name: 'Don',
      age:15
    },
    {
      id: 4,
      name: 'Manu',
      age:18
    },
    {
      id: 5,
      name: 'jose',
      age:40
    }
  ]
  return (
    <>
    <FilteredList list={persons} />
    </>
  );
}

export default App;
