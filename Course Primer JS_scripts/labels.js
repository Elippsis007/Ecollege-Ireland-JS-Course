
var x = 10;
// Give the statement a name followed by a ";"
// Outter for loop "labelled" as "out"
out: for (y = 0; y < 10; y++) {
    document.write(y + "<br>");
    // inner "do-while" loop
    myinnerloop:
    do {
        // x gets increased by 1 --> now x = 11
        x += 1;

        document.write(x + "<br>");
        // if x is equal to 12, then break the inner loop
        if (x == 12) {
            break myinnerloop;

        }
    } while (x <= 15);
}