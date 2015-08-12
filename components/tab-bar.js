import React from 'react';
import TabBarEntry from './tab-bar-entry';
import style from '../style/main.css';

export default class TabBar extends React.Component {
    render() {
        let classes = style.left + ' ' + style.col;
        return (
            <div className={classes}>
                <TabBarEntry />
                <TabBarEntry />
                <TabBarEntry />
            </div>
        );
    }
}
