/* Promises
* Untill now we have used built in async functions,like readfile etc...
* now we are going to create our own async function on top of another async functions JS provided async functions like setTimeout ,readfile etc...
*
* */
// 1.Ugly way
const fs = require('fs');
//my own asynchoronous function
// function SidReadingTheFile(callBack){
//     fs.readFile('a.txt','utf8',(err,data) => {
//         callBack(data);
//     });
// }
//
// //callback function to call
function onDone(data){
    console.log(data);
}
//
// SidReadingTheFile(onDone);

//2 .Cleaner way with promises

// function WithPromise(){
//     console.log("Inside promise function" );
//     return new Promise(function (resolve){
//         console.log("Inside promise function return" );
//         fs.readFile('a.txt','utf8',(err,data) => {
//             resolve(data);
//         });
//         console.log("Inside promise function return after readfile , but it works only after printing this line" );
//     })
// }
// // WithPromise().then(onDone)
// var a  = WithPromise();
// console.log(a) //Promise { <pending> }
// a.then(onDone)
//
//
//
// function print(){
//     let p  = new Promise((resolve) => {
//         setTimeout(resolve,2000)
//
//     });
//     return p;
// }
// const value = print();
// console.log("Hello World");
//
// value.then(() => {
//     console.log("Hello World");
// })
// console.log("After promise");



//INtro to  async and await
function Sid(){

    let p = new Promise((resolve) =>  {
        setTimeout(function (){
            resolve("Hello World");
        },7000)

    })

    return p;
}

async  function main(){

    let p = await Sid();
    console.log("Before promise")
    console.log(p);
    console.log("After promise")


}
main()


//async is compulsory for await,instead of ,then we can use await
