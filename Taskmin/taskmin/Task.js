// Alexis and Aizah 

// -------------- Phase 2 --------------------

class Task {

	//constructor takes a dictionary and uses it to create a task us assigns parts of the task accordingly 
	constructor(dict) {
		this.taskID = dict["taskID"];
		this.text = dict["text"];
		this.priority = dict["priority"];
		this.duedate = new Date(dict["duedate"]);
		this.tag = dict["tag"];

		if (dict["done"] === true) {
			this.done = true;
		} else {
			this.done = false;
		}
	}

  /* 
		 argument(s): none
		 return: string representation of task

	*/

	toString() {

		return "text: " + this.text + "\npriority: " + this.priority + "\nduedate: " + this.duedate + "\ntag: " + this.tag;
	}

	/* 
			 argument(s): none
			 return: string representation of date object
	
		*/

	getFormattedDate() {

		//setting variables
		var month;
		var weekday;

		if (this.duedate.getDay() == 0) {
			weekday = "Sun";
		} else if (this.duedate.getDay() == 1) {
			weekday = "Mon";
		} else if (this.duedate.getDay() == 2) {
			weekday = "Tues";
		} else if (this.duedate.getDay() == 3) {
			weekday = "Wed";
		} else if (this.duedate.getDay() == 4) {
			weekday = "Thurs";
		} else if (this.duedate.getDay() == 5) {
			weekday = "Fri";
		} else if (this.duedate.getDay() == 6) {
			weekday = "Sat";
		}

		if (this.duedate.getMonth() + 1 == 1) {
			month = "Jan";
		} else if (this.duedate.getMonth() + 1 == 2) {
			month = "Feb";
		} else if (this.duedate.getMonth() + 1 == 3) {
			month = "March";
		} else if (this.duedate.getMonth() + 1 == 4) {
			month = "April";
		} else if (this.duedate.getMonth() + 1 == 5) {
			month = "May";
		} else if (this.duedate.getMonth() + 1 == 6) {
			month = "June";
		} else if (this.duedate.getMonth() + 1 == 7) {
			month = "July";
		} else if (this.duedate.getMonth() + 1 == 8) {
			month = "Aug";
		} else if (this.duedate.getMonth() + 1 == 9) {
			month = "Sept";
		} else if (this.duedate.getMonth() + 1 == 10) {
			month = "Oct";
		} else if (this.duedate.getMonth() + 1 == 11) {
			month = "Nov";
		} else if (this.duedate.getMonth() + 1 == 12) {
			month = "Dec";
		}

		return weekday + " " + month + " " + this.duedate.getDate() + " " + this.duedate.getFullYear();
	}

	/* 
			 argument(s): location (string)
			 return: none, however this method creates a DOM element for the task (cloning the template file) and adds it to the string argument location.
	
		*/

	addtoDom(location) {

		// step 1, clone
		this.domElem = $("#task_elt_template > li").clone();

		// step 2, modify
		this.domElem.find("span.id").text(this.taskID);
		this.domElem.find("span.due").text(this.getFormattedDate());
		this.domElem.find("span.priority").text(this.priority);
		this.domElem.find("span.tag").text(this.tag);
		this.domElem.find("p.text").text(this.text);
		this.domElem.find("button[type=button]");
		this.domElem.find("button[type=button]");

		//changing background color of task according to the tag
		$(this.domElem).css("background-color", tagColors[this.tag]);


		if (this.done === true) {
			$(this.domElem).addClass('done');
		}

		// step 3, adding data attribute and adding domElem to page
		$(this.domElem).attr("data-taskID", this.getId());
		$(location).append(this.domElem);

	}

  /* 
  	argument(s): none
  	return: the taskID instance variable which is an integer
  */
	getId() {
		return this.taskID;
	}

  /* 
  	arguments: id (string)
  	method: sets the taskID to the given ID 
  */
	setId(id) {
		this.taskID = id;
	}

  /* 
  	argument(s): none
  	return: none, however this method checks to see if the task is done or not. if the task is done then the 'done' class is added to the DOM element and then the done instance variable is set to true. otherwise, it will remove the 'done' class and set the done instance variable to false.
  */

	toggleDone() {
		if (this.done === false) {
			$(this.domElem).addClass('done');
			this.done = true;
		} else {
			$(this.domElem).removeClass('done');
			this.done = false;
		}
	}

	/* 
	 arguments: none
	 return: none, however this method removes the DOM element from the page
	 */
	delete() {
		$(this.domElem).remove();
	}

	/* 
	 arguments: none
	 return: the duedate of the task which is a Date object
	 */
	getDueDate() {
		return this.duedate;
	}

	/* 
	 arguments: none
	 return: the tag of the task which is a string
	 */
	getTag() {
		return this.tag;

	}

  /* 
  arguments: none
  return: the priority of the task which is a string
  */
	getPriority() {
		return this.priority
	}

  /* 
  arguments: description
  method: processes list of descriptions and creates a new object for each and adds it to the page
  */
	processDescriptions(descriptions) {
		descriptions.forEach(dict => new Task(dict).addtoDom());
	}
}

