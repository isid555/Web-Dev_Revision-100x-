//arrow =>
function sum(a,b){
    return a+b
}

const add = (a,b) =>{
    return a+b
}

/*
* app.get('/',function(req,res){})
* llly
* app.get('/',(req,res)=>{})
*
* */

console.log(sum(2,3));
console.log(add(2,3));

input = [1,2,3,4,5,6,7,8,9,10]
function transform(i){
    return i*2;
}

const result = input.map(transform)
console.log(result)

//filters
function filterLogic(i) {
    // if (i % 2 === 0) {
    //     return true
    // } else {
    //     return false
    // }
    return  i>5;
}
const result2 = input.filter(filterLogic)
console.log(result2)