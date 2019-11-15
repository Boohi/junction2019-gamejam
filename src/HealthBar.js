import React, { Component } from 'react';

export default class HealthBar extends Component {
    render () {
        return (
        <div className="hp_container">
            <div className="hp_bar" style={{width: this.props.health + '%'}}></div>
        </div>
        )
    }
}