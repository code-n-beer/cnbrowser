import React from 'react';
import TabBar from './tab-bar';
import PageView from './page-view';

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
