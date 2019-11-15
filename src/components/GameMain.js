import React, { Component } from "react";

import "./GameMain.scss"

export default class GameMain extends Component {

    render() {
        return (
            <div>
                <h1>THE GAME</h1>
                <div className="game-container">
                    <div className="player1-container"></div>
                    <div className="player2-container"></div>
                </div> 
            </div>
        );
    }
}
