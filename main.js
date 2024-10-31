const decks = Array.from(document.querySelectorAll("main"));
const slides = decks.map((main) => (Array.from(main.querySelectorAll("section"))));
let currentSlide = 0;
let currentDeck = 0;

document.getElementById("next-slide").addEventListener("click", onNextSlideClick);
document.getElementById("previous-slide").addEventListener("click", onPrevSlideClick);
document.getElementById("next-deck").addEventListener("click", onNextDeckClick);
document.getElementById("previous-deck").addEventListener("click", onPrevDeckClick);

function updateAll(deck = true) {
  if (deck) updateDeck();
  updateSlide();
  updateCounters();
}

function updateDeck() {
  decks.forEach((main) => (main.style.display = "none"));
  decks[currentDeck].style.display = "flex";
}

function updateSlide() {
  decks[currentDeck].style.transform = `translateX(${currentSlide * window.innerWidth * -1}px)`;
}

function updateCounters() {
  document.getElementById("slide-count").innerText = `Slide: ${currentSlide + 1}/${slides[currentDeck].length}`;
  document.getElementById("deck-count").innerText = `Deck: ${currentDeck + 1}/${decks.length}`;
}

updateAll();

function onNextSlideClick() {
  if (currentSlide < slides[currentDeck].length - 1) {
    currentSlide++;
    updateAll(false);
  } else if (currentDeck < decks.length - 1) {
    currentDeck++;
    currentSlide = 0;
    updateAll();
  }
}

function onPrevSlideClick() {
  if (currentSlide > 0) {
    currentSlide--;
    updateAll(false);
  } else if (currentDeck > 0) {
    currentDeck--;
    currentSlide = slides[currentDeck].length - 1;
    updateAll();
  }
}
function onNextDeckClick() {
  if (currentDeck < decks.length - 1) {
    currentDeck++;
    currentSlide = 0;
    updateAll();
  }
}
function onPrevDeckClick() {
  if (currentDeck > 0) {
    currentDeck--;
    currentSlide = 0;
    updateAll();
  }
}
