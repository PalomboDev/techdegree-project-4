/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

    constructor(phrase) {
        this.phrase = phrase; // String
    }

    // Adds letter placeholders to the display when the game starts
    addPhraseToDisplay() {
        const phraseUL = doc.querySelector('#phrase ul');

        this.phrase.split("").forEach(letter => {
            const phraseLI = doc.createElement("li");

            if (letter !== "" && letter !== " ") {
                addMulitpleClasses(phraseLI, ["hide", "letter", `${letter}`]);
            } else {
                addClass(phraseLI, "space");
            }

            phraseLI.innerHTML = letter.toUpperCase();
            phraseUL.appendChild(phraseLI);
        });
    }

    // Checks to see if the letter selected by the player matches a letter in the phrase
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        }

        return false;
    }

    // Reveals the letter(s) on the board that matches the player's selection
    showMatchedLetter(letter) {
        const phraseLIs = nodeListToArrayList(doc.querySelectorAll("#phrase ul li"));

        phraseLIs
            .filter(li => hasClass(li, letter))
            .forEach(li => {
                removeClass(li, "hide");
                addClass(li, "show");
            });
    }
 }