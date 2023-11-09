//  an array of objects, each containing a name and a price.
const items = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
    { name: "Keyboard", price: 25 },
  ],
  numbers = [1, 2, 3, 4, 5];

// filter method

// the filter method  creates a new array containing items with a price less than 100.
const filteredItems = items.filter((item) => {
  // Returns true for items with a price less than 100, and adds them in the filteredItems array.
  return item.price < 100;
});
console.log(items); // interestingly the filter method does not change the original array.
console.log(filteredItems);

//map method
const itemNames = items.map((items) => {
  return items.name;
});

console.log(itemNames); //[ 'Bike', 'TV', 'Album', 'Book', 'Phone', 'Computer', 'Keyboard' ]

// Key Difference:

//     map: Transforms each element and creates a new array with the same length.
//     filter: Creates a new array by selecting elements that meet a specified condition.

// find method

//// The `find` method returns the first element in an array that satisfies a given condition.
//In this case, it searches for an object in the `items` array where the `name` property is equal
// to "Book" and returns that object. If no element satisfies the condition, `find` returns `undefined`.
const foundItem = items.find((item) => {
  return item.name === "Book";
});
console.log(foundItem); //{ name: 'Book', price: 5 }

//foreach method
//// The forEach method is used to iterate over an array and execute a function for each element.
//In this case, we are logging the name property of each item in the array to the console.
items.forEach((item) => {
  console.log(item.name);
});

//some method
//the some method returns a boolean value if any of the items in the array satisfy the condition.
const hasInexpensiveItems = items.some((item) => {
  return item.price < 100;
});
console.log(hasInexpensiveItems); //true

//every method
// the every method returns a boolean value if all of the items in the array satisfy the condition.
const expensiveItems = items.every((item) => {
  return item.price > 100;
});
console.log(expensiveItems); //false

//reduce method

const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total); //1840

//includes method
// the includes method returns a boolean value if the array contains the specified value.
const includeValue = numbers.includes(2);
console.log(includeValue); //true
