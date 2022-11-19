//Higher Order Funcutions in JavaScript

//Map ->used to loop through arrays and also returns array
const numbers = [1, 2, 3, 4, 5]
numbers.map(number => console.log(number))//loops through the array,implicit return

const double = (numbers) => {
    let result = numbers.map(number => number * 2)//loops through array,executes the statements and returns array
    return result
}

console.log(double(numbers))
//Filter -> used to loop through and checks for the condition,also returns an array
const filterFunc = (numbers) => {
    let result = numbers.filter(number => number > 3)
    return result
}

console.log(filterFunc(numbers))

//Reduce ->used to loop through array and returns the accumulator

const TotalSum = (numbers) => {
    let result = numbers.reduce((prev, curr) => prev + curr, 0)//reduce takes in a function and a value,when it loops the initial value of the prev is 0
    return result
}
console.log(TotalSum(numbers))