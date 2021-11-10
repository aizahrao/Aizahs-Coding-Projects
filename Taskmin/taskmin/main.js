// Alexis and Aizah

//makes example task at bottom blurred
$("#task_elt_template").addClass("template");

// -------------- Phase 4 --------------------
  /* 
  event handler for the add task button
  function: serializes the task form information into the array. Then the array is used to create a variable that stores an object with the form inofrmation. The object is then added to the task list and the dropdown is closed.
  */  
$('#addTaskButton').click(function addTaskFromForm(){

  var formdata = $("#addTask").serializeArray();
  var firstArray = {};
  var dataToAdd = {};
	
  $(formdata).each(function(index, obj){
    firstArray[obj.name] = obj.value;	
  }); 

  var dataToAdd = { text:firstArray['taskText'], priority:firstArray['taskPriority'], duedate:firstArray['taskDueDate'], tag:firstArray['tag']
  }; 

  event.preventDefault();
	theTaskList.addNewTask(dataToAdd);
	
	//closes dropdown after you click on the button to submit a task through the form
	closeAllDropDowns();

});

// -------------- Phase 5A --------------------

/*
  event handler for the done buttons on the tasks
  function: on click it retrieves the task ID of the task that was clicked on and sets the done as true and then toggles it as done
*/  
$( "#theTasks" ).on( "click", ".markDone", function(eventObj){
  eventObj.preventDefault();
  var tid = $(eventObj.target).closest("[data-taskid]").attr("data-taskID");
	console.log("task " + tid + " done = true");
  theTaskList.getTask(tid).toggleDone();
});

// -------------- Phase 5B --------------------

/* 
  event handler for the delete buttons on the tasks
  function: on click it retrieves the task ID of the task that was clicked on then removes the task from the task list and removes it from the page
*/
$( "#theTasks" ).on( "click", ".delete", function(eventObj){
  eventObj.preventDefault();
  var tid = $(eventObj.target).closest("[data-taskid]").attr("data-taskID");
	console.log("deleted task " + tid);
	theTaskList.getTask(tid).delete();
	theTaskList.deleteTask(tid);
});



