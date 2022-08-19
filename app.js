const board = document.querySelector('.boardWrapper')

const cardsPaths = [
    './img/dobby.png',
    './img/dumbledore.png',
    './img/harry.png',
    './img/HarryPotter.png',
    './img/ron.png',
    './img/hermoine.png']

function createCardElem(path, ind) {
    const cardWrapper = document.createElement('div')
    cardWrapper.classList.add('cardWrapper')
    const imgFront = document.createElement('img')
    imgFront.setAttribute('data-id', ind)
    imgFront.setAttribute('src', path)
    imgFront.classList.add('cardFront')
    const imgBack = document.createElement('img')
    imgBack.setAttribute('data-id', ind)
    imgBack.setAttribute('src', './img/funko-logo.png')
    imgBack.classList.add('cardBack')
    cardWrapper.appendChild(imgBack)
    cardWrapper.appendChild(imgFront)
    return cardWrapper
}
const cards = []

cardsPaths.forEach((path, ind) => {
    const card = {
        id: ind,
        elem: createCardElem(path, ind),
        isFlippeed: false
    }
    const cardDouble = {
        id: ind + cardsPaths.length,
        elem: createCardElem(path, ind + cardsPaths.length),
        isFlippeed: false
    }
    cards.push(card, cardDouble)
})



cards.sort(() => 0.5 - Math.random()).forEach(card => board.appendChild(card.elem))


board.addEventListener('click', flipCard)
function flipCard({ target }) {
    if (target.closest('.cardFront') || target.closest('.cardBack')) {
        target.classList.toggle('flippedCard')
    }
}