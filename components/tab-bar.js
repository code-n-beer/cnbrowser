import React from 'react';
import TabBarEntry from './tab-bar-entry';

export default class TabBar extends React.Component {
    render() {
        console.log( '-------- tab bar -------' );
        console.log( <TabBarEntry /> );
        console.log( '-------- tab bar -------' );
        return (
            <div className='left col'>
                <TabBarEntry />
                <TabBarEntry />
                <TabBarEntry />
            </div>
        );
    }
}
