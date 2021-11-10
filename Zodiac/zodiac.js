//Joy Li and Aizah Rao

//global array of test dates
var testArray = ["Mar 25 1973", "May 2 2002", "June 3 1999","July 10 2004","July 27 2008",
                "Sept 12 1988","Oct 10 1989","Nov 1 2005","Dec 17 2011","Jan 1 1992"
                ,"Feb 2 1964", "Feb 27 2014"]

//takes a string and returns a date object
function makeDate(string){
    var dateObj = new Date(string);
    return dateObj;
}
//takes a number and returns corresponding day of week as a string
function dayWeek(num){
    if (num == 0)
    var day = "Sunday"
    else if (num == 1)
    var day = "Monday"
    else if (num == 2)
    var day = "Tuesday"
    else if (num == 3)
    var day = "Wednesday"
    else if (num == 4)
    var day = "Thursday"
    else if (num == 5)
    var day = "Friday"
    else if (num == 6)
    var day = "Saturday"
    else if (num == 7)
    var day = "Sunday"
    return day
}

//takes date object and returns it in day of week, day/month/year format
function formatDate(dateObj){
    var the_day = dateObj.getDate();
    var the_month = dateObj.getMonth() + 1; // Add 1 because Jan is 0, etc.
    var the_year = dateObj.getFullYear();
    var day_of_week = dateObj.getDay();

    var current_date = dayWeek(day_of_week) + ", " + the_month + "/" + the_day + "/" + the_year;
    return current_date
}

//takes date object and returns the corresponding zodiac sign as a string
function zodiacSign(dateObj){
    var the_day = dateObj.getDate();
    var the_month = dateObj.getMonth() + 1; // Add 1 because Jan is 0, etc.

    if (the_day >= 21 && the_month == 3 || (the_day <= 19 && the_month == 4))
    var zodiac = "aries"

    if (the_day >= 20 && the_month == 4 || (the_day <= 20 && the_month == 5))
    var zodiac = "taurus"

    if (the_day >= 21 && the_month == 5 || (the_day <= 20 && the_month == 6))
    var zodiac = "gemini"

    if (the_day >= 21 && the_month == 6 || (the_day <= 22 && the_month == 7))
    var zodiac = "cancer"

    if (the_day >= 23 && the_month == 7 || (the_day <= 22 && the_month == 8))
    var zodiac = "leo"

    if (the_day >= 23 && the_month == 8 || (the_day <= 22 && the_month == 9))
    var zodiac = "virgo"

    if (the_day >= 23 && the_month == 9 || (the_day <= 22 && the_month == 10))
    var zodiac = "libra"

    if (the_day >= 23 && the_month == 10 || (the_day <= 21 && the_month == 11))
    var zodiac = "scorpio"

    if (the_day >= 22 && the_month == 11 || (the_day <= 21 && the_month == 12))
    var zodiac = "sagittarius"

    if (the_day >= 22 && the_month == 12 || (the_day <= 19 && the_month == 1))
    var zodiac = "capricorn"

    if (the_day >= 20 && the_month == 1 || (the_day <= 18 && the_month == 2))
    var zodiac = "aquarius"

    if (the_day >= 19 && the_month == 2 || (the_day <= 20 && the_month == 3))
    var zodiac = "pisces"
    return zodiac
}

//chooses random element from a given array
function randomElt(anarray){

    var length = anarray.length;
    var randomnum = Math.floor(Math.random() * length);
    return anarray[randomnum];
}

//takes no arguments and randomly chooses a date string from a given array
function getTestDate(){
    return randomElt(testArray);
}

//takes no arguments and uses getTestDate to get a string, uses makeDate to
//convert it into a date object, and uses formatDate and zodiacSign to update
//the strings on the page, inserts correct corresponding image into page
function updatePage() {
    var testDate = getTestDate();
    var testObj = makeDate(testDate);
    $("#today").text(formatDate(testObj));
    var testString = zodiacSign(testObj);
    $("#zodiac-sign").text(testString);
    if (testString == "aries")
    $("#zodiac_image").attr("src", "zodiac-images/aries.png");

    if (testString == "taurus")
    $("#zodiac_image").attr("src","zodiac-images/taurus.png");

    if (testString == "gemini")
    $("#zodiac_image").attr("src","zodiac-images/gemini.png");

    if (testString == "cancer")
    $("#zodiac_image").attr("src","zodiac-images/cancer.png");

    if (testString == "leo")
    $("#zodiac_image").attr("src","zodiac-images/leo.png");

    if (testString == "virgo")
    $("#zodiac_image").attr("src","zodiac-images/virgo.png");

    if (testString == "libra")
    $("#zodiac_image").attr("src","zodiac-images/libra.png");

    if (testString == "scorpio")
    $("#zodiac_image").attr("src","zodiac-images/scorpio.png");

    if (testString == "sagittarius")
    $("#zodiac_image").attr("src","zodiac-images/sagittarius.png");

    if (testString == "capricorn")
    $("#zodiac_image").attr("src","zodiac-images/capricorn.png");

    if (testString == "aquarius")
    $("#zodiac_image").attr("src","zodiac-images/aquarius.png");

    if (testString == "pisces")
    $("#zodiac_image").attr("src","zodiac-images/pisces.png");

    }

$("#button-update").click(updatePage);


//takes no arguments and invokes makeDate for every element in array and prints in console
function test_makeDate(){
    testArray.forEach(date => console.log((date + " => " + makeDate(date))));
}

//takes no arguments and invokes formateDate for for every date derived from your array of test values and prints in console
function test_formatDate(){
    testArray.forEach(date => console.log((date + " => " + formatDate(makeDate(date)))));
}

//takes no arguments and invokes zodiacSign for every date and prints in console
function test_zodiacSign(){
    testArray.forEach(date => console.log((date + " => " + zodiacSign(makeDate(date)))));
}

