var str = "Hello World";

// substr starts at index 2 of "Hello Wolrd" and returns index 2 letter and two letters after
var n = str.substr(2, 3)

document.writeln("This is the result of the substr method:" + n +"<BR>");

// substring means up to and not including --> will return "l"
var m = str.substring(2, 3)

document.writeln("This is the result of substring method: " + m + "<BR>");