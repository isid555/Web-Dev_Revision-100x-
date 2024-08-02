//callback function - a function that is passed as an argument to another function
function greetAline(){
    console.log("Hello Aline , have a great day")
}
//
// setTimeout(greetAline,2000) //only once
// setInterval(greetAline,2000) //every 2 seconds


function Arimetics(a,b,artimeticalFunctionPassed,print){
const ans = artimeticalFunctionPassed(a,b);
print(a);
}
function print(a){
    console.log(a);
}
function sum(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}

const ans = Arimetics(180,230,sum,print)