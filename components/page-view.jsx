"use babel";

import React from "react";

class UrlBar extends React.Component {
    render() {
        return <input type="url" id="urlbar" style={{width: "100%"}}></input>;
    }
}

export default class PageView extends React.Component {
    render() {
        return (
            <div className="right col">
                <UrlBar />
                <webview id="webpage" src="https://duckduckgo.com" style={{width: "auto !important"}}></webview>
            </div>
        );
    }
}

