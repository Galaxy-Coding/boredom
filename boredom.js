var lowerLimit = 1;
var upperLimit = prompt("Guess a number 1 to...");
var tries = 1;
var answer = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
var guess = '';
while (tries > 0) {
	
guess = prompt('Try #' + tries + '\nGuess a number between ' + lowerLimit + ' and ' + upperLimit + ':'
, guess);
			
	if (guess == null) {
			alert('Bye! The answer was ' + answer);
		break;
	}
	if (guess == NaN) {
		alert('Bye! The answer was ' + answer);
		break;
	}
	else if (isFinite(guess) && guess != '') {
		guess = +guess;
		if (guess < lowerLimit) {
			alert('Your guess should be no less than ' + lowerLimit + '.');
		}
		else if (guess > upperLimit) {
			alert('Your guess should be no greater than ' + upperLimit + '.');
		}
		else if (guess > answer) {
			alert('Your guess is too high.');
		}
		else if (guess < answer) {
			alert('Your guess is too low');
		}
		else {
			var listTries = tries + 1;
				alert('Great job, you got ' + answer + ' in ' + listTries + ' tries!');
			break;
		}
	}
	else {
		alert('Bye! \nThe answer was ' + answer);
			break;
	}
	
	tries = tries + 1;
function GuessTheNumber(){
}
