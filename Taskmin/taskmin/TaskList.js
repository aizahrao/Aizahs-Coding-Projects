/* updated taskList code wed jun 2 (9:47 am) */

// Alexis and Aizah

// -------------- Phase 3 --------------------

class TaskList {

	constructor(key, domElem) {
		this.key = key;
		this.domElement = domElem;
		this.tidCounter = 0;
		this.taskList = [];

	}

	/* 
		argument(s): description (dictionary object)
		return: none, however the method increases the task ID counter instance variable (this.tidCounter), creates a new task with the dictionary description argument, sets the ID of the task to the counter, adds the new task to the taskList, and lastly, adds the task to the DOM
	
		*/
	addNewTask(description) {

		if (this.taskList.length >= 1) {
			var lastItem = this.taskList[this.taskList.length - 1];

			this.tidCounter = lastItem.getId();
		}

		this.tidCounter++;

		var newTaskID = this.tidCounter;

		var task = new Task(description);
		task.setId(this.tidCounter);
		this.taskList.push(task);
		task.addtoDom(this.domElement);
	}

	/* 
		argument(s): description (dictionary object)
		return: none, however the method increases the task ID counter instance variable (this.tidCounter), creates a new task with the saved dictionary description argument, adds the new task to the taskList, and lastly, adds the task to the DOM
	
		*/

	addSavedTask(description) {
		var task = new Task(description);
		this.taskList.push(task);
		task.addtoDom(this.domElement);
	}

	/* 
		argument(s): tid (int)
		return: the task inside of taskList with the given taskID argument (tid)
	
		*/

	getTask(tid) {

		var index = this.taskList.findIndex(function (dict) {
			return dict.getId() == tid;
		});
		return this.taskList[index];

	}

	/* 
  argument(s): tid (int)
  return: none, however the method removes the task with the given taskID argument (tid) from the taskList and the counter decreases.

  */

	deleteTask(tid) {

		var index = this.taskList.findIndex(function (dict) {
			return dict.getId() == tid;
		});

		this.taskList.splice(index, 1);

		console.log(this.taskList);

		//this.tidCounter--;
	}

	/* 
		argument(s): none
		return: none, however this method converts an object of the taskList and taskCounter to the proper string format and stores it in Local St
	
		*/
	save() {
		var collection = JSON.stringify({ list: this.taskList, counter: this.tidCounter });
		localStorage.setItem(this.key, collection);

	}

	/* 
  argument(s): None
  return: None, however this method retrieves an object of the taskList and taskCounter from Local Storage if there was something actually saved to Local Storage, and converts that stringified object back into its original state. Then all the tasks in taskList are removed from the page, and the taskList is set to an empty array. Lastly, the example task is removed, the tidCounter is equal to the one that was saved to Local Storage, and all the new tasks that were loaded in from Local Storage are added to the taskList and page.

  */

  load() {

	var collectionFromStorage = localStorage.getItem(this.key);

	if (collectionFromStorage != null) {

		var originalObj = JSON.parse(collectionFromStorage);


		this.taskList.forEach(task => task.delete(task));

		this.taskList = [];

		this.tidCounter = originalObj["counter"];


		$('li[data-taskId="example"]').remove();

		originalObj["list"].forEach(dict => this.addSavedTask(dict));
	}
}

	/* 
		argument(s): none
		return: none, however this method sorts the taskList by ID
	
		*/

	sortById() {

		this.taskList.forEach(task => task.delete());

		function compare(a, b) {
			if (a.getId() < b.getId()) {
				return -1;
			}
			if (a.getId() > b.getId()) {
				return 1;
			}
			return 0;
		}

		this.taskList.sort(compare);

		this.taskList.forEach(task => task.addtoDom(this.domElement));
	}

	/* 
		argument(s): none
		return: none, however this method sorts the taskList by Tag
	
		*/

	sortByTag() {

		this.taskList.forEach(task => task.delete());

		function compare(a, b) {
			if (a.getTag() < b.getTag()) {
				return -1;
			}
			if (a.getTag() > b.getTag()) {
				return 1;
			}
			return 0;
		}

		this.taskList.sort(compare);

		this.taskList.forEach(task => task.addtoDom(this.domElement));

	}



	/* 
		arguments: none
		return: taskList sorted by due date */

	sortByDueDate() {

		this.taskList.forEach(task => task.delete());

		function compare(a, b) {
			if (a.getDueDate() < b.getDueDate()) {
				return -1;
			}
			if (a.getDueDate() > b.getDueDate()) {
				return 1;
			}
			return 0;
		}

		this.taskList.sort(compare);
		console.log(this.taskList);

		this.taskList.forEach(task => task.addtoDom(this.domElement));
	}

	/* 
	argument(s): none
	return: none, however this method sorts the taskList by prioirity
	
	*/

	sortByPriority() {
		this.taskList.forEach(task => task.delete());

		function compare(a, b) {

			var priorities = ["high", "medium", "low"];

			var firstPriority = priorities.indexOf(a.getPriority());

			var secondPriority = priorities.indexOf(b.getPriority());

			return firstPriority - secondPriority;
		}
		this.taskList.sort(compare);

		this.taskList.forEach(task => task.addtoDom(this.domElement));
	}

}


//global variable to hold user's tasks
var theTaskList = new TaskList("theKey", "#theTasks");


