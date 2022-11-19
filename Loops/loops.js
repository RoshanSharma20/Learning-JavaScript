//loops in javascript
const fruits = [1, 2, 3, 4, 4, 5, 6]
//simple loop
// for (let i = 0; i < fruits.length; ++i)
//     console.log(fruits[i])
//for of loops
// for (const fruit of fruits)
//     console.log(fruit)
let result = []
// console.log(fruits)
const double = (numbers) => {
    let result = []
    for (const num of numbers)
        result.push(num * 2)

    return result
}

// result = double(fruits)
// console.log(result)

const printLetters = (phrase) => {
    let result = 0
    //for in loop is used to find the indexes of the elements
    for (const letter in phrase) {
        // console.log(letter)
        result = Number(letter) + 1
    }
    return { result }
}

// const answer = printLetters('how are you doing today')
console.log(printLetters('how are you doing'))

//function to calculate the frequency of all letters occuring in a phrase
const countFrequency = (phrase) => {
    const frequency = {}
    for (letter of phrase) {
        if (letter in frequency)
            frequency[letter] = frequency[letter] + 1
        else
            frequency[letter] = 1
    }
    console.log(frequency)
}

// countFrequency('how are you doing')

//function to count the frequency of words in a phrase
const countWords = (phrase) => {
    const Words = phrase.split(' ')//split words on the basis of white spaces and returns an array of the words
    const wordFreqeuncy = {}
    for (const word of Words) {
        if (word in wordFreqeuncy)
            wordFreqeuncy[word] += 1
        else
            wordFreqeuncy[word] = 1
    }
    console.log(wordFreqeuncy)
}

countWords('lol what lol how are you how are you also')