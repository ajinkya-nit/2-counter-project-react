import { useState } from 'react'

function App() {

  // let counter = 15
  let [counter, setCounter] = useState(15)


  const addCount = () =>{
    if(counter+1 <=20){

      counter = counter +1
      console.log("value added" ,setCounter(counter) )
    }
   }
  const reduceCount = () =>{
    if((counter-1) >= 0){
      counter = counter -1
      console.log("value added" ,setCounter(counter) )
    }
    }
      

  return (
    <>
      <h1>Ajinkya working on react!</h1>
      <br />
      <h2>This is a counter</h2>
      <button onClick={addCount}>Add Count</button>
      <h2>Count : { counter }</h2>
      <br />
      <button onClick={reduceCount}>Reduce Count</button>
    </>
  )
}

export default App
