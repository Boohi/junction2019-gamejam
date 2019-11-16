import React, { Component } from 'react'

export default class Player1 extends Component {
	render() {
		let health;
		let playerHealth;

		playerHealth = this.props.data.health;
		if (playerHealth >= 8) {
			health = 4;
		} else if (playerHealth >= 6) {
			health = 3;
		} else if (playerHealth >= 4) {
			health = 2;
		} else if (playerHealth >= 2) {
			health = 1;
		} else {
			health = 0;
		}

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
					<img src={'/images/Player1/Player1_' + this.props.data.armor + '_' + this.props.data.weapon + '_' + health + '.png'} alt="Char"></img>
				</div>
				<div className="player1-actions">

				</div>
			</div>
		)
	}
}
