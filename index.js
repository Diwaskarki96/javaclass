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
// const num = Number(prompt("Enter your age"));
// console.log(typeof num);

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

// const date = new Date();
// console.log(date);
// Object(Real life objects, Properties and Methods)
// const person = {
//     firstName: "Diwas",
//     lastName: "Karki",
//     fullName() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person.fullName()); 
  
//   const Car = {
//     name : "Hyundai",
//     year : "2002",
//     Cardetail() {
//       return this.name + " " + this.year;
//     }
//   };
//   console.log(Car.Cardetail());   
  
//   const bike = {
//     brand : "KTM",
//     name : "RC",
//     year : "2002",

//     bikedetail() {
//       return this.brand + " " + this.name + " " + this.year;
//     }
//   };
//   console.log(bike.bikedetail()); 

//   const College = {
//     name : "Trinity",
//     Year : "1956",
//     location : "kathmandu",
//     Collegedetail(){
//         return this.name + " " + this.Year + " " + this.location; 
//     }
//   };
//   console.log(College.Collegedetail());

// const mobile = {
//     name: "andriod",
//     year: "2002",
//     ramInGb: 12, 
//     doeswork: () => {
//       return mobile.name === "andriod" || mobile.ramInGb < 10
//         ? console.log("this device is uncompatible")
//         : console.log("this device is compatible");
//     },
//   };
  
//   const opbr = mobile.doeswork();
  
// practice
// function onePlusAvg(x,y){
//   return 1+(x+y)/2
// }
// let a = 1;
// let b = 2;

// console.log("One plus Average of a and b is ", onePlusAvg(a,b))

// practice
// const hello = ()=>{
//    console.log("hello");
// }
// hello();

// Array
// const arr = ["a","b","c",23,true,{},[]];
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr.pop());
// arr.push("sita");

 
// const person = [
//    {name: "ram",age: 20},
//    {name: "shyam",age: 24},
//    {name: "hari", age: 5},
// ]
// // sort in accending order of persons arry by age
// const age = person.sort((a,b) => {
//    return a.age - b.age;

// });
// console.log(age);
// length,sort,push,pop
// map,find,filter,reduce,sort //imutable.js
// concat,join,slice,splice,forEach

// const person = [
//       {name: "ram",age: 20},
//       {name: "shyam",age: 24},
//       {name: "hari", age: 5},
//    ];
// const personFunction = (person) => {
//    // starting
//    return person.name;
// };
// const newPerson2 = person.map(personFunction); //staring

// const newPersons = person.map((person) => {
// //2nd step
// return person.name;
// });
// const newPerson = person.map((person) => person.name); //final step
// console.log({person, newPerson, newPersons, newPerson2});

   // Destructuring Objects
// const person = {
//    username: "diwas",
//    password: "karki",
//    role: "admin",
//    isActive: true,
//  };
//  const { username, ...rest } = person;
//  console.log({ rest });
//  console.log({ person });
 
 // Sample object
// const person = {
//    name: "Diwas Karki",
//    age: 22,
//    city: "Ktm",
//    occupation: "Engineer"
//  };
 
//  // Destructuring the object
//  const { name, age, occupation } = person;
 
//  // Now you can use the extracted properties as separate variables
//  console.log(name); // Output: "Diwas Karki"
//  console.log(age); // Output: 22
//  console.log(occupation); // Output: "Engineer"


   
 

