// console.log("Hello");

// //
// //ES5
// var person ="ram";

// person="shyam";

// console.log(person);
// //ES6
// const person1 = "ram";
// console.log({ person1});
// //Let
// let person2 = "Ram";
// person2 = "shyam";
// console.log(person2);

//chapter 2 "Interaction"
//alert("message");
//prompt("enter your name");
//confirm("are you sure");
// const name = prompt("Enter your name");
// confirm("Are you sure")
// const password = prompt("Enter your password");

// if (name ==="diwas" && password ==="123") {
//     confirm("Are you sure") && 
//     alert("Welcome to our Website");
// }

//Chapter 3 "Operator"
// let hour = 17;
// if (hour > 14 && hour < 18){
//     alert ("JS Class is running");
// }
// const isValid = True;  //const isValid = false; garda chai chalxa
// if(!isValid) {
//     alert("it is not valid");
// }

//"Statement"
// let a=2;
// if (a>0) {
//     alert ("a is greater than 0");
// }
// else{
//     alert("a is less than 0");
// }
//termary operator (mathi tala same)
// let a = 0
// a > 0 ? alert("a is greater than 0") : alert("a is less than 0");

//for loop
// for (let a = 0; a < 10; a++){
//     console.log(a);
// }

// while loop
// let a = 1;

// while (a <= 5) {
//   console.log(a);
//   a++;
// }

//do while loop
// let a = 1;
// do {
//   console.log(a);
//   a++;
// } while (a <= 5);

//switch case
// let day = 3;
// let dayName;

// switch (day) {
//   case 1:
//     dayName = "Sunday";
//     break;
//   case 2:
//     dayName = "Monday";
//     break;
//   case 3:
//     dayName = "Tuesday";
//     break;
//   case 4:
//     dayName = "Wednesday";
//     break;
//   case 5:
//     dayName = "Thursday";
//     break;
//   case 6:
//     dayName = "Friday";
//     break;
//   case 7:
//     dayName = "Saturday";
//     break;
//   default:
//     dayName = "Invalid day";
// }

// console.log("Today is " + dayName);

//function 
//ES5
// const hello(){
//   console.log("hello");
// };
//ES6
//const hello = () =>{
//   console.log("hello");
// };
//function that says hello
// function sayHello() {
//   console.log("Hello!");
// }
// sayHello();
//function that says hello to users
// function sayHello() {
//   console.log("Hello!")
//   console.log("Hello to user!");
// }
// sayHello();
// const hello = (a,b)=>{
//   console.log(a+b)
// }
// hello(a,b);
//function adding 2 number
// const sum = (a,b)=>{
//   let c = a+b
//     console.log(c)
//   }
//   sum(5,6);
// const add = (a,b) =>{
  
//   return a+b;
// }  ;
// const result = add(2,3);
// console.log(result);

// const add = (a,b) =>{
//   if (a > 0 && b > 0) {
//     return a + b;
//   }
//   return "Negative value has been added";
// };
// const result = add(-1,-3);
// console.log(result); "Negative value has been added"
// const result1 = add(1,2);
// console.log(result1); 

//Datatype
const num = Number(prompt("Enter your age"));
console.log(typeof num);

// let age = 25; // Integer
// let pi = 3.14; // Float
// let name = "John"; // String
// let isStudent = true; // Boolean
// let fruits = ["apple", "banana", "orange"]; // Array
// let person = { name: "John", age: 30, city: "New York" }; // Object
// let emptyValue = null; // Null
// let notAssigned; // Undefined

// function sayHello() {
//   console.log("Hello!");
// } // Function

// let currentDate = new Date(); // Date
