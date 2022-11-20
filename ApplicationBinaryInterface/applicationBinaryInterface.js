const divEle = document.getElementById('dogImage')
const changeButton = document.getElementById('refresh')

const refresh = () => {
    fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(json => {
        divEle.innerHTML = `<img src="${json.message}" height=300 width=300/>`
    })
}

changeButton.onclick = () => refresh()