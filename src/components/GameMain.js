import React, { Component } from "react";
import Player1 from "./Player1";
import Player2 from "./Player2";
import "./GameMain.scss";

export default class GameMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startDate: "",
            player1Mail: "otto.maenpaa@gmail.com",
            player2Mail: "joonas.suonpera@gmail.com",
            player1Message: {},
            player2Message: {},
            counter: 60,
            player1: {
                action: 0, responseTime: 0, health: 10, gold: 5,
                damage: 2, armor: 0, weapon: 0, block: 0 
            },
            player2: {
                action: 0, responseTime: 0, health: 10, gold: 2,
                damage: 2, armor: 0, weapon: 0, block: 0
			},
			showSnippet: 0
        };

        this.getPageOfMessages = this.getPageOfMessages.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
    }

    componentDidMount() {
        document.getElementById("player1input").style.display = "none";
        document.getElementById("player2input").style.display = "none";
		this.setState({ startDate: new Date().getTime() });
		let flag = 0;
        setInterval(() => {
            this.getPageOfMessages();
            console.log(this.state.player1Message, this.state.player2Message);
        }, 2000);
        setInterval(() => {
			this.setState({counter : Math.max(this.state.counter - 1, 0)});
			if (this.state.counter === 0 && flag === 0) {
				flag = 1;
				setTimeout(() => {
					flag = 0;
					this.playRound();
				}, 3000)
			}
        }, 1000);
    }

    playerAction(player, action) {
        let me;
        let enemy;
        if (player === 1) {
            me = this.state.player1;
            enemy = this.state.player2;
        } else {
            me = this.state.player2;
            enemy = this.state.player1;
        }
        action = action.toLowerCase().trim();

        if (action.includes("hit")) {
			if (enemy.block) {
				if (Math.random() > 0.5) {
					enemy.health = Math.max(0, enemy.health - me.damage);
				}
				enemy.block = 0;
			} else {
				enemy.health = Math.max(0, enemy.health - me.damage);
			}
        } else if (action.includes("gather")) {
            me.gold += 2;
        } else if (action.includes("steal")) {
            if (enemy.gold >= 1) {
                enemy.gold--;
                me.gold++;
            }
        } else if (action.includes("buy weapon")) {
            if (me.gold >= 5) {
                me.gold -= 5;
				me.damage += 2;
				me.weapon = 1;
            }
        } else if (action.includes("buy armor")) {
            if (me.gold >= 5) {
                me.gold -= 5;
                me.health += 10;
                me.armor = 1;
            }
        } else if (action.includes("eat")) {
            if (me.gold >= 1) {
                me.gold--;
                me.health += 2;
            }
        } else if (action.includes("block")) {
			me.block = 1;
		}

        this.updateState(player, me, enemy);
    }

    updateState(player, me, enemy) {
        if (player === 1) {
            this.setState({ player1: me, player2: enemy });
        } else if (player === 2) {
            this.setState({ player1: enemy, player2: me });
        }
    }

    playRound() {
        let player1Action = this.state.player1.action;
        let player2Action = this.state.player2.action;
        let player1Message = this.state.player1Message.snippet;
        let player2Message = this.state.player2Message.snippet;

        if (player1Action === 0 && player2Action === 0) {
            ;
        } else if (player1Action === 0) {
            this.playerAction(2, player2Message);
        } else if (player2Action === 0) {
            this.playerAction(1, player1Message);
        } else if (this.state.player2.responseTime > this.state.player1.responseTime) {
            this.playerAction(1, player1Message);
            this.playerAction(2, player2Message);
        } else {
            this.playerAction(2, player2Message);
            this.playerAction(1, player1Message);
        }
        let player1 = this.state.player1;
        let player2 = this.state.player2;
        player1.action = 0;
        player1.responseTime = 0;
        player2.action = 0;
        player2.responseTime = 0;
		this.setState({player1, player2, counter : 60, showSnippet: 1});
		setTimeout(() => {
			this.setState({showSnippet: 0});
		}, 4000);
    }

    handleMessage(message) {
        if (message.date < this.state.startDate) return;
        if (message.email === this.props.emails.player1) {
            if (
                this.state.player1Message.date < message.date ||
                this.state.player1Message.date === undefined
            ) {
                let player1Action = this.state.player1;
                player1Action.action = 1;
                player1Action.responseTime = new Date().getTime();
                this.setState({ player1Action });
                this.setState({ player1Message: message });
                if (this.state.player1.action === 1 && this.state.player2.action === 1) {
                    this.playRound();
                }
            }
        }
        if (message.email === this.props.emails.player2) {
            if (
                this.state.player2Message.date < message.date ||
                this.state.player2Message.date === undefined
            ) {
                let player2Action = this.state.player2;
                player2Action.action = 1;
                player2Action.responseTime = new Date().getTime();
                this.setState({ player2Action });
                this.setState({ player2Message: message });
                if (this.state.player1.action === 1 && this.state.player2.action === 1) {
                    this.playRound();
                }
            }
        }
    }

    getPageOfMessages(start, limit = 3) {
        let messages = [];

        let getMessagesRequest = window.gapi.client.gmail.users.messages.list({
            userId: "me",
            labelIds: "INBOX",
            maxResults: limit
        });

        getMessagesRequest.execute(response => {
			if (!response.messages) return;
            let numberOfMessageDetailsToFetch = response.messages.length;
            response.messages.forEach((message, messageIndex) => {
                messages.push(message);

                let messageDetailsRequest = window.gapi.client.gmail.users.messages.get(
                    {
                        userId: "me",
                        id: message.id
                    }
                );

                messageDetailsRequest.execute(messageDetails => {
                    let email;
                    let snippet;
                    let id;
                    let date;
                    for (
                        let i = 0;
                        i < messageDetails.payload.headers.length;
                        i++
                    ) {
                        let header = messageDetails.payload.headers[i];
                        snippet = messageDetails.snippet;
                        snippet = snippet.split("&")[0];
                        id = messageDetails.id;
                        if (header.name === "From") {
                            email = header.value.substring(
                                header.value.lastIndexOf("<") + 1,
                                header.value.lastIndexOf(">")
                            );
                        } else if (header.name === "Date") {
                            date = new Date(header.value).getTime();
                        }
                    }

                    this.handleMessage({
                        id: id,
                        email: email,
                        snippet: snippet,
                        date: date
                    });

                    numberOfMessageDetailsToFetch -= 1;
                    if (numberOfMessageDetailsToFetch === 0) {
                        return;
                    }
                });
            });
        });
    }

    render() {
        return (
            <div>
                <img id="game-logo" src="/battlemail005.png" alt="logo"></img>
				<p className="host-email">junction2019gamejam@gmail.com</p>
                <div className="game-container">
                    <div className="player1-container">
                        <Player1 data={this.state.player1} showSnippet={this.state.showSnippet} snippet={this.state.player1Message.snippet}></Player1>
                    </div>
                    <div className="global-tasks">
						<span>{this.state.counter}</span>
                        <p>
                            <img className="move-icon" src="../heart.png" alt="attack"/>
                            <div className="move-description">"hit"</div>
                        </p>
                        <p>
                            <img className="move-icon" src="../heart.png" alt="attack"/>
                            <div className="move-description">"gather"</div>
                        </p>
                        <p>
                            <img className="move-icon" src="../heart.png" alt="attack"/>
                            <div className="move-description">"steal"</div>
                        </p>
                        <p>
                            <img className="move-icon" src="../heart.png" alt="attack"/>
                            <div className="move-description">"block"</div>
                        </p>
                        <p>
                            <img className="move-icon" src="../heart.png" alt="attack"/>
                            <div className="move-description">"eat (1g)"</div>
                        </p>
                        <p>
                            <img className="move-icon" src="../heart.png" alt="attack"/>
                            <div className="move-description">"weapon (5g)"</div>
                        </p>
                        <p>
                            <img className="move-icon" src="../heart.png" alt="attack"/>
                            <div className="move-description">"armor (5g)"</div>
                        </p>
                    </div>
                    <div className="player2-container">
                        <Player2 data={this.state.player2} showSnippet={this.state.showSnippet} snippet={this.state.player2Message.snippet}></Player2>
                    </div>
                </div>
                <p id="test-p">
                    Lorem ipsum dalor Lorem ipsum dalor Lorem ipsum dalor Lorem
                    ipsum dalor Lorem ipsum dalor Lorem ipsum dalor Lorem ipsum
                    dalor Lorem ipsum dalor Lorem ipsum dalor{" "}
                </p>
            </div>
        );
    }
}
