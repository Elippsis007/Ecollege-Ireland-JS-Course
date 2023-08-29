
function checkValue(value) {
    try {
        if (value <= 5)
        throw new Error("Please submit a minimum value of at least 5.");
        if (value >= 100)
        throw new Error("Please submit a value that does not exceed 100.");
    }
    catch (e) {
        // Determine whether or not the browser is IE or Firefox
        if (e.description == null) {
            alert("An error occurred.\n " + e.message)
        }
        else {
            alert("An error occurred.\n " + e.description)
        }
    }
}

checkValue(3);