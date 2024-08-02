/*
* Difference between synchronous and asynchronous code
* sync - means happening in sequential manner
* async means happening in parallel
* */

function findSum(){
    let ans = 0;
    for(let i= 0;i<=1000000000;i++){
        ans+=i;
    }
    console.log(ans);
}
setTimeout(findSum,2000) //calling a function asynchronously,printhelloworld and after 2 secs run ths
console.log("Hello World");

/*
* few other asyn functions
* fs.readFile- read a file from system
* fetch - get data from a server
* */

