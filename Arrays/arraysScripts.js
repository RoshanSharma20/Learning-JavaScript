//Arrays in JavaScript
console.log('Arrays in javascript')
const fruits = ['apple', 'banana', 'pear']
console.log(fruits)
//array methods
fruits.push('guava')
console.log(fruits)
//array slice 
//starting from 0 upto 2 excluding element present at index 2
console.log(fruits.slice(0, 2))
//if element at index 2 must be includede then
console.log(fruits.slice(0, 6))//note even if the index is out of bounds,it doesn't return any error
//arrays indexOf
console.log(fruits.indexOf('blueberry'))//if element is not it will return -1
console.log(fruits.indexOf('banana'))//returns the index of the element in the array
//length of array
console.log(fruits.length)
