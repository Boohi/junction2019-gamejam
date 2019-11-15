import React, { Component } from 'react';
import HealthBar from './HealthBar';

export default class Player1 extends Component {

    render () {
        return (
            <div className="p1">
                <h1 className="player_name">Player1</h1>
                <img className="player_image" src={this.props.image} alt="player pic"/>
                <h2>power: {this.props.power}<br/>armor: {this.props.armor}</h2>
                <HealthBar health={this.props.health}/>
            </div>
        )
    }
}