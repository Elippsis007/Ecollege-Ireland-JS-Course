function buttonClicked()
{
    alert("Old event alert caller method");
}

// When the page loads, the onload function will run, it's going to attach to the "eventNew" button
// It has a listener waiting for a "click" and when it's clicked it will trigger the "newEventButtonClicked" function to trigger the alert
window.onload = function()
{
    document.getElementById('eventNew').addEventListener('click', newEventButtonClicked, false);
}

function newEventButtonClicked()
{
    alert("Newer event method");
}

function changeDiv()
{
    document.getElementById('myDiv').style.backgroundColor="#bb0000";
}