interface User {
    name:string;
    age:number;
}


function sumOfAge(a:User,b:User):number{
    return a.age+b.age;
}

const result = sumOfAge({
    name: "harkirat",
    age: 20
}, {
    name: "raman",
    age: 21
});
console.log(result);
