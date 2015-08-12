'use babel';
var webView;
var urlBox;

function initialize() {
    webView = document.getElementById( 'webpage' );
    urlBox = document.getElementById( 'urlbar' );
}

function onUrlKeypress( e ) {
    var url = urlBox.value;
    if ( e.charCode !== 13 ) {
        return;
    }

    if ( !isUrlGood( url ) ) {
        // http is deprecated, but there should be a fallback to it somehow
        url = 'https://' + url;
    }

    urlBox.value = url;
    loadUrl( url );
}

function loadUrl( url ) {
    webView.src = url;
}

function isUrlGood( url ) {
    return ( url.startsWith( 'https://' ) || url.startsWith( 'http://' ) )
}

