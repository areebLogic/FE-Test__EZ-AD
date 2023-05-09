const eventCardWrapper = document.querySelector('.event__card__wrapper');
const eventCards = document.querySelectorAll('.event__card');
const prevBtn = document.querySelector('.prev__btn');
const nextBtn = document.querySelector('.next__btn');

let cardIndex = 0;
let cardsPerPage = 4;
let cardWidth = eventCards[0].clientWidth;
let cardMarginRight = parseInt(window.getComputedStyle(eventCards[0]).marginRight);

function moveCards() {
eventCardWrapper.style.transform = translateX(`${-((cardWidth + cardMarginRight) * cardIndex)}px`);
}


nextBtn.addEventListener('click', () => {
  const cardWrapper = document.querySelector('.event__card__wrapper');
  const cardWidth = document.querySelector('.event__card').offsetWidth;
  const scrollDistance = cardWidth + 32; // considering margin-right: 32px;
  const scrollThreshold = cardWidth * 4 + 32 * 3; // considering displaying 4 cards at a time
  
  if (cardWrapper.scrollLeft + scrollThreshold >= cardWrapper.scrollWidth) {
    cardWrapper.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    cardWrapper.scrollBy({ left: scrollDistance, behavior: 'smooth' });
  }
});

prevBtn.addEventListener('click', () => {
  const cardWrapper = document.querySelector('.event__card__wrapper');
  const cardWidth = document.querySelector('.event__card').offsetWidth;
  const scrollDistance = cardWidth + 32; // considering margin-right: 32px;
  const scrollThreshold = cardWidth * 4 + 32 * 3; // considering displaying 4 cards at a time
  
  if (cardWrapper.scrollLeft - scrollDistance < 0) {
    cardWrapper.scrollTo({ left: cardWrapper.scrollWidth - scrollThreshold, behavior: 'smooth' });
  } else {
    cardWrapper.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
  }
});


// Clone the cards for looping
for (let i = 0; i < cardsPerPage; i++) {
eventCardWrapper.appendChild(eventCards[i].cloneNode(true));
}

// Reset cardIndex and move cards to the first page
cardIndex = 0;
moveCards();

// Auto loop cards
setInterval(() => {
handleNextBtn();
}, 3000); // Change the interval time as per your requirement