$(document).ready(function(){
    var wins = 0;
    var losses = 0;
    var guessNumber = 10;
    var recentGuesses = "";
    var keysArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var randomKey = ""

    console.log("BIG BOY");

    function setPageText(){

        $("#WinsText").text("Wins: " + wins);

        $("#LossesText").text("Losses: " + losses);
    
        $("#GuessLeftText").text("Guesses left: " + guessNumber);
    
        $("#CurrentGuessText").text("Your guesses so far: " + recentGuesses);

    }

    function randomKeyFunc(){

        randomKey = keysArray[Math.floor(Math.random() * 26)];

    }

    function resetPage(){

        guessNumber = 10;
        recentGuesses = "";
        setPageText();
        randomKeyFunc();

    }

    setPageText();

    document.onkeypress = function(keyPressed){

        guessNumber -= 1;
        var key = keyPressed.key;
        randomKeyFunc()
        recentGuesses = recentGuesses + key + ", ";
        if(guessNumber <= 0){

            losses +=1;
            resetPage();

        }

        if( randomKey.toLowerCase() == key.toLowerCase()) {

            wins += 1;
            resetPage();

        }
        setPageText();



    }

});