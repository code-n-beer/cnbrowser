import React from 'react';
import TabBarEntry from 'tab-bar-entry.js';

export default class TabBar extends React.Component {
    render() {
        return (
            <div className='left col'>
            <TabBarEntry />
            <TabBarEntry />
            <TabBarEntry />
            </div>
        );
    }
}
