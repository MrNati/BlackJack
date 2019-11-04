/*
*
*Variables
*
*/

// DOM variables
let textArea = document.querySelector('#text-area'),
    newGameButton = document.querySelector('#new-game-button'),
    hitButton = document.querySelector('#hit-button'),
    stayButton = document.querySelector('#stay-button');

//Card variables
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'],
    values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 
        'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

//Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [];
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

/*
*
*Play Game
*
*/

//Hide Hit and Stay Button at the start of the Game
hitButton.style.display = 'none';
stayButton.style.display = 'none';

//Add some function to new game button
newGameButton.addEventListener('click', function () {
    textArea.innerText = 'Game Started...';
    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
});

//create deck
function createDeck() {
    let deck = [];

    //add available cards to the deck
    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
        for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
            let card = {
                suit: suits[suitIdx],
                value: values[valueIdx]
            };
            deck.push(card);
        }
    }

    return deck;
}

//intiate deck
let deck = createDeck();

//get card from deck
function getNextCard() {
    return deck.shift();
}

//create card string
function getCardString(playerCard) {
    return playerCard.value + ' of ' + playerCard.suit;
}

//player card
let playerCards = [
    getCardString(getNextCard()), 
    getCardString(getNextCard())
];

//welcome message
console.log('Welcome to Blackjack!');

//card in play
console.log('You are dealt: ');
console.log(' ' + playerCards[0]);
console.log(' ' + playerCards[1]);
