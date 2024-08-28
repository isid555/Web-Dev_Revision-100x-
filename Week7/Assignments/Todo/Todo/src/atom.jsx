import {atom, selector} from "recoil";

export const todosAtom = atom({
    key: "todosAtom",
    default:[
        {
            title: "Learn Recoil",
            description: "Learn Recoil from the documentation",
            status: "In Progress",
        }
        ,
        {
            title: "Learn React",
            description: "Learn React from the documentation",
            status: "In Progress",
        }
        ,{
            title: "Learn Node",
            description: "Learn Node from the documentation",
            status: "In Progress",
        }
    ]
})




export const filterAtom = atom({
    key: 'filterAtom',
    default: '',  // The default value is an empty string
});


export const filterTodos = selector({
    key:"filterTodos",
    get : ({get}) => {
        const filter = get(filterAtom).toLowerCase();
        const todos = get(todosAtom);

        return todos.filter(todo =>
        todo.title.toLowerCase().includes(filter)
            ||
            todo.description.toLowerCase().includes(filter)
        );
    }
})


export const allTodosSelector = selector({
    key:"allTodosSelector",
    get:({get})=>{
        const todos = get(todosAtom);
        return todos;
    }

})

export default todosAtom;