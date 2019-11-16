import React, { Component } from "react";

export default class Player2 extends Component {
    render() {
        return (
            <div className="player2-div">
                <div className="player2-actions"></div>
                <div className="player2-image"></div>
                <div className="player2-status">
					<div className="player2-gold">
						<h2>Gold</h2>
						<p>{this.props.data.gold}</p>
					</div>
					<div className="player2-health">
						<h2>Health</h2>
						<p>{this.props.data.health}</p>
					</div>
				</div>
            </div>
        );
    }
}
