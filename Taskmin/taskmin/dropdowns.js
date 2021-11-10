// Alexis and Aizah

$("nav").on('click', '.dropButton', function (evt) {
	var sib = $(evt.target).next().one();
	var shown = sib.hasClass('show');
	closeAllDropDowns();

	// open our dropdown, if not shown
	if (!shown) {
		sib.addClass('show');
	}
});

function closeAllDropDowns() {
	$(".dropContent,.dropClickContent").removeClass('show');
}

// This closes all drop-downs if you click anywhere outside the dropContent
// or in it, unless it's a .dropClickContent or the datepicker is open

var datePickerOpen = false;

$(window).click(function (evt) {
	g = evt.target;
	if (datePickerOpen) return;
	var dcc = $(evt.target).closest(".dropClickContent");
	var inDcc = (dcc.length === 1);
	if (!evt.target.matches('.dropButton') &&
		!evt.target.matches('.ui-datepicker') &&
		!inDcc) {
		closeAllDropDowns();
	}
});

// closes the add task form when you click on the "cancel" button
$("#cancelAddTask").click(closeAllDropDowns);


// --------------- Phase 6 --------------------

//localStorage event handlers

$('#saveButton').click(function(){
    theTaskList.save();
});

$('#loadButton').click(function(){
    theTaskList.load();
});

$('#resetButton').click(function(){
  localStorage.clear();
});


// --------------- Phase 7 -------------------

//Sorting event handlers

$('#sortIdButton').click(function(){
       theTaskList.sortById();
});

$('#sortTagButton').click(function(){
       theTaskList.sortByTag();
});

$('#sortDueDateButton').click(function(){
       theTaskList.sortByDueDate();
});

$('#sortPriorityButton').click(function(){
       theTaskList.sortByPriority();
});





