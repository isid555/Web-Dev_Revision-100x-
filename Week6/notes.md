React component returns
a comp can return only a top level xml , east for reconciliation


if there are multiple components in a structure and they want to use some state variable in common ,find the LCA and place the state 
re-renders/reconciliation ->  updation of the (or) to the DOM elements/tree
if you do not want to re-render a component ,untill and unless it's porps are not changes,you use React.memo (memoization)

re-render happens when 
state variable used in components
a parent component re render triggers all its children components


````angular2html
import {Children, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import {fixPropTypesSort} from "eslint-plugin-react/lib/util/propTypesSort.js";

function App() {


  return (
   <>
       <HeaderWithTitle/>
       <Header title="Venus"/>
       <Header title="Venus"/>
       <Header title="Venus"/>
       <Header title="Venus"/>
       <Header title="Venus"/>
       <Header title="Venus"/>
       <Header title="Venus"/>
       <Header title="Venus"/>

   </>
  )


    function Header({title}){
        console.log()
      return(
            <div>
                <h1>{title}</h1>
            </div>
      )
    }



    function HeaderWithTitle(){
        const [Title,setTitle] = useState("Moon")
        function updateTitle(){
            setTitle(Math.random)
        }
        return(
            <div>
                <button onClick={updateTitle}>Change Title</button>
                <Header title={Title}/>
            </div>
        )
    }
}

export default App

````


Keys in react - Todo application


 



