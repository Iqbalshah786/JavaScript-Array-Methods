# JavaScript-Array-Methods
8 Must Know JavaScript Array Methods

# JavaScript Array Methods

This repository provides examples and explanations of various JavaScript array methods. Each method is demonstrated with code snippets and comments for clarity.

## Array of Objects Example

```javascript
// An array of objects, each containing a name and a price.
const items = [
    { name: "Bike", price: 100 },
    { name: "TV", price: 200 },
    { name: "Album", price: 10 },
    { name: "Book", price: 5 },
    { name: "Phone", price: 500 },
    { name: "Computer", price: 1000 },
    { name: "Keyboard", price: 25 },
];

// Filter Method
// The filter method creates a new array containing items with a price less than 100.
const filteredItems = items.filter((item) => {
  return item.price < 100;
});
console.log(items); // Interestingly, the filter method does not change the original array.
console.log(filteredItems);
