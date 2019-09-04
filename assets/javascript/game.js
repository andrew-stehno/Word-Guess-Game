
// display mystery word using blanks _ _ _ _...


/* if userGuess = correct letter, display letter, generate audio.  else decrement guessesLeft
    and push to guessesSoFar.*/
// if word = mysteryWord, increment wins, generate audio, reset guessesSoFar.

// create an array of mystery words
let mysteryWord = ['tack', 'gybe', 'ready about', 'gybe ho', 'running', 'close hauled', 'beam', 'spinnaker', 'jib', 'main sail'];
console.log(mysteryWord);
// using Math, pick word at random
let randomNumber = Math.floor((Math.random() * mysteryWord.length));
console.log("random number: " + randomNumber);
let computerGuess = mysteryWord[randomNumber];
console.log("computer guess: " + computerGuess);
let blankDisplay = generateBlanks(computerGuess);
//let blankDisplay = computerGuess.split('').map(_=>'_');
console.log(blankDisplay);
let guessesLeft = 12
// create a blank array of user guesses
let guessesSoFar = [];
let wins = 0
let losses = 0
// displayAll();
function generateBlanks(word) {
    const results = [];
    for (let i = 0; i < word.length; i++) {
        if(word[i] === ' '){
            results.push(' ');
        }
        else {
            results.push('_');
        }
    }
    return results;
}

const allLetters = ("abcdefghijklmnopqrstuvwxyz").split("")

function displayAll() {
    //This hsould update ALL values in the DOM
    document.getElementById("mystery-word").innerHTML = "<p>" + blankDisplay.join(' ') + "<p>";
}
const isWordComplete = () => !blankDisplay.some(char => char === '_');
// any key to start
document.onkeyup = function (event) {
    let userGuess = event.key;

    // .toLowerCase and verify letter input only
    if (allLetters.indexOf(userGuess.toLowerCase()) > -1) {

        for (var i = 0; i < computerGuess.length; i++) {
            if (computerGuess[i] === userGuess.toLowerCase()) {
                //We ahve a valid letter in our word
                blankDisplay[i] = computerGuess[i];
            }

        }
        guessesLeft--;

        //We need to check has the user won
        //Loop through the blank array and see if any underscores exist
        //if they do they didnt win
        if(isWordComplete()){
            //user has won
            wins++
            alert("Congratulations!");
        }
        //We need to check has the user Lost
        if(guessesLeft === 0){
            //user lost
            losses++
            alert("You Lose!");
        }
    displayAll();

    }
    else {
        alert("Invalid input, please enter a letter.")
    }
}
