import React from 'react';
import {useState} from 'react';
import './App.css'


function App() {
  const [count, setCount]=useState(0);
  return (
    <div>
      <Count count={count} setCount={setCount} />
    </div>
  )}
  
  function Count({count,setCount}){
    return( 
      <div>
    
      <CountRender count={count} />
      <Buttons count={count} setCount={setCount} />
    </div>
    )

  }
  function CountRender({count}){
    return <div>
      {count}
    </div>

  }

  function Buttons({count,setCount}) {
    return(
      <div>
        <button onClick={()=>{
          setCount(count + 1)
        }}>incresing the count</button>

        <button onClick={()=>{
          setCount(count - 1)
        }}>
          descreasing
        </button>
      </div>
    )
  }
export default App