import React, { Component } from 'react';

export default class Player2 extends Component {
    render () {
        return (
            <div className="p2">
                <img className="player_image" src={this.props.image} alt="player pic"/>
                <h1>Player2 hp: {this.props.health}</h1>
            </div>
        )
    }
}