var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

function createBoard() {

for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);

 cardElement.addEventListener('click', isTwoCards);

    board.appendChild(cardElement.innerHTML = '<img src="my_king.png" alt="King of Spades" />');
  }

}

function isMatch(cards) {

  if (cards[0] === cards[1]) {

    alert("You found a match!");

  }

  else {

    alert("Sorry, try again.");

  }


function isTwoCards() {

  cardsInPlay.push(this.getAttribute('data-card'));

  if (cardsInPlay.length === 2) {

    isMatch(cardsInPlay);

    cardsInPlay = [];

  }
}
  }

createBoard();