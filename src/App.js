import './App.css';
import {increment,decrement} from "./Redux/Actions"
import {useDispatch ,useSelector} from "react-redux"


function App() {
  const state=useSelector(state=>state)
  
  const dispatch=useDispatch()
  const handleIncrement=()=>{
   dispatch(increment())
  }
 const handleDecrement=()=>{
  dispatch(decrement())
 }
  return (
    <div className="App">
     <button onClick={handleIncrement}>+</button>
     <h1>{state}</h1>
     <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default App;
