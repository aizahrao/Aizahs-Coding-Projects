/* ======================================= Functions that add or remove radio/tag buttons ======================================= */


// function that adds a new tag radio button in the DOM taking the tag name as an argument 
function addTagRadioButton(tagName) {
    var radioElement = "<label><input type='radio' name='tag' value=" + "'" + tagName +  "'" + "tagName=" +  "'" + tagName +  "'" + ">" + tagName + "</label>"
    $("#tags").append(radioElement)
}

// function that adds a new button in the DOM under the tags dropdown, taking the tag name as an argument
function addTagButton(tagName) {
    var ButtonElement = "<li><button type='button'  class = 'delete' id=" +  tagName  + ">X</button> <span class='description'>" + "" + tagName + "" + "</span></li>"
    $("#buttonsunderdropdown").append(ButtonElement)
}

//deletes radio Button using the given button name
function deleteRadioButton (buttonName) {
    radioValueButton= ":radio[value=" + buttonName + "]"
    $(radioValueButton).closest("label").remove()
}

//deletes tag button using the given button name
function deleteTagButton(buttonName) {
    var itemToRemove = $('#' + buttonName).closest('li');
    itemToRemove.remove();
}


/* ======================================= Event Handlers For button in tag dropdown ======================================= */

//Event Handler for submit button
$('#submit').click(function(){

    //preventing default
    event.preventDefault();
    
    //serialize form information into an object 
    var originialDataObject = $("#addTags").serializeArray();
    var firstArray = {};

    $(originialDataObject).each(function(index, obj){
        firstArray[obj.name] = obj.value;	
    }); 

    //add a new radio button 
    addTagRadioButton(firstArray['tag']);

    //add new tag button
    addTagButton(firstArray['tag']);

    //adds a key value pair to the tag colors object
    tagColors[firstArray['tag']] = firstArray['background-color']
    
});


//event handler for delete button that deletes that button + radio button
$( "#buttonsunderdropdown" ).on( "click", ".delete", function(eventObj){
    eventObj.preventDefault();
    var tagName = event.target.id;

    //remove button 
    deleteTagButton(tagName);

    //delete's radio button
    deleteRadioButton(tagName);

    //delete key and value from tagcolors object
    tagColors[tagName];
});

/* ======================================= functions for saving and loading tags ======================================= */

/* 
  argument(s): None
  return: None, this function saves the current tag names into local storage
*/
function tagsave(){
    var tagsObject = JSON.stringify(tagColors);
	localStorage.setItem("tagList", tagsObject);
}

/* 
  argument(s): None
  return: None, this function retrieves the tags from local storage sets that as the current tag Colors variable. then, it adds all
  saved tag buttons  to the DOM
  

*/

function tagload() {
    var tagsFromStorage = localStorage.getItem("tagList");

	if (tagsFromStorage !== null) {
		var originaltagsObject = JSON.parse(tagsFromStorage);
		tagColors = {};
		tagColors = originaltagsObject;

        var arrayOfKeys = Object.keys(tagColors);

        arrayOfKeys.forEach(deleteRadioButton);
        arrayOfKeys.forEach(deleteTagButton);

        arrayOfKeys.forEach(addTagButton);
        arrayOfKeys.forEach(addTagRadioButton);


    }
}

/* ======================================= Event Handlers for saving and load ======================================= */

$('#saveButton').click(function(){
    tagsave();
});

$('#loadButton').click(function(){
    tagload();
});











    



