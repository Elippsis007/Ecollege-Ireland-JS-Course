// Used for JS programmers to create powerful searches or to help with validating forms

// i ----> case insensitive
var str = "This is a sample string a quick Sample";
var re = /Sample/i; // i --> modifier, it will ignore case sensitivity
// var re = new RegExp("sample", "i");

// Created variable called "check" and set it to "re.exec(str)"
// re (regular expression "object") and the "exec" *Method*
// When you run the exec method on a string that I am checking it will give me an array of results it has found
var check = re.exec(str);
if (check) {
    alert("Found a match");
    alert(check);
} else {
    alert("No match found");
}

// Test method, will basically return a true or false result based on whether it found the pattern or not
var check2 = re.test(str);

alert(check2);