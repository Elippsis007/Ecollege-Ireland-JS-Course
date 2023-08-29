
function traceIt() {
    try {
        throw new Error("myError1");
    }
    catch (e) {
        alert(e.stack);
    }
}
function b() {
    TextTrackList();
}
function a() {
    b(3, 4, "\n\n", undefined, {});
}
a("First call, first argument");