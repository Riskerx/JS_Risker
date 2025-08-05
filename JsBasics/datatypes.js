"use strict" //use all javascripts as newer js 
// for documentation we use MDN/tc39.es

/* permitive data types
number
Bigint
string = ""
boolean = true/false
null = standalone value, means void
undefined
symbol= for finding uniqueness
object*/
console.log(typeof "rishikesh")

// reference data types
//array, objects, functions

let fruits = ["mango", "apple", "banana"]

let infoStudents = {
    Name: "Dhiraj",
    cgpa: 9.8,
    age: 24

}

const myfxn = function(){
    console.log("returnme");
}

// https://262.ecma-international.org/5.1/#sec-11.4.3

//________________________________________________________
// stack and heap memory
/* in every primitive data type stack memory is used 
and for refrence data type heap memory is used */

let mygithubname = "RiskerX"
let mylinkedinname = mygithubname
mylinkedinname = "Rishikesh Sharma"

console.log(mygithubname)
console.log(mylinkedinname)


let user_one = {
    email: "one@gmail.com",
    passward: "1432"
}

let user_two = user_one

user_two.email = "change@gamil.com"

console.log(user_one.email)
console.log(user_two.email)


// in heap variable get same reference. Unlike incase of stack 