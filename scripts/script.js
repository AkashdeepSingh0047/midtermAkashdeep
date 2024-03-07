let intervalId;

document.addEventListener('DOMContentLoaded', function () {
    intervalId = setInterval(shiftCards, 3000); // Shift cards every 3 seconds (adjust as needed)
});

function shiftCards() {
    const cardsContainer = document.querySelector('.project-cards-container');
    const cards = cardsContainer.querySelectorAll('.project-card');

    // Remove the first card, clone it, and append it to the end
    const firstCard = cards[0];
    cardsContainer.removeChild(firstCard);
    cardsContainer.appendChild(firstCard.cloneNode(true));

    // Update z-index to ensure correct stacking
    cards.forEach((card, index) => {
        card.style.zIndex = cards.length - index;
    });
}

function stopShuffling() {
    clearInterval(intervalId); // Stop the card shifting interval
}

function startShuffling() {
    intervalId = setInterval(shiftCards, 3000); // Restart the card shifting interval
}
