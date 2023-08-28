// Creating a variable "A" and assigning it the value "true" or "false"
a = false;
// Invoking Boolean Object Constructer and passing it "true" or "false" value
b = new Boolean(true);
document.write(typeof a); // "boolean"
document.write(typeof b); // "object"

// We can also specify values with numbers --> 1 --> true / 0 --> false
// We can also include expressions inside the parenthesis
// If I were to put 2 > 5 --> We would get a return of "false"
c = Boolean(1);
d = Boolean(0);

alert("c is " + c);
alert("d is " + d);