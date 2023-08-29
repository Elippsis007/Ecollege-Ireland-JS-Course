
var newURL;

function setEncode(myURL) {
    newURL = encodeURIComponent(myURL);
    alert(newURL);
    document.getElementById("info").innerHTML = newURL.toString();
}

function setDecode() {
    decodeURL = decodeURIComponent(newURL);
    alert(decodeURL);
    document.getElementById("info").innerHTML = decodeURL.toString();
}
