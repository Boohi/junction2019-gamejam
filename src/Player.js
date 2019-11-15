import React, { Component } from 'react';

export default class Player extends Component {
    render () {
        return (
            <div className={this.props.player}>
            <img className="player_image" src={this.props.image} alt="player pic"/>
            <h1>{this.props.player} hp: {this.props.health}</h1>
            </div>
        )
    }
}