let player = {
    name: "Player",
    chips: getRandomCard() * 100
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let warningEl = document.getElementById("warning-el");
let buttonEl = document.getElementById("button-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        randomNumber = 11;
    } else if (randomNumber >10) {
        randomNumber = 10;
    }
    return randomNumber
}

function startGame() {
    isAlive = true;
    hasBlackJack= false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    messageEl.style.color = "white";
    warningEl.style.display = "none";
    buttonEl.textContent = "NEW GAME";
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        messageEl.style.color = "skyblue";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        messageEl.style.color = "red";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
    } 
    else {
        warningEl.style.display = "block";
        warningEl.textContent = "Start a New Game!";
        warningEl.style.color = "red";
    }
}


console.log();
