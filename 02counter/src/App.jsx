import { useState } from 'react';
import './App.css'
function App() {
//hooks
  let[counter,setCounter]=useState(0)
//counter - the var that will be changed
//setCounter-asks for the new value that will be assigned to counter
  // let counter=2;
  const addValue=()=>{
    if(counter<20){
      // counter+=1;
      setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)

      //even if we made this number of calls this wont increase the count immediatly by 5 , beacause of useState
      // as it will combine them and send them in batches 
      // to do this make a prevcounter 

      // setCounter(prevCounter=>prevCounter+1)
      // setCounter(prevCounter=>prevCounter+1)
      // setCounter(prevCounter=>prevCounter+1)


    }return;
    
    // setCounter(counter) or directly pass it here after incrementing it above
  }
  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }return;
    // counter+=1;
    
  }
  return (
    <>
    <h1>Shorya</h1>
    <h2>counter value {counter}</h2>

    <button
    onClick={addValue}>Add value</button>
    <br />
    <button
    onClick={removeValue}>Remove Value</button>
    </>
  )
}
export default App
//UI updation is controlled by react 
// hooks 

//change propogation