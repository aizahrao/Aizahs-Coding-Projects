// Aizah and Alexis 

//Taskmin Warmup

class PersistentList {

	constructor(key) {
		this.key = key;
		this.elements = [];
		this.counter = 0;

	}

		/* 
			 argument(s): none
			 return: counter instance variable (this.counter) which is an int
	
		*/

	getCounter() {
		return this.counter;
	}

		/* 
			 argument(s): none
			 return: the array of dictionary elements
	
		*/

	getElements() {
		return this.elements;
	}

	/* 
			 argument(s): none
			 return: each string item of the array of dictionaries
	
		*/

	getItems() {

		var result = this.elements.map(function (dict) {
			return dict["item"];
		});
		return result;

	}

		/* 
			 argument(s): none
			 return: string representation of date object
	
		*/

		addItem(newItem) {

			this.counter++;
	
			console.log(this.counter);
	
			var newItemGid = this.counter;
	
	
			this.elements.push({ gid: newItemGid, item: newItem });
	
	
			console.log("elements after adding new item " + newItem + ": ");
			console.log(this.elements);
	
			return newItemGid;
		}

	/* 
			 argument(s): gid (int)
			 return: the dictionary with the given ID (gid)
	
		*/
	getElement(gid) {
		var index = this.elements.findIndex(function (dict) {
			return dict["gid"] == gid;
		});

		return this.elements[index];
	}
  
	/* 
	argument(s): gid (int)
	return: none, however this method removes the element with the given ID (gid)	
	*/

	removeItem(gid) {
		
		var index = this.elements.findIndex(function (dict) {
			return dict["gid"] == gid;
		});

		this.elements.splice(index, 1);

		// gid needs to be equal to the gid of the last element in the array

		if(this.elements.length >= 1) {
		var lastItem = this.elements[this.elements.length - 1];

		this.counter = lastItem.gid;
		}
		
		console.log("gid counter after remove" + this.counter);
	}
	/* 
	argument(s): none
	return: none, however this method coverts the object to a string and saves it to local storage
	
	*/
	save() {
		var collection = JSON.stringify({ elements: this.elements, counter: this.counter });
		localStorage.setItem(this.key, collection);
	}

	/* 
	argument(s): none
	return: returns true and loads items that are in the local storage using the key
	*/
	load() {
		var collectionFromStorage = localStorage.getItem(this.key);
		if (collectionFromStorage != null) {
			var originalObj = JSON.parse(collectionFromStorage);
			this.elements = originalObj["elements"];
			this.counter = originalObj["counter"];
			return true;
		}
	}

/*
	argument(s): none
	return: none, however this method prints every dictionary to the console
	
*/

	print() {
		this.elements.forEach(dict => console.log(dict));
	}
}









