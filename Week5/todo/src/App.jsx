import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [todo,settodo] = useState([{
     title : "Go to GYM",
     description:"Go to GYM at 6:00 AM",
     completed:false
 }
 ,
     {
            title : "Buy Groceries",
            description:"Buy Groceries for the week",
            completed:false
     }
     ,
     {
            title : "Complete Assignment",
            description:"Complete the assignment before 11:59 PM",
            completed:false
     }])
function addRandomTodo(){
     /*
     todos = [1,2]
     [...todos,3] => [1,2,3]
     * */
     settodo([...todo,{
            title:"Random Todo",
            description:"Random Description",
            completed:false
     }])
}

  return (
    <div>
        <button onClick={addRandomTodo}>Add a random todo</button>
        {todo.map(function(todo){
            return <Todo title={todo.title} description={todo.description}></Todo>
        })}
    </div>
  )
}
function Todo(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>

        </div>
    )
}

export default App
