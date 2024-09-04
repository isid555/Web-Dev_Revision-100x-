// let x : number = 10;
// x : "Helo"
// console.log(x);


// function greet(firstName : string){
//     console.log("Hello " + firstName);
// }
// greet("Siddharth")
//
// function sum(a : number , b:number) : number{
//     return a+b;
// }
//
// console.log(sum(10,20))
//
// "use strict";
// const greet = (name:string) => `Hello, ${name}!`;
// greet("Siddharth");


interface  User  {
 name  : string,
    age : number
}

function isLegal (user : User) : boolean {
    return user.age >= 18;
}
function greet(user : User){
    console.log("Hello " + user.name);
}

