# techdegree-project-4

Project #4 for FSJS

Project Name: Object-Oriented Programming (OOP) Game Show App

Hosted Version: https://palombodev.github.io/techdegree-project-4/

Style Changes I made:
 - Added a popout to the letter keys
 - Changed "Phrase Hunter" Font
 - Changed background to grey
 - Added a 15% invert filter to the body
 - A 1px of text shadow to the button's text
 
 Expectations I Exceeded:
  - Added the ability to type letters instead of clicking them
  - Personalized the page to my own liking
  - Added a utils.js to make simple tasks more efficient



Understand the rules of the game:

- The player’s goal is to guess all the letters in a hidden, random phrase. At the beginning, the player only sees the number of letters and words in the phrase, represented by blank boxes on the screen.
- The player clicks an onscreen keyboard to guess letters in the phrase.
- The letter is disabled on the onscreen keyboard and a player can't select that letter again.
- If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once).
- If the selected letter is not in the phrase, one of the player's hearts in the scoreboard is changed from a "live" heart to a "lost" heart.
- The player keeps choosing letters until they reveal all the letters in the phrase, or they make five incorrect guesses.
