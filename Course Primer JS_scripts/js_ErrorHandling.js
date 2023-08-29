function TestTry() {
    alert("Method ran successfully");
}

// Putting the call to the TestTry() method inside the "try" block
// The "try" block is the place to put code that could potentially be a show stopper.
try {
    TestTry();
    // Invald calls, functions or methods in the code
    TestT()
}

// The catch method is there to catch the errors.
catch(exception){
    // Determine wheter or not the browser is IE or Firefox

    if (exception.description == null) {
        alert("There was an error in the code. The details are: \n " + exception.message)
    }
    else {
        alert("There was an error in the code. The details are: \n " + exception.description);
    }
}