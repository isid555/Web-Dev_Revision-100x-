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


export default countAtom;
