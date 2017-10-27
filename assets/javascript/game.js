// GLOBAL VAR 
//WIN/LOSS/LIVES
    var amountLives = 10;
    var amountWin = 0;
    var amountLoss = 0;


// ARRAY VAR
    var listLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var letterIndex = 0;
    var wordIndex = 0;
    var wordList = ["avacado","melon","strawberry","apple","raspberries","passionfruit"];
    var wordPicked = "";

// ARRAY VAR FOR PLAYER CHOICE
    //list of letters in word
    var letterCount = [];
    //how many underscores are needed
    var blankHold = 0;
    //holds amount of underscores
    var letterUnderscore = [];
    //holds correct guesses
    var letterUnderscoreGuess = [];
    //holds wrong letter chosen
    var wrongLetter = [];



// FUNCTION
    //Function to start the game
    function startGame() {
        //random choice of word
        var wordPicked = wordList[Math.floor(Math.random() * wordList.length) + 1];
        //split word into letters ???? look up
        var amountLetters = wordPicked.split('');
        //turn word into '_' underscore
        var blankHold = amountLetters.length;
        //counter amount
        var amountLives = 10;
        var letterCount = [];
        var blankHold = 0;
        var letterUnderscore = [];
        var letterUnderscoreGuess = [];
        var wrongLetter = [];

    
    //HTML  updates
        document.getElementById('numberOfLives').innerHTML = amountLives;
        document.getElementById('wordHangman').innerHTML = letterUnderscoreGuess.join(' ');
        document.getElementById('winCounter').innerHTML = amountWin;
        document.getElementById('lossCounter').innerHTML = amountLoss;
        document.getElementById('wrongGuesses').innerHTML = wrongLetters;                      
    //fill 
    for(var i = 0; i < letterUnderscore; i++)
        {
            letterUnderscoreGuess.push('_');
            document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
        }


 
    }
    //Function to restart the game
    function restartGame() {
        
            }
    //Function to choose letter

    function chooseLetter () {

    }
    //Function to update score
    function updateScore() {

    }
    //Function for letter press
    function letterPressO() {

    }


// MAIN PROCCESS

    document.onkeyup = function(event) {
        function startGame()

        if (letter === randLetter) {
            amountWin++;
        } 
        else {
            amountLives--;
        }
        if (amountLives === 0) {
            amountLoss++
        }
    };
    
    


