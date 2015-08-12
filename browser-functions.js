var webView;
var urlBox;

export function initialize() {
    webView = document.getElementById( 'webpage' );
    urlBox = document.getElementById( 'urlbar' );
}

export function onUrlKeypress( e ) {
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

export function loadUrl( url ) {
    webView.src = url;
}

export function isUrlGood( url ) {
    return ( url.startsWith( 'https://' ) || url.startsWith( 'http://' ) )
}

