function rollDice() {
    // Math.random --> gives us the random number
    // Math.floor --> removes decimal points and returns us a whole number
    var num1 = Math.floor((Math.random() * 6) + 1);
    // Removing Math.floor will return numbers with decimal points
    var num2 = ((Math.random() * 6) + 1);

    var results = document.getElementById("div1");
    results.innerHTML = "Die one is :" + num1 + "<BR>Die two is:" + num2;
}