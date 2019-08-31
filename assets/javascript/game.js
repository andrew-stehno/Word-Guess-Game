// create an array of mystery words
// create an blank array of user guesses 
// using Math, pick word at random
// display mystery word using blanks _ _ _ _...
// any key to start
// .toLowerCase and verify letter input only
/* if userGuess = correct letter, display letter, generate audio.  else decrement guessesLeft
    and push to guessesSoFar.*/
// if word = mysteryWord, increment wins, generate audio, reset guessesSoFar.

mysteryWord = ['tack', 'gybe', 'ready about', 'gybe ho', 'running', 'close hauled', 'beam', 'spinnaker', 'jib', 'main sail'];
    console.log(mysteryWord);
randomNumber = Math.floor((Math.random() * mysteryWord.length));
    console.log(randomNumber);
computerGuess = mysterWord[randomNumber];
    console.log(computerGuess);
guessesLeft = 12
guessesSoFar = [];
wins = 0
losses = 0
