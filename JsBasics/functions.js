function printMessage() {
    console.log("message");
}

printMessage();

function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(5, 10));


// rest parameter example
function shoppingItems(...items){
    return items
}

console.log(shoppingItems("milk", "bread", "eggs"));
