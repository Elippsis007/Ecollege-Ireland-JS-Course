// Type function
// Next your function needs a name (any name) but make it relevant to what you want the function to do.
// Then add your parenthesis ()
// Followed by the curly brackets {}
function sayHi () {
    console.log("Hi")
}

// Calls the function to return what's inside the curly brackets --> "Hi"
sayHi()

// Passing in a variable called "a" and "b"
function sum(a, b) {
    console.log(a + b)
}

// The 1 & 2 are corresponding to a & b
sum(1, 2)

function sum(a, b) {
    return a + b
}

const value = sum(1, 2)
console.log(value)