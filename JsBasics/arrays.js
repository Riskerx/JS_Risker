const arry = [1, 2, 3, 4, 5, "text", true, null, undefined];
arry.push(32);
arry.push(Math.floor(Math.random()*100))
arry.push(Math.floor(Math.random()*100))
arry.push(Math.floor(Math.random()*100))
arry.push(Math.floor(Math.random()*100))
arry.push(Math.floor(Math.random()*100))
arry.push(Math.floor(Math.random()*100))
arry.push(Math.floor(Math.random()*100))
arry.push(Math.floor(Math.random()*100))
console.log(arry);
console.log(arry.includes(2))

//slice and splice
const slicedArray = arry.slice(2, 5); // returns a new array from index 2 to 5 (not including 5)
console.log(slicedArray);

const splicedArray = arry.splice(2, 3); // removes 3 elements starting from index 2
console.log(splicedArray);
console.log(arry); // original array is modified

const arryFruits = ["apple", "banana", "cherry", "date"];
const arryVegetables = ["carrot", "broccoli", "spinach"];
const combinedArray = arryFruits.concat(arryVegetables); // combines two arrays
console.log(combinedArray);
//or
const combinedArray2 = [...arryFruits, ...arryVegetables]; // using spread operator
console.log(combinedArray2);

const arryNumbers = [1, 2, 3, 4, 5,[2,567,435,32,76,[456,7543,7567,342],675786,4564,435],545,866,342,987];
const flatArray = arryNumbers.flat(Infinity); // flattens the array up to 2 levels deep
console.log(flatArray);

console.log(Array.from("Hello")); // converts a string to an array of characters
console.log(Array.of(1, 2, 3, 4)); // creates an array from a list of arguments
console.log(Array.isArray(arry)); // checks if arry is an array
console.log(arry.length); // gets the length of the array
console.log(arry.indexOf(3)); // gets the index of the first occurrence of 3
console.log(arry.lastIndexOf(3)); // gets the index of the last occurrence of 3
console.log(arry.reverse()); // reverses the array
console.log(arry.sort()); // sorts the array in place (for numbers, it sorts as strings)
console.log(arry.join(", ")); // joins the array elements into a string with a specified separator
console.log(arry.toString()); // converts the array to a string
console.log(arry.every(num => typeof num === 'number')); // checks if every element is a number
console.log(arry.some(num => typeof num === 'number')); // checks if some element is a number
console.log(arry.filter(num => typeof num === 'number')); // filters    