//Asynchronous programming

//example of asynchronous programming using setTimeout

const orderSoup = () => console.log('your soup is here')

console.log('you enter the restaurant')//line 1
//setTimeout function is used to create a delay to execute a function
setTimeout(orderSoup, 2000)//line 2
console.log('conversation is still going on')//line 3


//Promises in JavaScript
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const isReady = [true, false][Math.floor(Math.random() * 2)]
        isReady ? resolve('your soup is ready') : reject('no soup today')
    }, 3000)
})

console.log(promise1.then(success => console.log(success)).catch(error => console.log(error)))

//Async/Await
//rules for using using async/await in asynchronous programming
//1.async can be used for funnctions
//2.we need to the use the keywords async and await

const asyncOrderSoup = async () => {
    const rating = {
        pay: null,
        tip: null
    }
    try {//try block is executed when the promise is a success
        const data = await promise1
        console.log(data)
        rating.pay = 100
        rating.tip = 0.2
        return rating
    } catch (error) {//otherwise the reject block of the promise is returned to the catch block 
        console.log(error)
        return rating
    }
}

asyncOrderSoup().then(value => console.log(value))