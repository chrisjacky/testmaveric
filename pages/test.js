// Example of JavaScript code with dirty code practices

// Global variable declaration
var globalVar = "I am a global variable";

// Function with no clear purpose and poor naming
function doSomething(a, b) {
    // Unnecessary variable declaration
    var x = 10;
    var y = 20;

    // Unused variable
    var unusedVar = "I am not used";

    // Magic numbers
    if (a > 5) {
        return a + b + 42;
    } else {
        return a + b + 7;
    }
}

// Function with side effects and no return value
function updateGlobalVar() {
    globalVar = "I have been updated";
}

// Function with inconsistent formatting and lack of comments
function anotherFunction() {
    var result=0;
    for(var i=0;i<10;i++){
        result+=i;
    }
    return result;
}

// Function with deeply nested loops and conditions
function complexFunction(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > 10) {
                for (var k = 0; k < arr[i][j]; k++) {
                    console.log(arr[i][j] + k);
                }
            }
        }
    }
}

// Function with hardcoded values and no error handling
function fetchData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://example.com/api/data", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send();
}
