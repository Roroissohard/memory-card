const cards = document.querySelectorAll(".card"),

let matchCards = 0;
let cardOne, cardTwo,
let disableDeck = false;

function flipCard(e) {
let clickedCard = e.target;
if(clickedCard !== cardOne && !disableDeck) {
clickedCard.classList.add("flip");
if(!cardOne) {

    return cardOne = clickedCard;
}
cardTwo = clickedCard;
disableDeck = true;
let cardOneImg = cardOne.querySelector9("img"),
cardTwoImg = cardTwo.querySelector("img");
matchCards(cardOneImg, cardTwoImg);
}
}

function matchCards(img1, img2) {
    if(img1 === img2) {
        matchCard++;
        if(matchCards === 8) {
            shuffleCardd();
        }
        cardOne.classList.remove("click", flipCard);
        cardTwo.classList.remove("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = true;
       
    }
    setTimeout(() => {
        cardOne.classList.remove("shake");
        cardTwo.classList.remove("shake");
      
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = ""
        disableDeck = false

    }, 1200);
}

function shuffleCards() {
}

cards.forEach(card => {
card.addEventListener("click", flipCard);
});