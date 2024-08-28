import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RecoilRoot, useRecoilState, useRecoilValue} from "recoil";
import todosAtom, {filterTodos, filterAtom, allTodosSelector} from "./atom.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <RecoilRoot>
    <Todo/>
  </RecoilRoot>
    </>
  )
}


function Todo(){
  const [todos,setTodos] =useRecoilState(todosAtom);

  const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");


    function add(){


      const newTodo = {
        id:todos.length+1,
        title:title,
        description:description
      }

      setTodos([...todos,newTodo]);

      setTitle("");
        setDescription("");
    }


   const [filter,setfilter] = useRecoilState(filterAtom);
    const filteredTodos = useRecoilValue(filterTodos);
  const todosMAP = useRecoilValue(allTodosSelector);



  return(
      <div>
        <div>

          <input type="text" placeholder={"todo title"} onChange={(e) => {
            setTitle(e.target.value)
          }}/>

          <input type="text" placeholder={"description"} onChange={(e) => {
            setDescription(e.target.value)

          }}/>

          <button onClick={add}>Add this todo</button>

        </div>


        <input type="text" placeholder={"FILTER"} onChange={(e) => {
          setfilter(e.target.value)
        }}/>


        {/*{todos.map((todo,index) =>*/}
        {/*    <div key={index}>*/}
        {/*      <h1>{todo.title}</h1>*/}
        {/*      <p>{todo.description}</p>*/}
        {/*    </div>*/}
        {/*)}*/}
        <ul>
          {todosMAP.map(todo => (
              <li key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
              </li>
          ))}
        </ul>

        Before filter is using selector
        <h1>After filter</h1>

        {filteredTodos.map((todo) => {
          return (
              <div key={todo.id}>
                <h1>{todo.title}</h1>
                <p>{todo.description}</p>
              </div>
          )
        })}

      </div>
  )
}

export default App
