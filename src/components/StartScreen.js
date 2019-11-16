import React, { Component } from "react";
import "./StartScreen.scss";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import GameMain from "./GameMain";

export default class StartScreen extends Component {
    render() {
		return (
			<div className="ad-grid">
			<div className="ad-player1">
			<img src="adp1.png"></img>
			</div>
			<div className="ad-bloc">
			<img src="battlemail005.png"></img>
			<h1>Demolish your friend in fierce E-Mail melee!</h1>
			<h3>Get ready to</h3>
			<h2>hit | block | gather | gear up | steal | quest | eat</h2>
			<h2>Enter P1 E-Mail | Enter P2 E-Mail</h2>
			<Route path="/game" render={(props) => <GameMain emails={{player1: document.getElementById("player1input").value, player2: document.getElementById("player2input").value}} {...props} /> } ></Route>
			</div>
			<div className="ad-player2">
			<img src="adp2.png"></img>
			</div>
			</div>
		)
	}
}
