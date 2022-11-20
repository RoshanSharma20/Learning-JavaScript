console.log('hello world')

const element = document.getElementById('title')
console.log('before', element.innerText)
element.innerText = 'Hello To The Dark'
console.log('after', element.innerText)

const divEle = document.getElementById('divEle')
console.log(divEle.innerText)
const message = 'The Rise is Inevitable'
divEle.innerHTML = `<p>${message}<p>`

let redEle = document.getElementById('red')
let greenEle = document.getElementById('green')
let yellowEle = document.getElementById('yellow')

redEle.onclick = () => { console.log('red') }
greenEle.onclick = () => { console.log('green') }
yellowEle.onclick = () => { console.log('yellow') }

const squares = document.querySelectorAll('.squares')//querySelectorAll is used to select multiple objects with same id name(if class then .<classname>)
const timesClicked = {
    red: 0,
    green: 0,
    yellow: 0
}
squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] += 1
        square.innerText = timesClicked[square.value]
    }
})

console.log('yes this console is working')