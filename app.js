'use strict'

const homeLink = document.getElementById('home')
const fireLink = document.getElementById('fire')
const waterLink = document.getElementById('water')
const grassLink = document.getElementById('grass')
const legendaryLink = document.getElementById('legendary')

function criarCardPokemon(curso) {
    const card = document.createElement('div')
    card.className = 'card'

    card.onclick = () => alert(`Pokemon #${curso.id}\nTítulo: ${curso.titulo}\nDuração: ${curso.duracao}`)

    const id = document.createElement('span')
    id.className = 'card-id'
    id.textContent = `#${curso.id}`

    const titulo = document.createElement('h3')
    titulo.textContent = curso.titulo

    const duracao = document.createElement('span')
    duracao.className = 'card-duracao'
    duracao.textContent = `Duração: ${curso.duracao}`

    card.append(id, titulo, duracao)

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

function firePage(){
    const root = document.getElementById('root')
    root.className = 'about'
    const titulo = document.createElement('h1')
    titulo.classList.add('titulo')
    titulo.textContent = 'Fire'

    const texto = document.createElement('p')
    texto.textContent = 'Pokemons de fogo'

    root.replaceChildren(titulo, texto)
}

function waterPage(){
    const root = document.getElementById('root')
    root.className = 'about'
    const titulo = document.createElement('h1')
    titulo.classList.add('titulo')
    titulo.textContent = 'Water'

    const texto = document.createElement('p')
    texto.textContent = 'Pokemons de água'

    root.replaceChildren(titulo, texto)
}

function grassPage(){
    const root = document.getElementById('root')
    root.className = 'about'
    const titulo = document.createElement('h1')
    titulo.classList.add('titulo')
    titulo.textContent = 'Grass'

    const texto = document.createElement('p')
    texto.textContent = 'Pokemons de grama'

    root.replaceChildren(titulo, texto)
}

function legendaryPage(){
    const root = document.getElementById('root')
    root.className = 'about'
    const titulo = document.createElement('h1')
    titulo.classList.add('titulo')
    titulo.textContent = 'Legendary'

    const texto = document.createElement('p')
    texto.textContent = 'Pokemons lendários'

    root.replaceChildren(titulo, texto)
}

homePage()

homeLink.onclick = homePage
waterLink.onclick = waterPage
fireLink.onclick = firePage
grassLink.onclick = grassPage
legendaryLink.onclick = legendaryPage
