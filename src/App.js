import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'

function App() {
  return (
    <>
      <TodoList
        render={(state,removeFunc) => {
          const lists = state.map((item, index) => (
            <li key={item + index}>{item} <button onClick={()=>removeFunc(index)}>Remove</button> </li>
          ));
          return lists;
        }}
      >

      </TodoList>
    </>
  );
}

export default App;
