function y(){
    console.log(this.length);
}

var x = {
    length: 5,
    method: function (y){
        arguments[0]();
        // runs the function y within '0' key
        console.log('Arguments: ', arguments)
        // [Arguments] { '0': [Function: y], '1': 1 }
    }
};

x.method(y, 1);
// 2 refers to amount of arguments passed inside the function and not the value of length


// function returns total number of arguments
// without use of loops
let b  = function(){
    return [].slice.call(arguments).length;
    // call slice method on the arguments object (every fn has an object called arguments which is an array-like obj) which converts arguments into an array
    // length will grab the amount of args inside the converted array
};

console.log(b(1,2,3,4,5))