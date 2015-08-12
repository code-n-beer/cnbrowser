import React from 'react';
import UrlBar from './url-bar';

export default class PageView extends React.Component {
    render() {
        return (
            <div className='right col'>
                <UrlBar />
                <webview id='webpage' src='https://duckduckgo.com' style={{width: 'auto !important'}}></webview>
            </div>
        );
    }
}

