var myNum1 = 123.45678910;

// toFixed method helps with cutting down code to be more readable when you have a lot of decimal points for example
// In this example in the (2) it will cut it short to 2 points.
var myNum2D = myNum1.toFixed(2);

document.writeln("This is the result of the toFixed method:" + myNum2D + "<BR>");

var myNum2 = 123.45678910;


document.writeln("This is the result of myNum2.toPrecision():" + myNum2.toPrecision() + "<BR>");
document.writeln("This is the result of myNum2.toPrecision(2):" + myNum2.toPrecision(2) + "<BR>");
document.writeln("This is the result of myNum2.toPrecision(3):" + myNum2.toPrecision(3) + "<BR>");

document.writeln("LocaleString: " + myNum2.toLocaleString() + "<BR>");