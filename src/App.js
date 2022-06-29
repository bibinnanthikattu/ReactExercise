import './App.css';
import HookCounter from './HookCounter';


function App() {

  // const [mount,setMount]=useState(true)
  // let onLogin = (state) => {
  //   console.log(state)
  // }
  // const onCounterChange = (counter) => {
  //   console.log(`the counter is : ${counter}`);
  // }
  // const handleToggleCounter= ()=>setMount(state=>!state)
  return (
    <>

      <HookCounter initialValue={10} />
 
    </>
  );
}

export default App;
