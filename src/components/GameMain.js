import React, { Component } from "react";
import "./GameMain.scss"

export default class GameMain extends Component {
    render() {
        return (
            <div>
		<img src="battlemail005.png"></img>
                <div className="game-container">
<div className="player1-status"><h1>Coins</h1><img src="firecoin.png" style={{padding: "3px"}}></img><img src="firecoin.png" style={{padding: "3px"}}></img>
<img src="firecoin.png" style={{padding: "3px"}}></img><img src="firecoin.png" style={{padding: "3px"}}></img><h1>Hitpoints</h1><img src="heart.png" style={{padding: "3px"}}></img><img src="heart.png" style={{padding: "3px"}}></img>
<img src="heart.png" style={{padding: "3px"}}></img><img src="heart.png" style={{padding: "3px"}}></img>
<img src="heart.png" style={{padding: "3px"}}></img><img src="heart.png" style={{padding: "3px"}}></img></div>
                    <div className="player1-container">
<div></div>
			<img src="purple300.png"></img>
			</div><div className="player1-status"></div>
			<div className="player2-status"></div>
                    <div className="player2-container"></div>
			<div className="player2-status"></div>
                </div> <h2 style={{padding: "8px", align: "right"}}>( Side Quest | Trivia )</h2><h3 style={{float: "right", align: "right"}}>Which social virtual chat game 
		by a Finnish company surpassed 200 million registered avatars in 2011 and was 
		acquired by the Finnish telecom company Elisa in 2013?</h3><h1>Weighted Dice</h1><img src="dice.png" style={{padding: "8px", float: "bottom", align: "right"}}></img>
            </div>
        );
    }
}
