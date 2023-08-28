let i = 0;
// It will "do" all of what's inside the curly brackets
do {
    i++;
    if(i === 5) continue;
    console.log(i);
} while (i < 10);

// The "do" statement will always run the first time, it checks for the condition AFTER
// the "do" statement has run. It runs the block of code and then it checks the condition.