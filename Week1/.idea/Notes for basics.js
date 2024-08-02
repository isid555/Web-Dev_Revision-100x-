// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
    console.log("Original String:", str);
    console.log("Length:", str.length);
}
getLength("Hello World");

// indexOf
function findIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.indexOf(target));
}
findIndexOf("Hello World", "World");

// lastIndexOf
function findLastIndexOf(str, target) {
    console.log("Original String:", str);
    console.log("Index:", str.lastIndexOf(target));
}
findLastIndexOf("Hello World World", "World");

// slice
function getSlice(str, start, end) {
    console.log("Original String:", str);
    console.log("After slice:", str.slice(start, end));
}
getSlice("Hello World", 0, 5);

// substring
function getSubstring(str, start, end) {
    console.log("Original String:", str);
    console.log("After substring:", str.substring(start, end));
}
getSubstring("Hello World", 0, 5);

// replace
function replaceString(str, target, replacement) {
    console.log("Original String:", str);
    console.log("After replace:", str.replace(target, replacement));
}
replaceString("Hello World", "World", "JavaScript");

// split
function splitString(str, separator) {
    console.log("Original String:", str);
    console.log("After split:", str.split(separator));
}
splitString("Hello World", " ");

// trim
function trimString(str) {
    console.log("Original String:", str);
    console.log("After trim:", str.trim());
}
trimString(" Hello World ");

// toUpperCase
function toUpper(str) {
    console.log("Original String:", str);
    console.log("After toUpperCase:", str.toUpperCase());
}
toUpper("Hello World");

// toLowerCase
function toLower(str) {
    console.log("Original String:", str);
    console.log("After toLowerCase:", str.toLowerCase());
}
toLower("Hello World");


//NUMBERS

function explainParseInt(value) {
    console.log("Original Value:", value);
    let result = parseInt(value);
    console.log("After parseInt:", result);
}

// Example Usage for parseInt
explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

function explainParseFloat(value) {
    console.log("Original Value:", value);
    let result = parseFloat(value);
    console.log("After parseFloat:", result);
}

// Example Usage for parseFloat
explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");

// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
function pushExample(arr, element) {
    console.log("Original Array:", arr);

    arr.push(element);
    console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// pop()
function popExample(arr) {
    console.log("Original Array:", arr);

    arr.pop();
    console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift()
function shiftExample(arr) {
    console.log("Original Array:", arr);

    arr.shift();
    console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// unshift()
function unshiftExample(arr, element) {
    console.log("Original Array:", arr);

    arr.unshift(element);
    console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

// concat()
function concatExample(arr1, arr2) {
    console.log("Original Arrays:", arr1, arr2);

    let arr3 = arr1.concat(arr2);
    console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// forEach()
function forEachExample(arr) {
    console.log("Original Array:", arr);

    arr.forEach(function(item, index) {
        console.log(item, index);
    });
}
forEachExample([1, 2, 3]);

// map()
function mapExample(arr) {
    console.log("Original Array:", arr);

    let newArr = arr.map(function(item) {
        return item * 2;
    });
    console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// filter()
function filterExample(arr) {
    console.log("Original Array:", arr);

    let newArr = arr.filter(function(item) {
        return item > 3;
    });
    console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find()
function findExample(arr) {
    console.log("Original Array:", arr);

    let found = arr.find(function(item) {
        return item > 3;
    });
    console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {
    console.log("Original Array:", arr);

    arr.sort(function(a, b) {
        return a - b;
    });
    console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);


function dateMethods() {
    const currentDate = new Date();
    console.log("Current Date:", currentDate);

    // Getting various components of the date
    console.log("Date:", currentDate.getDate());
    console.log("Month:", currentDate.getMonth() + 1); // Months are zero-indexed, so adding 1
    console.log("Year:", currentDate.getFullYear());
    console.log("Hours:", currentDate.getHours());
    console.log("Minutes:", currentDate.getMinutes());
    console.log("Seconds:", currentDate.getSeconds());

    // Setting components of the date
    currentDate.setFullYear(2022);
    console.log("After setFullYear:", currentDate);

    currentDate.setMonth(5); // Setting month to June (zero-indexed)
    console.log("After setMonth:", currentDate);

    // Getting and setting time in milliseconds since 1970
    console.log("Time in milliseconds since 1970:", currentDate.getTime());

    const newDate = new Date(2023, 8, 15); // Creating a new date
    console.log("New Date:", newDate);
}

// Example Usage for Date Methods
dateMethods();

function mathMethods(value) {
    console.log("Original Value:", value);

    let rounded = Math.round(value);
    console.log("After round():", rounded);

    let ceiling = Math.ceil(value);
    console.log("After ceil():", ceiling);

    let flooring = Math.floor(value);
    console.log("After floor():", flooring);

    let randomValue = Math.random();
    console.log("After random():", randomValue);

    let maxValue = Math.max(5, 10, 15);
    console.log("After max():", maxValue);

    let minValue = Math.min(5, 10, 15);
    console.log("After min():", minValue);

    let powerOfTwo = Math.pow(value, 2);
    console.log("After pow():", powerOfTwo);

    let squareRoot = Math.sqrt(value);
    console.log("After sqrt():", squareRoot);
}

// Example Usage for Math Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);