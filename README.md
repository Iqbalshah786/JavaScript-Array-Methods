# JavaScript-Array-Methods
8 Must Know JavaScript Array Methods

# JavaScript Array Methods

This repository provides examples and explanations of various JavaScript array methods. Each method is demonstrated with code snippets and comments for clarity.

## Array of Objects Example
An array of objects, each containing a name and a price.
```javascript
const items = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
    { name: "Keyboard", price: 25 },
];
```
## Filter Method
 The filter method creates a new array containing items with a price less than 100. The filter method does not change the original array.
```javascript
const filteredItems = items.filter((item) => {
  return item.price < 100;
});
console.log(items); 
console.log(filteredItems);
```
## Map Method
The map method transforms each element and creates a new array with the same length.
```javascript
const itemNames = items.map((item) => {
  return item.name;
});
console.log(itemNames); // [ 'Bike', 'TV', 'Album', 'Book', 'Phone', 'Computer', 'Keyboard' ]
```
## Find Method
The find method returns the first element in an array that satisfies a given condition.
In this case, it searches for an object in the `items` array where the `name` property is equal
to "Book" and returns that object. If no element satisfies the condition, `find` returns `undefined`.
```javascript
const foundItem = items.find((item) => {
  return item.name === "Book";
});
console.log(foundItem); // { name: 'Book', price: 5 }
```
## ForEach Method
The forEach method is used to iterate over an array and execute a function for each element.
In this case, we are logging the name property of each item in the array to the console.
```javascript
items.forEach((item) => {
  console.log(item.name);
});
```
## Some Method
The some method returns a boolean value if any of the items in the array satisfy the condition.
```javascript
const hasInexpensiveItems = items.some((item) => {
  return item.price < 100;
});
console.log(hasInexpensiveItems); // true
```
## Every Method
The every method returns a boolean value if all of the items in the array satisfy the condition.
```javascirpt
const expensiveItems = items.every((item) => {
  return item.price > 100;
});
console.log(expensiveItems); // false
```
## Reduce Method
The reduce method is used to calculate the total price of all items in the 'items' array.
```javascirpt
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total); // 1840
```
## Includes Method
 The includes method returns a boolean value if the array contains the specified value.
```javascirpt
const includeValue = numbers.includes(2);
console.log(includeValue); // true
```
