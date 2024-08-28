import {atom, selector} from "recoil";

const countAtom = atom({
    key: 'countAtom',
    default: 0
})

export  const evenSeletor = selector({
    key :"evenSeletor",
    get:({get})=>{
        const count = get(countAtom);
        return count % 2 === 0 ;
    }
})


export  const filteredTodos = selector({
    key :"filteredTodos",
   get : (props) => {
        const todos = props.get(todosAtom)
       const filter = props.get(filterAtom)


       return todos.filter(x => x.title.includes(filter) || x.description.includes(filter) )
   }
})


export default countAtom;
