// GLOBAL VAR 
//WIN/LOSS/LIVES
    var amountLives = 10;
    var amountWin = 0;
    var amountLoss = 0;
    


// ARRAY VAR
    var listLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var letterIndex = 0;
    var letterGuess = null;
    var guessLetter = [];
    var guessLeftLetter = null;
    

    //Grab random letter
    var computerGuess = listLetters[Math.floor(Math.random() * listLetters.length)];
    console.log(computerGuess)

// FUNCTION
    //Function to start the game


    var updateLetter = function () {
        this.letterGuess = this.listLetters[Math.floor(Math.random() * this.listLetters.length)];
    };
    var resetGame = function () {
        amountLives = 10;
        updateLetter();
    };
    
    updateLetter();

    
// MAIN PROCCESS

    document.onkeyup = function(event) {

        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(computerGuess)



        if (userGuess === computerGuess) {
            alert("You win! Click okay to restart.")
            updateLetter();
            resetGame();
            amountWin++;
        } 
        else {
            amountLives--;
        }
        if (amountLives === 0) {
            alert("You lost! Click okay to restart.")
            updateLetter();
            resetGame();
            amountLoss++;

        }
        var html =
        "<p>You chose: " + userGuess + "</p>" +
        "<p>The computer chose: " + computerGuess + "</p>" +
        "<p>wins: " + amountWin + "</p>" +
        "<p>losses: " + amountLoss + "</p>" +
        //"<p>Guesses so far: " + guessLetter "</p>"
        "<p>lives: " + amountLives + "</p>";

      // Set the inner HTML contents of the #game div to our html string
        document.querySelector("#game").innerHTML = html;
    };
    
    


