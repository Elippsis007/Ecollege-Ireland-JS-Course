
// for statement
document.write("Here is the for loop <br>");
// where i = 1 and 1 is less than or equal to 10, increment by 1
for (i = 1; i <= 10; i++) {
    // Execute the code 10 times
    document.writeln("The value of i is: " + i + "<BR>");

    // Inner Loop
    for (j = 1; j <= 10; j++) {
        document.writeln("This value of j is: " + j + "<BR>");
    }
}