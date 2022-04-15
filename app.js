//criando cartas
const cardArray = [
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png'
    },
    {
        name: 'pizza',
        img: './images/pizza.png'
    },
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: './images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: './images/milkshake.png'
    },
    {
        name: 'pizza',
        img: './images/pizza.png'
    },

]

//macete para misturar randomicamente um array
cardArray.sort(() => 0.5 - Math.random())

// selecionando div onde serao dipostos os cards
const grid = document.querySelector("#grid")

function createBoard() {

    for (let i = 0; i < cardArray.length; i++) {

        //criando tags img para imagens do game
        const card = document.createElement("img")
        //criando atributo src para a tag img e atribuindo valor a ele
        card.setAttribute('src', './images/blank.png')
        card.setAttribute('data-id', i)

        //adicionando card(img) no final da grid(div)
        grid.append(card)
    }

}

createBoard()