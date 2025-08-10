function tabhai(){
    let username = "John";
    console.log(this.username);
}
tabhai();

const tabhai2 = () => {
    let username = "John";
    console.log(this);
}
// tabhai2(); // This will log the global object (or undefined in strict mode) since arrow functions do not have their own 'this'.

const add = (a, b) => (a + b) // implicit return
console.log(add(5, 10)); // Outputs: 15 

const a = (a, b) => ({username: "rishikesh"}) // implicit return
a(); // Outputs: { username: 'rishikesh' }




