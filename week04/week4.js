//High order function
//USE AI TO PRACTICE
//Question:
//You have an array of numbers. Use a high-order function to create a new array that doubles each number.
// Use a high-order function to double each number
const number = [1, 2, 3, 4, 5];
let k = number.map( num => num * 2 )
console.log(k)
//🔹 Question:
// an array of people, filter out only adults (age >= 18) and calculate the total age of all adults using high-order functions.
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 21 },
  { name: 'Charlie', age: 18 },
  { name: 'David', age: 15 }
];
// Use filter and reduce
let c = people.filter(person => person.age >= 18);
let a = c.reduce((sum, person) => sum + person.age, 0);
console.log(c);
console.log(a)
// 🔹 Question:
// Create a function customFilter that behaves like the built-in .filter() method.
function customFilter(arr, callback) {
  // Your code here
  let g = arr.filter( num => callback(num)) 
  return g
}
const numbers = [1, 2, 3, 4, 5];
const evens = customFilter(numbers, function(num) {
  return num % 2 === 0;
});
console.log(evens); // [2, 4]
 
 