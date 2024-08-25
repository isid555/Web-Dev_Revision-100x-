import {useContext, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CountContext} from "./Context.jsx";

// import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
// import Landing from "./Landing.jsx";
// import DashBoard from "./DashBoard.jsx";
//
//
//
// function App() {
// return(
//
//     <div>
//
//         {/*<AppBar/>*/}
//         <BrowserRouter>
//             <Routes>
//                 <Route path={"/"} element={<Landing/>}  />
//                 <Route path={"/dashboard"} element={<DashBoard/>}/>
//             </Routes>
//
//         </BrowserRouter>
//     </div>
// )
// }
//
//
// export default App


function App(){
const[count,setCount] = useState(0);
return(
    <div>
        <CountContext.Provider value={count}>
        <Count setCount={setCount}/>
        </CountContext.Provider>
    </div>

)
}


function Count({setCount}){
return(
    <div>
        <CountRenderer/>
        <Buttons setCount={setCount}/>
    </div>
)
}


function CountRenderer(){
    const count = useContext(CountContext);

    return(
        <div>
            {count}
        </div>
    )
}


function Buttons({setCount}){
    const count = useContext(CountContext);
return(
    <div>
        <button onClick={() => {
        setCount(count+1)
        }}>Increment
        </button>
        <button onClick={() => {
            setCount(count-1)
        }}>Decrement
        </button>
    </div>
)
}

export default App;