// avoid var and declare variables with let or const since var act as a global variable
// This is a simple example of variable scope in JavaScript
// Variables declared with let or const are block-scoped, while var is function-scoped
// This means that variables declared with let or const are only accessible within the block they are defined
 let xet = 10  // This variable is block-scoped
 let z = 30

if (true) {
   
    var y = 20// This variable is function-scoped
    let z = 30 // This variable is block-scoped

}
console.log(xet)
console.log(y)