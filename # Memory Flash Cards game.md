# Memory Flash Cards

## Date: 22/09/2025

### By: Ali Tulefat

***

### ***Description***
#### This is a memory card matching game played on a 3x3 grid. Players click a card to flip it, then select a second card to reveal its image. If the images do not match, both cards flip back. If they match, the cards remain face-up, the player earns a point, and the game continues until all pairs are matched. The objective is to achieve a score of 4. However, if the player makes five mistakes, the game ends in a loss.

***

### ***Getting Started***

##### In the Home page press start button to start the game.
##### The screen will show 3 by 3 total of nine cards
##### At the beginning cards are face down.
##### There are four pairs of identical cards and one more card is extra.
***

### ***Credits***

##### card Images: [Pinterest Search](http://www.pinterest.com)

<!-- #####

##### -->
***
##### Home page
![Home page](https://i.postimg.cc/cLSq2rNP/flash-cards-game.png)

### ***Pseudocode***
•  Build the HTML structure with 9 image cards (same class, different IDs), plus a score display and a reset button.

•  Use CSS to arrange the cards into a 3×3 grid and adjust their size and spacing.

•  In JavaScript, set up global variables for score, attempts, win/loss conditions, and an array for the shuffled cards. Connect the script to the card elements, score display, and reset button.

•  Create functions to: initialize the game, update the score/message, reveal cards on click, and check whether two revealed cards match.

•  Add event listeners so that clicking cards flips them and checks for a match, while clicking the reset button restarts the game.

•  Apply the game rules: matching cards stay face-up and add to the score; non-matching cards flip back and count as failed attempts.

•  End the game if the score reaches four (win) or if two failed attempts are made (loss).

