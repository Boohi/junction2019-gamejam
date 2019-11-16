import React, { Component } from "react";

export default class Player1 extends Component {
    render() {
        let amount = Math.floor(this.props.data.health / 2);
        let half = this.props.data.health % 2;
        return (
            <div className="player1-div">
                <div className="player1-status">
                    <div className="player1-health">
                        <h2>Health</h2>
                        <p>
                            {Array(amount).fill(
                                <img src="/heart.png" alt="Heart"></img>
                            )}
                            {Array(half).fill(
                                <img
                                    src="/halfheart.png"
                                    alt="Half Heart"
                                ></img>
                            )}
                        </p>
                    </div>
                    <div className="player1-gold">
                        <h2>Gold</h2>
                        <p>
                            {Array(this.props.data.gold).fill(
                                <img src="/firecoin.png" alt="Gold coin"></img>
                            )}
                        </p>
                    </div>
                </div>
                <div className="player1-image">
                    <img
                        src="/images/Player_1_naked/Player 1 naked.png"
                        alt="Char"
                    ></img>
                </div>
                <div className="player1-actions"></div>
            </div>
        );
    }
}
