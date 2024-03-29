import React, { Component } from "react";
import "./StartScreen.scss";

export default class StartScreen extends Component {
    render() {
		console.log("test");
        return (
            <div className="add-grid">
                <div className="add-player1">
                    <img src="adp1.png" alt="player 1"></img>
                </div>
                <div className="add-bloc">
                    <img src="battlemail005.png" alt="Game logo"></img>
                    <h1>Demolish your friend in fierce E-Mail melee!</h1>
                    <h3>Get ready to</h3>
                    <h2>
                        hit | quest | steal | block | eat | gear up</h2>
                    <h2>Player 1 VS Player 2</h2>
                </div>
                <div className="add-player2">
                    <img src="adp2.png" alt="player 2"></img>
                </div>
            </div>
        );
    }
}
