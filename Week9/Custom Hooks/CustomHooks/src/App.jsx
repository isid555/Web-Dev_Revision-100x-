import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
  // // const [count, setCount] = useState(0)
  // //
  // //   const [render, setRender] = useState(true);
  //
  //   // useEffect(() => {
  //   //     setInterval(() => {
  //   //         setRender(r => !r);
  //   //     }, 5000)
  //   // }, []);
  //
  //   return (
  //       <>
  //           {/*{render ? <MyComponent /> : <div></div>}*/}
  //       </>
  //   )

    const { todos, loading } = useTodos();

    if (loading) {
        return <div>
            Loading...
        </div>
    }

    return (
        <>
            {todos.map(todo => <Track todo={todo} />)}
        </>
    )
}

function MyComponent() {
    useEffect(() => {
        console.error("component mounted");

        return () => {
            console.log("component unmounted");
        };
    }, []);

    return <div>
        From inside my component
    </div>
}

function useTodos() {
    const [loading, setLoading] = useState(true);
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get("https://sum-server.100xdevs.com/todos")
            .then(res => {
                setTodos(res.data.todos);
                setLoading(false);
            })
    }, [])

    return {
        todos: todos,
        loading: loading
    };
}

function Track({ todo }) {
    return <div>
        {todo.title}
        <br />
        {todo.description}
    </div>
}

export default App
