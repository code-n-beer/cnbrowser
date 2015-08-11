var webView;
var urlBox; 

function initialize() {
    webView = document.getElementById("webpage");
    urlBox = document.getElementById("urlbar");
}

function onUrlKeypress(e) {
    if (e.charCode !== 13) {
        return;
    }

    webView.src = urlBox.value;
}
