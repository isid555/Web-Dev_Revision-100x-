// JS is a dynamic language
/*
* There are 3 ways to define a variable in JS
* 1. var - the original way
* 2. const - you change it only once , it is a constant
* 3. let - you can change it as many times as you want
*
* Scope:
var is function-scoped. It is accessible within the function it is declared in.
let is block-scoped. It is only accessible within the block (e.g., {}) it is declared in.
Hoisting:
* var declarations are hoisted to the top of their scope and initialized with undefined.
let declarations are hoisted to the top of their block but are not initialized. Accessing them before the declaration results in a ReferenceError.
Re-declaration:
var allows re-declaration within the same scope.
let does not allow re-declaration within the same scope.
Global Object Property:
var declarations in the global scope become properties of the global object (e.g., window in browsers).
let declarations do not become properties of the global object.
* */

// var a = 1;
// a = 2;
// console.log(a);

//data typoes string numbers and booleans
// let firstName = "Siddharth";
// let age = 19;
// let isStudent = "padichavan";
// if(isStudent == "padikadhavan"){
//     console.log(firstName+" is a student")
// }
// else{
//     console.log(firstName+"is not a student")
// }
//for loop
// for(let i = 0;i<10;i++){
//     console.log(i)
// }

// console.log(i) var vs let example error , when var is used in the
// above for loop ,console log i givse 11


// ## COMPLEX PRIMITIVES
// arrays and objects


// const ages = [12,12,1334,34,4]
// console.log(ages)
// ages[0] = 100
// console.log(ages)

//
// const names = ["Vashigaran","Aish"];
// const genders =["male","female"]
// for(let i = 0;i<names.length;i++){
//     if(genders[i]=="female"){
//         console.log(names[i]);
//     }
// }

//we can combine values inJS ,using Objects
// const user1 = {
//     firstName: "Siddharth",
//     gender:"Male",
//     age:19
// }
// console.log(user1.firstName)
// const allUsers = [{
//
// },
//     {
//
//     }]


//Functions
//take in input and return output
