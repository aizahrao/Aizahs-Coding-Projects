// Authors: Ashley Yuan and Aizah Rao
// Date: 05.07.2021

//initialize global variables
var tiles = [
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i']];
  
  var blank = [2,2];
  
  
  /* Taking no arguments and which returns the tile to the right of
   * the blank, if any. You'll have to figure out what it should do
   * or return if there is no such tile. 
   * 
   * @return tile if exists, ___ if not
   * */
  function getRightTile (){
    //if column isn't on the right, return tile to the right
    if (blank[1] != 2){
      return [blank[0],blank[1]+1];
    }
    // otherwise, return blank so that swapValues() doesnt do anything
    else{
      return blank; 
    }
  }
  
  /* Same as getRightTile, but for left 
   * 
   * @return tile if exists, ___ if not
   * */
  function getLeftTile (){
    //if column isn't on the left, return tile to the left
    if (blank[1] != 0){
      return [blank[0],blank[1]-1];
    }
    // otherwise, return blank
    else{
      return blank;
    }
  }
  
  /* Same as getRightTile, but for upper. 
   * 
   * @return tile if exists, ___ if not
   * */
  function getUpperTile (){
    //if column isn't on the top, return tile above
    if (blank[0] != 0){
      return [blank[0]-1,blank[1]];
    }
    // otherwise, return blank
    else{
      return blank;
    }
  }
  
  /* Same as getRightTile, but for lower. 
   * 
   * @return tile if exists, ___ if not
   * */
  function getLowerTile (){
    //if row isn't on bottom, return tile below
    if (blank[0] != 2){
      return [blank[0]+1,blank[1]];
    }
    // otherwise, return blank
    else{
      return blank;
    }
  }
  
  /* Takes an index, swaps it with the blank
   * 
   * @param direction, direction to slide
  */
  function swapValues(index){
    console.log(tiles[index[0]][index[1]]);
  
    //swap values at index and blank
    var temp = tiles[index[0]][index[1]];
    tiles[index[0]][index[1]] = tiles[blank[0]][blank[1]];
    tiles[blank[0]][blank[1]] = temp;
    
    //update blank
    temp = blank;
    blank = index;
    //return original blank (where tile now is)
    return temp;
  }
  
  /*Takes a direction, determines the tile to slide and slides it
   * one space in that direction
   * 
   * @param direction, direction to slide
  */
  function moveTile (direction) {
    var tileID;
    var swappedVals;
  
    if (direction == "ArrowUp"){
      swappedVals = swapValues(getLowerTile())
      tileID = tiles[swappedVals[0]][swappedVals[1]];
      $('#' + tileID).animate({top: "-=200px"},400);
    }
  
    if (direction == "ArrowDown"){
      swappedVals = swapValues(getUpperTile());
      tileID = tiles[swappedVals[0]][swappedVals[1]];
      $('#' + tileID).animate({top: "+=200px"},400);
    }
  
    if (direction == "ArrowLeft"){
      swappedVals = swapValues(getRightTile());
      tileID = tiles[swappedVals[0]][swappedVals[1]];
      $('#' + tileID).animate({left: "-=200px"},400);
    }
  
    if (direction == "ArrowRight"){
      swappedVals = swapValues(getLeftTile());
      tileID = tiles[swappedVals[0]][swappedVals[1]];
      $('#' + tileID).animate({left: "+=200px"},400);
    }
  }
  
  //event listeners
  document.addEventListener('keydown', (event) => {moveTile(event.key);}, false);
  
  document.getElementById("up").addEventListener('click', (event) => {moveTile("ArrowUp");}, true);
  document.getElementById("down").addEventListener('click', (event) => {moveTile("ArrowDown");}, true);
  document.getElementById("left").addEventListener('click', (event) => {moveTile("ArrowLeft");}, true);
  document.getElementById("right").addEventListener('click', (event) => {moveTile("ArrowRight");}, true);