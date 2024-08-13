import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let state = {
    count: 0
}

function App() {
    let [count,setcount] = useState(0);
    console.log(count);

  function CustomButton(props){
      function onButtonClick(){

          props.setcount(props.count+1);
      }
      return(
          <button onClick={onButtonClick}>
              Counter {props.count}
          </button>
      )
  }

  return (
   <div>
<CustomButton count = {count} setcount = {setcount}></CustomButton>
   </div>
  )
}

export default App
