import React, { Component } from 'react';
import HealthBar from './HealthBar';

export default class Player2 extends Component {
    render () {
        return (
            <div className="p2">
                <h1 className="player_name">Player2</h1>
                <img className="player_image" src={this.props.image} alt="player pic"/>
                <h2>power: {this.props.power}<br/>armor: {this.props.armor}</h2>
                <HealthBar health={this.props.health}/>
            </div>
        )
    }
}