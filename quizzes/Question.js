/* A9: Quizzes
Javascript File: Defines "Question" class
Partners: Aizah Rao, Lee Yujin */

/* Defines class "Question"
Constructor: Takes an object literal and an integer, Creates and saves DOM structure in instance variable

addToDOM: Takes destination as string argument and adds DOM structure saved in instance variable to document */
class Question {
  constructor(imp, numb) {
    this.format = "<div id='Q"+numb+"' data-answer='"+imp.ANS+"'><p class='prompt'>Q"+numb+": "+imp.Q+"</p><label><input type='radio' name='Q"+numb+"' value='A'> "+imp.A+"</label><br><label><input type='radio' name='Q"+numb+"' value='B'> "+imp.B+"</label><br><label><input type='radio' name='Q"+numb+"' value='C'> "+imp.C+"</label><br><label><input type='radio' name='Q"+numb+"' value='D'> "+imp.D+"</label><br><button type='button'>GRADE</button></div>";
  }

/* Adds format saved in instance variable to given destination
Argument: string that indicates the location in document to add formatted question */
  addToDOM(destination) {
      $(destination).append(this.format);
  }
}