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

const resultDisplay = document.querySelector("#result")

//cartões escolhidos
let cardChosen = []

//ids dos cards selecionados
let cardsChosenIds = []

//pares encontrados
const cardsWon = []

function createBoard() {

    for (let i = 0; i < cardArray.length; i++) {

        //criando tags img para imagens do game
        const card = document.createElement("img")
        //criando atributo src para a tag img e atribuindo valor a ele
        card.setAttribute('src', './images/blank.png')
        card.setAttribute('data-id', i)

        //ao clicar em um cartão, chama a função flipCard
        card.addEventListener("click", flipCard)
        //adicionando card(img) no final da grid(div)
        grid.appendChild(card)
    }

}

createBoard()

function checkMatch() {

    //pegando todas as cartas
    const cards = document.querySelectorAll('img')

    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    console.log("Check for a match")
    console.log(optionOneId)
    console.log(optionTwoId)


    //tratamento escolha mesmo card
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', './images/blank.png')
        cards[optionTwoId].setAttribute('src', './images/blank.png')
        alert("You have clicked the same card!")

    } else if (cardChosen[0] === cardChosen[1]) {
        alert("You found a match!")

        //quando encontra o par, deixa os cards brancos
        cards[optionOneId].setAttribute('src', './images/white.png')
        cards[optionTwoId].setAttribute('src', './images/white.png')
        //tirando o evento de clique quando o par é encontrado
        cards[optionOneId].removeEventListener("click", flipCard)
        cards[optionTwoId].removeEventListener("click", flipCard)
        cardsWon.push(cardChosen)

    } else {

        //cards virados se o par não for encontrado
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert("Try again!")

    }
    resultDisplay.textContent = cardsWon.length;
    //zerando cardChosen e cardChosenIds
    cardChosen = []
    cardsChosenIds = []

    //tratamento todos os cards virados
    if (cardsWon.length === cardArray.length / 2) {

        resultDisplay.innerHTML = "You won"
    }

}



function flipCard() {

    //this faz referência ao card que foi clicado
    let cardId = this.getAttribute('data-id')
    console.log(cardId)

    // pegando o cartao com base no id clicado

    //enviando nome do cartão selecionado para o arry cardChosen
    cardChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId);

    //substituindo imagem quando o cartão for clicado
    this.setAttribute("src", cardArray[cardId].img)

    if (cardChosen.length == 2) {
        setTimeout(checkMatch, 500)
        console.log(cardChosen)

    }

}

