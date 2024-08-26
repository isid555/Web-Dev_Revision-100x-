import {useContext, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CountContext} from "./Context.jsx";
import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import countAtom, {evenSeletor} from "./store/atoms.jsx";

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

      <RecoilRoot>
          <Count/>
      </RecoilRoot>

    </div>

)
}


function Count(){
    const count = 0;
return(
    <div>
        <CountRenderer/>
        <Buttons/>
        <Even/>
    </div>
)
}


function CountRenderer(){
    const count =useRecoilValue(countAtom);

    return(
        <div>
            {count}
        </div>
    )
}


function Buttons(){
// const setCount = useSetRecoilState(countAtom)
const[count,setCount] = useRecoilState(countAtom)
    // useRecoilState is similar to useState ,but this one can be used in global level;
    // count -> default value of the atom ,setCOunt takes the function to update the coiunt value
    console.log("I'm from Button component")
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

function Even(){
  //   const count = useRecoilValue(countAtom)
  //
  // if(count%2===0){
  //     return(
  //         <div>
  //             It is Even
  //         </div>
  //     )
  // }

    const evenSelector = useRecoilValue(evenSeletor);

    return(

        <div>
            {evenSelector ? "It is Even" : null}
        </div>
    )
}

export default App;