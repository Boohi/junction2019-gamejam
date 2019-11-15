import React, { Component } from 'react';

export default class Player1 extends Component {
    render () {
        return (
            <div className="p1">
                <img className="player_image" src={this.props.image} alt="player pic"/>
                <h1>Player1 hp: {this.props.health}</h1>
            </div>
        )
    }
}