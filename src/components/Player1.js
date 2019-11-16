import React, { Component } from 'react'

export default class Player1 extends Component {
	render() {
		return (
			<div className="player1-div">
				<div className="player1-status">
					<div className="player1-gold">
						<h2>Gold</h2>
						<p>{this.props.data.gold}</p>
					</div>
					<div className="player1-health">
						<h2>Health</h2>
						<p>{this.props.data.health}</p>
					</div>
				</div>
				<div className="player1-image">
					<img src="/images/Player_1_naked/Player 1 naked.png" alt="Char"></img>
				</div>
				<div className="player1-actions">

				</div>
			</div>
		)
	}
}
