//console.log("hello world");
// var a=1;
// var a=5;
// console.log(a);

// function s(){
//     var b=10;
// }
// console.log(b); // b is not defined as var is function scoped

// if (true){
//     var c=15;
// }
// console.log(c);// prints 15 as it is only function scoped and not block scoped

//  let a=10;
//  a=11;
//  console.log(a);  // let can be reassigned but not re-declared ;; it is block scoped

// //const a=5; // cannot be reassigned,not redeclared,block scoped

// console.log(a);// hoisted but undefined
// var a=5;
// console.log(a);

// function sum(){
//     console.log(arguments);//arguments is an object
//     return arguments[0]+arguments[1];
// }
// console.log(sum(5,6));

// a=[1,2,3,4,"gurleen"];
// console.log(a.at(-1));

// console.log("Hello World");

// let ,var ,const
// var a=1;
// var a=5;
// console.log(a);   //function scoped and can be reassigned,redeclared

// function s(){
//     var b=10;
// }
// console.log(b);

// if(true){
//     var c=15;
// }
// console.log(c);   // function scoped not block scoped

// let a=10;
// // let a=11;  cant be redeclared 
// a=11        // but can be reassigned
// console.log(a);

// if(true){
//     let d=10;
// }
// console.log(d);      // let is block soped only

// const a=5   // not reassign,not redeclared, but block scoped

// console.log(a);         // undefined because of hoisting and var is global scoped 
// var a=5;
// console.log(a);             // 5

// console.log(a);          //ReferenceError: Cannot access 'a' before initialization
// let a=5;
// console.log(a); 

// console.log(sum(5,6));
// const sum=function sum(a,b){
//     return a+b;
// }
// console.log(sum(5,6));

// function sum(){
//     return arguments[0]+arguments[1];
// }
// console.log(5,6);


// const sum=(a,b)=> a+b;
// console.log(sum(5,6));

// let arr=[1,2,3,4,"niket"];
    // console.log(arr.at(-1));
    // console.log(arr.unshift(7))

//     let arr=[1,2,3,4,9];
//    console.log(arr.sort((a,b)=>a-b));
//     console.log(arr.sort((a,b)=>b-a));

// console.log(a(2,3));
// const a=function sum(a,b){ // wont work because funciton expression are not hoisted??
//     return a+b;
// }

// arrow function
// const a=(a,b)=>{   //const a=(a,b)=>a+b; can also be written like this but if curly braces,then we have to write return
//     return a+b;
// }
// console.log(a(2,3));

// const a=()=>({a:1,b:2}) // object declared and returned // no this keyword,arguements keyword,super keyword.
// console.log(a());

// function sum(){
//     console.log(arguments);
//     console.log(arguments[0]+arguments[1]);

// }
// sum(2,3);

//rest operator
// const sum=(...number)=>{ // rest operator gathers the arguments as an array and is always used at end as in (a,b,...c)
//     console.log(number);
// }
// sum(1,2,3,4,5,6,7,8,9);


//spread operator
// a=[1,2,3,4,5,6];
// console.log(...a); // spread operator spreads the given element
// console.log(Math.max(...a));//gives the max value among a
// const b=[...a,7,8,9];//spreads a and adds on 7,8,9
// console.log(b);

// function a(b){ //HOF - higher order function - that takes another function as parameter or returns a function
//     b();
// }
// function b(){ // callback functions - that is passed in another function as parameter
//     console.log("hello");
// }
// a(b);
// const c=a(b);
// c();


//lexical scoping
// function outer(){
//     const a=3;
//     function inner(){
//         console.log(a); // lexical scoping - when inner function can access outer function's variable
//     }
//     inner();
// }
// outer();

//default parameter
// function f(a=4){
//     console.log(a);
// }
// f(6); // default parameter only works when argument is not provided


//closure
// function outer(){
//     var a=3;
//     return function inner(){
//         a++;
//         console.log(a);
//     }
// }
// const f=outer();
// f(); // closure - whent outer function remembers the inner function even after execution
// f();

// array declaration
// a=[1,2,3,4,4];
// const b=new Array(2,3,4,7,8); // new makes object and allocates dynamic memory at runtime
// console.log(b);
// console.log(b.at(-1));

//unshift removes the element from starting and shift adds it at the start

// for(let i=0;i<a.length;i++){
//     console.log(a[i]);
// }
// console.log();
// for(item in a){// returns index in js
//     console.log(item); 
// }

// a.forEach((item)=>{
//     console.log(item);
// })

// map function creates new array
// const b=a.map((item)=>item*item)
// console.log(b);

// const b=a.filter((item)=>item%2==0)
// console.log(b);

//OBJECT - to store different types of data in key-value pairs
// const student={
//     name:"Gurleen",
//     age:19,
//     address:"Punjab",
//     greet:function(){
//         console.log(this.name);
//     },
//     greet:()=>{
//         console.log(this.name); // undefined as arrow function doesnt have this keyword
//     }
// }
// console.log(student.greet);
// console.log(student.name); // we use dot operator;; bracket wont work ;;it only works when key is stored in a variable;
// var a="name";
// console.log(student[a]); // bracket is used when key is dynamic or stored in a variable
// const person=new Object(); // object created by new keyword
// person.name="ridhi";
// person.age=19;
// console.log(person);

// const a={
//     name:"Gurleen",
//     city:"Rajpura"
// }
// console.log(Object.keys(a));
// console.log(Object.entries(a));
// Object.keys(a).forEach((item)=>console.log(a[item]));
// Object.keys(a).forEach((_,index)=>console.log(index));
// const{name,city}=a; //destructuring
// console.log(name); 

// DOM=DOCUMENT OBJECT MODEL