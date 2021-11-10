/* A9: Quizzes
Javascript File: Main driver
Partners: Aizah Rao, Lee Yujin */

/* Uses format saved in instance variable by the Question constructor and adds the questions to according grid in page
Arguments: Object Literal describing question, Integer value of index 
*/
function formatQuestion (element, index) {
  let newQ = new Question(element, index);
  let loc;
  // makes sure that there are two questions per column
  if (index < 2) {
      loc = "#column1";
  } else {
      loc = "#column2";
  }
  // adds DOM element to page
  newQ.addToDOM(loc);
}

/* Invokes formatQuestions using forEach when page is loaded, formatting and adding all questions in the questions array */
$(document).ready(function () {
questions.forEach(formatQuestion);
})

/* Checks to see if the selected option is the same as the correct answer and displays the result next to the button
Argument: Grade button clicked on
*/
function gradeQuestion (clickButton) {
//sets variables 
var gradeWhich = $(clickButton).closest("div");
var gradeNumb = gradeWhich.attr("id");
var correct = gradeWhich.attr("data-answer");
var given = $("input[type=radio][name="+gradeNumb+"]:checked").val();

/* Alerts the user is no answer was selected, continues grading if answer was selected */
if (given == null){
  alert("Please select an answer!")
} else {
  // checks to see if question was graded before and if so, removes previously placed class and text
  if (gradeWhich.attr("class") != null ){
    var insText = document.querySelector("#"+gradeNumb+" ins");
    insText.remove();
    gradeWhich.removeClass();
  }
  // Whether the answer is correct or not, it inserts text and adds a class to the form tag of question being graded 
  if (correct === given) {
    $(gradeWhich).addClass("correct");
    $(clickButton).after("<ins>Correct!</ins>");
  } else {
    $(gradeWhich).addClass("wrong");
    $(clickButton).after("<ins>Your answer is wrong, try again.</ins>");
  }
}
}

/* Invokes gradeQuestion function when a grade button is clicked */
$(".container").on('click','button',function(event){
gradeQuestion(event.target);
})