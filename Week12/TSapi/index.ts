// interface User {
//     name:string;
//     age:number;
// }
//
//
// function sumOfAge(a:User,b:User):number{
//     return a.age+b.age;
// }
//
// const result = sumOfAge({
//     name: "harkirat",
//     age: 20
// }, {
//     name: "raman",
//     age: 21
// });
// console.log(result);
//
// type exampleTYPE =  {name:string} | {age:number};
// const userType : exampleTYPE = {name:"Siddharth",age:23}
//
// // type example
// // now let's use type from inheriting the user interface above ,by pick
//
// type userProfile = Pick<User, 'name'|'age'>
// const user : userProfile = {name:"Siddharth" , age:23}
// console.log(user.name , user.age);



interface User {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};



type UpdateProps = Pick<User, 'name' | 'age' | 'email'>
//a user will update not all ,everytime
// so we will make the properties optional
type UpdatePropsOptional = Partial<UpdateProps>


function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database tp update the user
}
updateUser({})

type Users = Record<string, User>;

const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe', age: '20', email: 'k', password: 'k' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' , age: '20', email: 'k', password: 'k' },
};
console.log(users['abc123']);

// Initialize an empty Map
const usersMap = new Map<string, User>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe', age: '20', email: 'k', password: 'k' });
usersMap.set('xyz789', {id: 'abc123', name: 'John Doe', age: '20', email: 'k', password: 'k' });

// Accessing a value using .get
console.log(usersMap.get('abc123'));


type Even = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Even, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
    console.log(`Handling event: ${event}`);
};
handleEvent('click')

