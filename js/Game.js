/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 const overlay = doc.querySelector('#overlay');
 const qwertyKeys = doc.querySelectorAll('#qwerty div button');
 const heartsLIs = doc.querySelectorAll('#scoreboard ol li');

 class Game {
    
    constructor(missed, phrases, activePhrase) {
        this.missed = missed; // Integer
        this.phrases = phrases; // Array
        this.activePhrase = activePhrase; // String
    }

    // Initiates the game
    startGame() {
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        hideElement(overlay);
    }

    // Random chooses a phrase via Math.floor and Math.random from the phrase array
    getRandomPhrase() {
       return this.phrases[getRandomInt(this.phrases.length)];
    }

    // Handles every proper button click and decides wether or not that letter is part of the phrase
    handleInteraction(letterElement) {
        const letter = letterElement.innerHTML.toUpperCase();

        removeClass(letterElement, "key");
        letterElement.disable = "true";

        if (this.activePhrase.checkLetter(letter)) {
            addClass(letterElement, "chosen");
            this.activePhrase.showMatchedLetter(letter);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            addClass(letterElement, "wrong");
            this.removeLife();
        }
    }

    // Loops through the hearts until it finds one that is a liveHeart and replaces it.
    removeLife() {
        this.missed += 1;

        for (const heart of heartsLIs) {
            const heartImg = heart.querySelector('img');

            if (heartImg.src.includes("liveHeart")) {
                heartImg.src = "images/lostHeart.png";
                break;
            }
        }

        if (this.missed === 5) {
            this.gameOver(false);
            return;
        }
    }

    // Every button click this method is called to check if any of the current letters have the hide class to decide if the player won or not
    checkForWin() {
        const phraseLIs = nodeListToArrayList(doc.querySelectorAll("#phrase ul li"));
        let won = true;

        for (const li of phraseLIs) {
            if (hasClass(li, "hide")) {
                won = false;
                break;
            }
        }

        return won;
    }

    // Ran whenever a player ran out of lives or guessed the phrase. Resets the game.
    gameOver(won) {

        function handleStatus(status) {
            doc.querySelector("#overlay h2").innerHTML = `You ${status}!`;
            setClass(overlay, status);
        }

        if (won) {
            handleStatus("win");
        } else {
            handleStatus("lose");
        }

        showElement(overlay);

    
        const phraseUL = doc.querySelector("#phrase ul");

        while (phraseUL.firstChild) {
            phraseUL.removeChild(phraseUL.firstChild);
        }

        qwertyKeys.forEach(key => setClass(key, "key"));
        heartsLIs.forEach(heart => heart.querySelector('img').src = "images/liveHeart.png");
    }
 }