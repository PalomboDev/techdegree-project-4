/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Phrases
const phrases = [
    new Phrase("quality time"),
    new Phrase("fish out of water"),
    new Phrase("a piece of cake"),
    new Phrase("would not harm a fly"),
    new Phrase("a chip on your shoulder")
];

// Game object pre-defined
let game;

// Gets the button start click and then creates a new game instance to be played on
doc.querySelector('#btn__reset').addEventListener('click', (event) => {
    event.preventDefault();
    phrases.forEach(phrase => phrase.phrase = phrase.phrase.toUpperCase());

    game = new Game(0, phrases, null);

    game.startGame();
});

// Keeps me from having to make a click for every key.
// Loops through everything in the "#qwerty" div and checks if it has the key class or not to decide if it can be clicked.
doc.querySelector('#qwerty').addEventListener('click', (event) => {
    event.preventDefault();

    const target = event.target;

    if (!isHidden(overlay)) return;

    if (target.classList.contains('key') 
        && !hasClass(target, "wrong") 
        && !hasClass(target, "chosen")) {
        game.handleInteraction(target);
    }
})

// Gives the ability to press a key instead of having to click the key
doc.addEventListener("keyup", (event) => {
    event.preventDefault();

    if (!isHidden(overlay)) return;

    for (const key of qwertyKeys) {
        if (key.innerHTML.toUpperCase() === event.key.toUpperCase()) {
            key.click();
            break;
        }
    }
});