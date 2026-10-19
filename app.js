'use strict'

const homeLink = document.getElementById('home')
const fireLink = document.getElementById('fire')
const waterLink = document.getElementById('water')
const grassLink = document.getElementById('grass')
const legendaryLink = document.getElementById('legendary')

async function buscarPokemonsPorTipo(tipo) {
    const url = `https://pokeapi.co/api/v2/type/${tipo}`
    const response = await fetch(url)
    const data = await response.json()

    const listaBasica = data.pokemon.slice(0, 12)

    const promessas = listaBasica.map(async (item) => {
        const res = await fetch(item.pokemon.url)
        return await res.json()
    })

    return await Promise.all(promessas)
}

async function buscarLendarios() {
    const idsLendarios = [144, 145, 146, 150, 151, 243, 244, 245, 249, 250, 382, 383, 384]
    
    const promessas = idsLendarios.map(async (id) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        return await res.json()
    })

    return await Promise.all(promessas)
}

function criarCardPokemon(pokemon) {
    const card = document.createElement('div')
    card.className = 'card'

    const tipos = pokemon.types.map(t => t.type.name).join(', ')

    card.onclick = () => alert(`Pokemon #${pokemon.id}\nNome: ${pokemon.name}\nTipo: ${tipos}`)

    const id = document.createElement('span')
    id.className = 'card-id'
    id.textContent = `#${pokemon.id}`

    const img = document.createElement('img')
    img.src = pokemon.sprites.front_default
    img.alt = pokemon.name

    const nome = document.createElement('h3')
    nome.textContent = pokemon.name.toUpperCase()

    const tipoSpan = document.createElement('span')
    tipoSpan.textContent = `Tipo: ${tipos}`

    card.append(id, img, nome, tipoSpan)

    return card
}

function homePage(){
    const root = document.getElementById('root')
    root.className = 'home'
    const titulo = document.createElement('h1')
    titulo.classList.add('titulo')
    titulo.textContent = 'Pokemons'
    root.replaceChildren(titulo)

}

async function firePage() {
    const root = document.getElementById('root')
    root.className = 'fire'

    const titulo = document.createElement('h1')
    titulo.classList.add('titulo')
    titulo.textContent = 'Fire'

    const texto = document.createElement('p')
    texto.textContent = 'Carregando Pokémons de fogo...'

    const container = document.createElement('div')
    container.className = 'pokemons-container'

    root.replaceChildren(titulo, texto, container)

    const pokemons = await buscarPokemonsPorTipo('fire')
    texto.textContent = 'Pokémons de fogo'

    pokemons.forEach(pokemon => {
        const card = criarCardPokemon(pokemon)
        container.appendChild(card)
    })
}

async function waterPage() {
    const root = document.getElementById('root')
    root.className = 'water'

    const titulo = document.createElement('h1')
    titulo.classList.add('titulo')
    titulo.textContent = 'Water'

    const texto = document.createElement('p')
    texto.textContent = 'Carregando Pokémons de água...'

    const container = document.createElement('div')
    container.className = 'pokemons-container'

    root.replaceChildren(titulo, texto, container)

    const pokemons = await buscarPokemonsPorTipo('water')
    texto.textContent = 'Pokémons de água'

    pokemons.forEach(pokemon => {
        const card = criarCardPokemon(pokemon)
        container.appendChild(card)
    })
}

async function grassPage() {
    const root = document.getElementById('root')
    root.className = 'grass'

    const titulo = document.createElement('h1')
    titulo.classList.add('titulo')
    titulo.textContent = 'Grass'

    const texto = document.createElement('p')
    texto.textContent = 'Carregando Pokémons de grama...'

    const container = document.createElement('div')
    container.className = 'pokemons-container'

    root.replaceChildren(titulo, texto, container)

    const pokemons = await buscarPokemonsPorTipo('grass')
    texto.textContent = 'Pokémons de grama'

    pokemons.forEach(pokemon => {
        const card = criarCardPokemon(pokemon)
        container.appendChild(card)
    })
}

async function legendaryPage() {
    const root = document.getElementById('root')
    root.className = 'legendary'

    const titulo = document.createElement('h1')
    titulo.classList.add('titulo')
    titulo.textContent = 'Legendary'

    const texto = document.createElement('p')
    texto.textContent = 'Carregando Pokémons lendários...'

    const container = document.createElement('div')
    container.className = 'pokemons-container'

    root.replaceChildren(titulo, texto, container)

    const pokemons = await buscarLendarios()
    texto.textContent = 'Pokémons lendários'

    pokemons.forEach(pokemon => {
        const card = criarCardPokemon(pokemon)
        container.appendChild(card)
    })
}

homePage()

homeLink.onclick = homePage
waterLink.onclick = waterPage
fireLink.onclick = firePage
grassLink.onclick = grassPage
legendaryLink.onclick = legendaryPage
