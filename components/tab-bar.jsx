import React from "react";

export class TabBarEntry extends React.Component {
    render() {
        return <p>hehebin</p>;
    }
}

export default class TabBar extends React.Component {
    render() {
        return (
            <div className="left col">
            <TabBarEntry />
            <TabBarEntry />
            <TabBarEntry />
            </div>
        );
    }
}
