function sendEventInfo(event) {
    var information = "TimeStamp: " + event.timeStamp;
    information += "<br/>Target: " + event.target.id;
    information += "<br/>X: " + event.clientX;
    information += "<br/>Y: " + event.clientY;
    information += "<br/>Shify Key?: " + event.shiftKey;

    document.getElementById('output').innerHTML = information;
}