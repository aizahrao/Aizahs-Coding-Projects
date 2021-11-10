
function wrapString(inString, tag) {
    //wraps a string around a tag
    return '<' + tag + '>' + inString + '</' + tag + '>' ;
}

function makeWrapper(tag) {
    //wraps string around a tag using anon function
    return function(string){return wrapString(string,tag);}
}

function wrapStrings(anArray, tag){
    //wraps all string in array around tag
    var inputString = makeWrapper(tag);
    newArray = anArray.map(inputString);
    return newArray;
}

function wrapStringsTest (anArray, tag) {
    //wraps all string in array around tag and then puts it on the page
    return setList(wrapStrings(anArray, tag));
}

function strongList(){
    //wraps an array around tag and then puts it on the page and makes it bold
    var array = ['apple','banana', 'chocolate'];
    return wrapStringsTest(array, 'strong');
}

function emList(){
    //wraps an array around tag and then puts it on the page and makes it italics
    var array = ['apple','banana', 'chocolate'];
    return wrapStringsTest(array, 'em');
}