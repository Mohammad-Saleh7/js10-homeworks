// According to your js10 session, write a code that shows why we shouldn't use var?
var message = "hello world";

function printMessage() {
    if (true) {
        var message = "hello donya!";
        console.log(message);
    }
    console.log(message); 
}

printMessage();