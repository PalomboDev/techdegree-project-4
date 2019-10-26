/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Phrases
const phrases = [
    "quality time",
    "fish out of water",
    "a piece of cake",
    "would not harm a fly",
    "a chip on your shoulder"
];

// Game object pre-defined
let game;

// Gets the button start click and then creates a new game instance to be played on
doc.querySelector('#btn__reset').addEventListener('click', (event) => {
    event.preventDefault();
    phrases.map(phrase => phrase.toUpperCase());

    game = new Game(0, phrases, null);

    game.startGame()
    hideElement(overlay);
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

/*
    Added popout to hover over keys
    Changed fonts
    Changed Phrase hunter coors
    Changed background to grey
    Added a 15% invert filter
    Added 1px text shadow to button text
*/