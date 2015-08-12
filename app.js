require( 'babel/register' );
import { initialize } from './browser-functions';

let React = require( 'react' );
let MainView = require( './components/main-view' );

// find the url box and webview for the functions
initialize();

React.render( React.createElement( MainView, null ), document.getElementById( 'app' ) );
