import React, { Component } from "react";
import "./WinScreen.scss";

export default class WinScreen extends Component {
    constructor(props) {
        super(props);
        if (this.props.location.state.winner === 1)
            this.state = { p1med: "p1winDown.png", p2med: "p2loseLeft.png" };
        else this.state = { p1med: "p1loseLeft.png", p2med: "p2winDown.png" };
    }
    componentDidMount() {
        setInterval(this.changePictures.bind(this), 500);
        console.log(this.props.location.state.winner);
    }
    changePictures() {
        if (this.props.location.state.winner === 1) {
            if (this.state.p1med === "p1winDown.png") {
                this.setState({
                    p1med: "p1winUp.png",
                    p2med: "p2loseRight.png"
                });
            } else {
                this.setState({
                    p1med: "p1winDown.png",
                    p2med: "p2loseLeft.png"
                });
            }
        } else {
            if (this.state.p2med === "p2winDown.png") {
                this.setState({
                    p2med: "p2winUp.png",
                    p1med: "p1loseRight.png"
                });
            } else {
                this.setState({
                    p2med: "p2winDown.png",
                    p1med: "p1loseLeft.png"
                });
            }
        }
    }
    render() {
        return (
            <div className="win-grid">
                <div className="grid-header">
                    <img src="battlemail005.png" alt="Game logo"></img>
                    <h1>Player {this.props.location.state.winner} wins!</h1>
                </div>
                <div className="grid-p1">
                    <img
                        src={"/" + this.state.p1med}
                        alt="player 1"
                        width="500"
                        height="600"
                    ></img>
                </div>
                <div className="grid-p2">
                    <img
                        src={"/" + this.state.p2med}
                        alt="player 2"
                        width="500"
                        height="600"
                    ></img>
                </div>
            </div>
        );
    }
}
