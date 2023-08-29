var timeoutID;

function delayAlert() {
    // Specify a function or snippet of code to run here.. in this case
    // Calling the function "slowAlert" the second parameter is the actual delay
    // ie --> how long do we want to delay this function from actioning
    // It's been assigned to the variable created above called "timeoutID" -->Global Value
    timeoutID = window.setTimeout(slowAlert, 2000);
}

function slowAlert() {
    alert("That was really slow!");
}

function cancelAlert() {
    // ClearTimeout method is a way of cancelling in this case the "timeoutID" variable
    window.clearTimeout(timeoutID);
    alert("Alert cancelled");
}

var int = window.setInterval(function () { clock() }, 1000);
function clock() {
    var myDate = new Date();
    var myTime = myDate.toLocaleTimeString();
    document.getElementById("clock").value = myTime;
}