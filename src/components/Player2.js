import React, { Component } from "react";

export default class Player2 extends Component {
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
            <div className="player2-div">
                <div className="player2-actions"></div>
                <div className="player2-image">
                    <img 
                        src={'/images/Player2/Player2_' + this.props.data.armor + '_' + this.props.data.weapon + '_' + health + '.png'}
                        alt=""
                    />
                </div>
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
