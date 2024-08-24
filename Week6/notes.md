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

What is a Pure Component?
A Pure Component in React is a component that implements shouldComponentUpdate() with a shallow prop and state comparison. It prevents unnecessary re-renders if the props and state haven't changed, leading to performance optimizations.
1. Purpose:
   Pure Component:

Optimizes the entire component by preventing unnecessary re-renders when the props and state haven’t changed.
Suitable for class components.
useMemo:

Memoizes the result of an expensive function to avoid recalculating it on every render, unless its dependencies change.
Specifically used in functional components.
2. Working Mechanism:
   Pure Component:

Implements a shallow comparison of props and state using shouldComponentUpdate. If the comparison shows no changes, the component skips rendering.
useMemo:

Memoizes a specific computation or function result based on its dependency array. The memoized value is only recomputed when one of the dependencies changes.



The key difference between React.memo and useMemo lies in their purposes and how they are used in React components:

1. React.memo:
   Purpose: React.memo is a higher-order component (HOC) that optimizes functional components by preventing unnecessary re-renders. It does this by memoizing the rendered output of a component. If the component’s props haven’t changed between renders, React will reuse the last rendered output, avoiding the need to re-render the component.

Usage: You wrap a functional component with React.memo when you want to ensure that it only re-renders when its props change.

```angular2html
javascript
Copy code
const MyComponent = React.memo(function MyComponent(props) {
// component logic
return <div>{props.value}</div>;
});
```
When to use: Use React.memo when you want to optimize a functional component that is re-rendering too often without any prop changes.

2. useMemo:
   Purpose: useMemo is a React hook that memoizes the result of a computation (a value) between renders. It recomputes the value only when its dependencies change. This is useful for optimizing expensive calculations or avoiding unnecessary operations during rendering.

Usage: You use useMemo inside a functional component to memoize the result of a computation based on specific dependencies.

```angular2html
javascript
Copy code
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
When to use: Use useMemo when you have an expensive computation or a large object/array creation that shouldn’t be recalculated/recreated on every render unless specific dependencies change.

```
Summary:
React.memo is for memoizing entire components to prevent unnecessary re-renders.
useMemo is for memoizing the result of a function (or computation) to avoid recalculating it on every render unless dependencies change.
In practice:

React.memo optimizes how often a component re-renders.
useMemo optimizes how often a value or computation within a component is recalculated.

 



