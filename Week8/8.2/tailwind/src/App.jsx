import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Res_grid from "./Res_grid.tsx";
import {RevenueCard} from "./components/RevenueCard.jsx";

function App() {
  const [count, setCount] = useState(0)

    return (
        <div className={"grid grid-cols-3 gap-5"}>
            <RevenueCard title={"Amount Processed"} amount={"23,08,789"} orders={13}/>

            <RevenueCard title={"Amount Debited"} amount={"23,08,789"} orders={13}/>

            <RevenueCard title={"Amount Credited"} amount={"23,08,789"} orders={13}/>

        </div>
    );

}


export default App
