// Using an example, explain the difference between block,global and function scope in variables.
// Global scope variable
var globalVar = "I am in the global scope";

function exampleFunction() {
    // Function scope variable
    var functionVar = "I am in the function scope";

    if (true) {
        // Block scope variable
        let blockVar = "I am in the block scope";
        console.log(blockVar); 
    }

    console.log(functionVar); 
    console.log(globalVar); 

}

exampleFunction();
console.log(globalVar); 
//globalVar is declared outside any function and is accessible globally.

//functionVar is declared inside the exampleFunction() function and is only accessible within that function's scope.

//blockVar is declared inside an if block and is limited to the block scope defined by the curly braces.