//for of

const arry = [1, 2, 3, 4, 5];
for (const element of arry) {
    console.log(element);
}

//maps

const myMap = new Map();
myMap.set("name", "John");
myMap.set("age", 30);
    city: "New York"
myMap.set("isEmployed", true);      

console.log(myMap)

const myobject ={
    name: "John",
    age: 30,
    city: "New York"
}
for(const key in myobject) {
    console.log(key,':', myobject[key]);
}

//foreach
const coding =["rb", "js", "python", "java"];

// coding.forEach(function(val) {
//     console.log(val);
// });

//coding.forEach(function)

coding.forEach((items) => {
    console.log(items);
}
)

//for returning values
const mynumber = [1, 2, 3, 4, 5];
let newnumbs = mynumber.filter((num) => num>2)
console.log(newnumbs); // [5]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  console.log(userBooks);
