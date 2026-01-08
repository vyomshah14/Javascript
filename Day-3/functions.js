function sayhello (name){
    console.log(`Hello, ${name}!`)
}
let name = "vyom";

// function call
sayhello("vyom")

// function red
console.log(sayhello);

//type check
console.log(typeof sayhello);

// arrow function
const sayHelloArrow = (name, Lname) => 
    console.log(`Hello, ${name} ${Lname}!`);
sayHelloArrow("Vyom");

// Null try!!
console.log(null == 0);
console.log(null === 0);

//varibale with function --> anonyms function ( a function without a name )
let greet = function (fname) {
    console.log(`Hello, ${fname}!`);
}
console.log(greet);
greet("Vyom");

//function returns value
function sumofnumber(para1,para2) {
    return para1 + para2;
}
sumofnumber(10,20); // funtion is only returning the value not printing it 
console.log(sumofnumber(10,20));

// arrow function
const sumOfNumbers = (a, b) => a + b;
//a + b; // This line is not doing anything just returning the value
console.log(sumOfNumbers(10, 20));
// function call
const sumOfnumber = (para1, para2) => para1 + para2;
console.log(sumOfnumber(10));
// default parameters
const SumOfNumbers = (para1, para2 = 1) => para1 + para2;
console.log(SumOfNumbers(3, 5));