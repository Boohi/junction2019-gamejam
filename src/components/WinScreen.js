import React, { Component } from "react";
import "./WinScreen.scss";

export default class WinScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { p1med: "p1winDown.png", p2med: "p2loseLeft.png" };
    }
    componentDidMount() {
        setInterval(this.changePictures.bind(this), 500);
    }
    changePictures() {
        if (this.state.p1med === "p1winDown.png") {
            this.setState({ p1med: "p1winUp.png", p2med: "p2loseRight.png" });
        } else {
            this.setState({ p1med: "p1winDown.png", p2med: "p2loseLeft.png" });
        }
    }
    render() {
        console.log("test");
        return (
            <div className="add-grid">
                <div className="add-player1">
                    <img
                        src={"/" + this.state.p1med}
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
                        src={"/" + this.state.p2med}
                        alt="player 2"
                        width="250"
                        height="500"
                    ></img>
                </div>
            </div>
        );
    }
}
