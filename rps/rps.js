// Aizah Rao

//Global Variables
var youWin = 33
var computerWin = 0 
var ties = 0 
var ComputerChoices = ['rock','paper','scissors']

function rpsJudge (choice1, choice2) {  
//compare two choices (rock, paper, or scissors) as strings, returns 0 if tie, 1 if the second argument wins(which in this code will always be the player),
//and -1 if the first argument wins(which in this code will always be computer) 
    var returnResult = 0;

    if (choice1 == choice2) {
        returnResult = 0;
    }
    else if (choice1 == 'rock' && choice2 == 'paper') {
        returnResult = 1;
    }
    else if (choice1 == 'rock' && choice2 == 'scissors') {
        returnResult = -1;
    }
    else if (choice1 == 'paper' && choice2 == 'scissors') {
        returnResult = 1;
    }
    else if (choice1 == 'paper' && choice2 == 'rock') {
        returnResult = -1;
    }
    else if (choice1 == 'scissors' && choice2 == 'rock') {
        returnResult = 1;
    }
    else if (choice1 == 'scissors' && choice2 == 'paper') {
        returnResult = -1;
    }
    return returnResult;
    }

function randomElt(anarray){
//chooses random element from a given array
    var length = anarray.length;
    var randomnum = Math.floor(Math.random() * length);
    return anarray[randomnum];
}

function highlightPlayerChoice (playersChoice) {
 //Given a player's choice as a string, puts a blue border around the choice image

    $("#player-throws-"+ playersChoice).css("border-color", "#0000FF");
}

function resetRPS () {
//sets all the player choices back to a white border and clears the previous message
    $("#player-throws-rock").css("border-color", "#ffffff");
    $("#player-throws-paper").css("border-color", "#ffffff");
    $("#player-throws-scissors").css("border-color", "#ffffff");
    $("#outcome").text('');
}

function showComputerChoice(computerChoice){
    //shows Computer Choice
    if (computerChoice == "rock"){
      $("#computerThrow").attr("src", "rps-images/rock-200.png");
    }
    if (computerChoice == "scissors"){
      $("#computerThrow").attr("src", "rps-images/scissors-200.png");
    }
    if (computerChoice == "paper"){
    $("#computerThrow").attr("src", "rps-images/paper-200.png");
    }
}

function startOver () {
    //Resets all the scores as well as the game
    youWin = 0;
    computerWin = 0;
    ties = 0;
    $("#num_wins").text(youWin);
    $("#num_losses").text(computerWin);
    $("#num_ties").text(ties);
    resetRPS();
}

$("#startOver").click(startOver);

function updateScores (results) {
//Updates the page with current scores, Choice1 is computer, choice2 is player

    var outcome = ''
    if (results == 0) {
    ties +=1;
    outcome = 'Tie';
    }
    if (results == 1) {
    youWin +=1;
    outcome = 'Player Wins!';
    }
    if (results == -1){
    computerWin += 1;
    outcome = 'Computer Wins!';
    }

    $("#num_wins").text(youWin);
    $("#num_losses").text(computerWin);
    $("#num_ties").text(ties);
    $("#outcome").text(outcome);
}

function playerTurn (playersChoice) {
//creates a function that is invoked when the user clicks on a choice that and highlights player's choice, chooses and highlights computer choice
//It determintes the score and updates the score to the computer as well
    resetRPS();
    highlightPlayerChoice (playersChoice);
    var ComputersChoice = randomElt(ComputerChoices);
    showComputerChoice(ComputersChoice)
    var result = rpsJudge (ComputersChoice, playersChoice);
    updateScores(result);
}

$("rps.html").ready(startOver);