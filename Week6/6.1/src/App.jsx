import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
    // const [todos, setTodos] = useState([])

    // useEffect(() => {
    //     fetch("https://sum-server.100xdevs.com/todos")
    //         .then(async (res) => {
    //             const data = await res.json();
    //             setTodos(data.todos);
    //             console.log(data);
    //         })
    // }, []);
    // fetch("https://sum-server.100xdevs.com/todos")
    //     .then(async (res) => {
    //         const data = await res.json();
    //         setTodos(data.todos);
    //         console.log(data);
    //     })


    // const [input,setinput] = useState(0);
    // useEffect(() => {
    //     axios.get("https://sum-server.100xdevs.com/todos")
    //         .then((res)=>{
    //             setTodos(res.data.todos)
    //         })
    // }, [input]);
    // function Todo(prop){
    //     return (
    //         <li key={prop.id}>
    //             <h2>{prop.title}</h2>
    //             <p>{prop.description}</p>
    //             <p>Status: {prop.completed ? "Completed" : "Not Completed"}</p>
    //         </li>
    //     )
    // }


    function TodoID({id}){


        const [todo, setTodo] = useState({})

        useEffect(() => {
            fetch("https://sum-server.100xdevs.com/todo?id=" + id)
                .then(async function(res) {
                    const json = await res.json();
                    setTodo (json.todo);
                })
        }, [id]);



        return(
        <div>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
        </div>
        )
    }



    // APP - return |
    const [buttonValue, setButtonValue] = useState(1);



    return (

        <div>



            <h1>Hi world</h1>
            <button onClick={function (){
                setButtonValue(1);
            }}>1</button>
            <button onClick={function (){
                setButtonValue(2);
            }}>2</button>
            <button onClick={function (){
                setButtonValue(3);
            }}>3</button>
            <button onClick={function (){
                setButtonValue(4);
            }}>4</button>
            <button onClick={function (){
                setButtonValue(5);
            }}>5</button>


            <TodoID id={buttonValue}/>

        </div>
    );
}

export default App;
