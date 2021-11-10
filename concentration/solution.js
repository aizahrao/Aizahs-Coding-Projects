//Aizah Rao
//Concentration Assignment


//Global Variables
var whichClick = 1
var firstClick = ''
var imageName = ''
var tries = 0
var matches = 0

function showImage (id) {
//Function that takes the ID of a cell and shows the image behind the blank 
    var filename = getImage(id)
    $("#" + id).attr("src",filename);
}

function hideImage (id) {
//Function that takes the ID of a cell and hides the image and makes it blank 
    $("#" + id).attr("src","images/blank.jpg");
}

function processClick(id) {
    //handles the user's click and uses the ID to show the image and determines if it is the first or second click and if it is the 
    //second click it will hide both images after a second
    showImage(id);

    if (whichClick == 1) { 
    //if it is hte first click, it reassigns values to global variables
        whichClick = 2
        firstClick = id
        imageName = getImage(id)
    }

    else if (whichClick == 2) {

        if (imageName == getImage(id)) {
        //if match is correct it shows that on the screen and adjusts count
            firstClick = ''
            whichClick = 1
            tries += 1
            matches += 1
            $("#msg").text("Match!");
            $("#matches").text(matches);
            $("#tries").text(tries);

            if (matches == 8) {
                $("#msg").text("Game Over! Congratulations!");

            }
        }

        else {
            setTimeout(function () {hideImage(firstClick); hideImage(id);}, 1000);
            //adjusts count and times out
            whichClick = 1
            tries += 1
            $("#tries").text(tries);
            $("#msg").text("Try Again!");
         }
    }
}


function startNewGame() {
// Creates a fresh game and re-hides all the tiles and shuffles the images and resets global variables

    whichClick = 1
    firstClick = ''
    imageName = ''
    tries = 0
    matches = 0
    var cellsArray = ['cell1', 'cell2', 'cell3', 'cell4', 'cell5', 'cell6', 'cell7', 'cell8', 
    'cell9', 'cell10', 'cell11', 'cell12', 'cell13', 'cell14', 'cell15', 'cell16',]

    cellsArray.forEach(hideImage);
    shuffleImages();
    $("#msg").text("");
    $("#matches").text('');
    $("#tries").text('');
}

//Event handlers for clicking the newgame buttona and refresh
$("game.html").ready(startNewGame);
$("#startNewGameButton").click(startNewGame);
