import { initialize } from './browser-functions';
require( 'babel/register' );

let React = require( 'react' );
let MainView = require( './components/main-view' );

// find the url box and webview for the functions
initialize();

React.render( <MainView/>, document.getElementById( 'app' ) );
