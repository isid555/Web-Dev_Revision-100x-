import {useEffect, useMemo, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComponent from "./ParentComponent.jsx";
import COunter from "./COunter.jsx";
import ExpensiveComponent from "./ExpensiveComponent.jsx";

function App() {
    // const [input,setinput] = useState(0);
    // const [counter,setcounter] = useState(0);


    // const count = useMemo(function (){
    //     let cnt = 0;
    //     for (let i = 1;i<=input;i++){
    //         cnt+=i;
    //     }
    //     console.log(cnt)
    //     return cnt;
    // },[input])



    //
    // const  count  = function (){
    //     let cnt = 0;
    //     for (let i = 1;i<=input;i++){
    //         cnt+=i;
    //     }
    //     console.log(cnt)
    //     return cnt;
    //
    // }
    const items = [
        'apple',
        'banana',
        'grape',
        'papaya',
        'book',
        'mobile'
    ];



return(
    <div>
        {/*<input type={"number"} onChange={*/}
        {/*    function(e){*/}
        {/*        setinput(e.target.value);*/}
        {/*    }*/}
        {/*} placeholder={"Enter the number"} />*/}
        {/*<br/>*/}

        {/*The sum from 1 to {input} is {count}*/}

        {/*<ParentComponent/>*/}
        {/*<COunter/>*/}



        <ExpensiveComponent items={items}/>
    </div>
  )
}

export default App
