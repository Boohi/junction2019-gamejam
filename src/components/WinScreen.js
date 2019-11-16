import React, { Component } from "react";
import "./WinScreen.scss";

export default class WinScreen extends Component {
    render() {
        console.log("test");
        return (
            <div className="add-grid">
                <div className="add-player1">
                    <img
                        src="p1winDown.png"
                        alt="player 1"
                        width="250"
                        height="500"
                    ></img>
                </div>
                <div className="add-bloc">
                    <img src="battlemail005.png" alt="Game logo"></img>
                    <h1>Player X Wins!</h1>
                </div>
                <div className="add-player2">
                    <img
                        src="p2loseLeft.png"
                        alt="player 2"
                        width="250"
                        height="500"
                    ></img>
                </div>
            </div>
        );
    }
}
