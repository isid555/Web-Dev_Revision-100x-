const users = '{"name":"John", "age":30, "city":"New York"}';
console.log(users);
console.log(users.name); // output undefined ,due to string ,not an object
//JSON.parse() method is used to convert JSON string to object
//JSON.stringify() method is used to convert object to JSON string
const user = JSON.parse(users);
console.log(user);