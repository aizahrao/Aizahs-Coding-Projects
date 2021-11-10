// Aizah Rao

function sqrt (number) {
    // returns the square root of the number
    return Math.sqrt(number);
}

function hill(x){ 
    // computes -2(x-4)(x-16) where x is the argument 
    return (-2) * (x-4) * (x-16);
}

function wiggle (x){
    // computes 10(x-1)(x-5)(x-9) where x is the argument 
    return (10) * (x-1) * (x-5) * (x-9);
}

function curve1(){
    //plots sqrt function on the range 0-29
    var xValues = range(0,30);
    var yValues = xValues.map(sqrt);
    newPlot(xValues,yValues);
}

function curve2(){
    //plots hill function on the range 0-20
    var xValues = range(0,21);
    var yValues = xValues.map(hill);
    newPlot(xValues,yValues);
}

function curve3(){
    //plots wiggle function on the range 0-10
    var xValues = range(0,11);
    var yValues = xValues.map(wiggle);
    newPlot(xValues,yValues);
}

function curve4(){
    //plots 5cos(0.2x) function on the range 0-99
    var xValues = range(0,100);
    var yValues = xValues.map(function(x){return(5*Math.cos(0.2 * x))});  
    newPlot(xValues,yValues);
}

function curve5(){
    //plots the square of curve4()
    var xValues = range(0,100);
    var yValues = xValues.map(function(x){return Math.pow(5*Math.cos(0.2 * x),2)});  
    newPlot(xValues,yValues);
}

function curve1a(){
    //plots sqrt function on top of curve1
    curve1(); 
    var xValues = range(0,30);
    addPlotFunction(xValues, sqrt);

}

function curve2a(){
    //plots hill function on top of curve2
    curve2(); 
    var xValues = range(0,21);
    addPlotFunction(xValues,hill);
}

function curve3a(){
    //plots wiggle function on top of curve3
    curve3(); 
    var xValues = range(0,11);
    addPlotFunction(xValues,wiggle);
}

function quadratic (constant, root1, root2) {
    //returns quadtratic function using arguments 
    return function(x){ return constant * (x-root1)* (x-root2)}; 
}

function curve2b() {
    //invokes curve2a() and then plots quadratic function 
    curve2a();
    var xValues = range(0,21);
    addPlotFunction (xValues, quadratic(-2,4,16));

}

function cubic(constant, root1, root2, root3) {
    //returns cubic function using arguments 
    return function(x){ return constant * (x-root1)* (x-root2) * (x-root3)}; 

}

function curve3b(){
    //invokes curve3a() and then plots cubic function 
    curve3a();
    var xValues = range(0,11);
    addPlotFunction(xValues,cubic(10, 1, 5, 9)); 

}



