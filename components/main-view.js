import React from 'react';
import TabBar from './tab-bar.jsx';
import PageView from './page-view.jsx';

export default class MainView extends React.Component {
    render() {
        return (
            <div>
                <TabBar />
                <PageView />
            </div>
        );
    }
}
