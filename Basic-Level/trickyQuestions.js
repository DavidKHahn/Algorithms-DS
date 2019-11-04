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