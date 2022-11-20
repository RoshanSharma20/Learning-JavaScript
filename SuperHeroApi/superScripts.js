const Base_url = 'https://superheroapi.com/api.php/194453949696405'
const body_img = document.getElementById('heroImg')
const hero_name = document.getElementById('heroName')
const refresh_button = document.getElementById('refresh')
const getNewHero = (id) => {
    fetch(`${Base_url}/${id}`).then(response => response.json()).then(json => {
        body_img.innerHTML = `<img src="${json.image.url}" height=300 width=300/>`
        const stats = getStats(json)
        hero_name.innerHTML = `<h1>${json.name}</h1>${stats}`
        console.log('next hero')
    })
}
const getStats = (character) => {//Object.keys(loops through an object and returns an array of keys)
    const stats = Object.keys(character.powerstats).map(stat => { return `<p>${stat}:${character.powerstats[stat]}` })
    return stats.join(' ')//converting an array into a string,so as to be displayed into the DOM
}
refresh_button.onclick = () => getNewHero(Math.ceil(Math.random() * 731))
