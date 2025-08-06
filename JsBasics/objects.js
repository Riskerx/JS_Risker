

// const mysymbol = Symbol("Vam");


// const MyObject = {
//     id: 1,
//     [mysymbol]: "This is a symbol property",
//     name: "My Object",
//     description: "This is a simple object in JavaScript.",
//     details: {
//         created: "2023-10-01",
//         modified: "2023-10-02",
//         tags: ["example", "object", "javascript"]
//     }
// }
// console.log(MyObject);
// console.log(MyObject.name);
// console.log(MyObject.details.created);
// console.log(MyObject[mysymbol]); // Accessing the symbol property

// //Object.freeze(MyObject); // Freezing the object to prevent modifications
// // MyObject.name = "New Name"; // This will not work because the object is frozen
// MyObject.id = 4; // This will not work because the object is frozen
// console.log(MyObject.id);


// MyObject.place = "India"; // Adding a new property
// console.log(MyObject.place); // Accessing the new property

// MyObject.remove = function() {
//     console.log("This is a remove function");
// }
// console.log(MyObject.remove()); // Calling the remove function

// MyObject.getDetails = function() {
//     console.log(`ID: ${this.id}, Name: ${this.name}, Created: ${this.details.created}`);
// }

// console.log(MyObject.getDetails()); // Calling the getDetails function

//  //const instaUser = new Object(); //singleton object

//  const instaUser = {} // object literal/ non singleton object

// instaUser.name = "Vam";
// instaUser.age = 25;
// instaUser.isVerified = true;
// instaUser.followers = 1000;
// instaUser.following = 500;
// instaUser.posts = 
//     {
//         id: 1,
//         content: "Hello World!",
//         likes: 100
//     }

// console.log(instaUser);

// const object1 = {
//     name: "Object 1",
//     value: 10}
// const object2 = {
//     name1: "Object 2",
//     value1: 20}
// const object3 = Object.assign({}, object1, object2);

// console.log(object3);

// const userData = [
//     {
//         id: 1,
//         name: "John Doe",
//         email: "fak@google.com"
//     },
//     {
//         id: 2,
//         name: "Jane Smith",
//         email: "sjdfj@google.com"
//     },
//     {
//         id: 3,
//         name: "Alice Johnson",
//         email: "fajsklj@google.com"
//     }
// ]

// console.log(userData[0].email);
// console.log(userData[1].name);
// console.log(userData[2].id);
// console.log(userData[0].name, userData[0].email);


// console.log(Object.keys(instaUser))
// console.log(Object.values(instaUser))
// console.log(Object.entries(instaUser))

const person = {
    name: "John",
    age: 30,
    city: "New York"
};
const {name: naam} = person; // Destructuring assignment
//console.log(name); // Output: John
console.log(naam); // Output: John