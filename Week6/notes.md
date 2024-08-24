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
key is used to identify the element in the list
key in react helps to identify what has happened ,and updates to DOM



Hooks
the functions that start with use are called hooks
Hooks in react allows you to `hook into` react state and life features from function components
```angular2html
useEffect
useMemo
useCallback
useRef
useState
useReducer
useContext
useLayoutEffect
```

 mount - first time when it's put ,it's called ,mounting
then there can be n number of re renders


useEffect - 
two parts ,one is the function part(logic) and other is the dependancy part
wrt.to todo application
if i put todo in dep[] ,it will run when todo state variable is changed
if it is a empty array ,just runs it on mount,i.e first time the component mounts
Perform Side Effects
React components render to the DOM, but sometimes you need to perform actions that aren’t directly related to rendering. Examples include:

Fetching Data: Making API calls to fetch data that needs to be displayed in the component.
Subscribing to Events: Adding event listeners, such as for a WebSocket connection or scroll events.
Updating the DOM: Directly interacting with the DOM for tasks like animations or integrating with non-React libraries.



useState-
lets you descrbe the state of the component
whenever the state gets updated,it triggers re rendwer ,finally results in DOM update

useMemo -
remembering the output ,given an input and not computing again


useCallBack - 
memoise functions ,so that they are not re created on every render,especially involving child components that rely on reference equality to prevent unnecessary re renders

if you ever want to use a useState inside ,it must either be a custom hook or a component



diff btw useMemo and useCallback
Similarity:
Both hooks will only recompute the function if the dependencies change.
Key difference:


useCallback returns the memoized function directly.
useMemo returns the result of calling the function you provide.
useMemo is a React hook that allows you to memoize the result of a function

 



