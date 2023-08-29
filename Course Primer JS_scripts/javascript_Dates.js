// Creates a date object that will load in browser and creates date in browser
var today = new Date();

var anniversary = new Date("August 28, 2023 21:30:00");
var birthday = new Date(1987, 08, 13);

// Formatting
document.writeln("This is the result of creating a standard Date object: " + today.toString() + "<BR>");

document.writeln("This is the result of using the GMTString " + anniversary.toGMTString() + "<BR>");

document.writeln("This is the result of using the UTCString " + anniversary.toUTCString() + "<BR>");

document.writeln("This is the result of using the theLocaleString " + birthday.toLocaleDateString() + "<BR>");

// Getting specific information
document.writeln("This is the day: " + today.getDay() + "<BR>");

// Setting specific information
birthday.setFullYear(1987)
document.writeln("This is the new date: " + birthday.toLocaleDateString() + "<BR>");