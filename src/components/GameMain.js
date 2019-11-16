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
            player1: { health: 3, gold: 1, damage: 2, armor: 0, weapon: 1},
            player2: { health: 5, gold: 0, damage: 2, armor: 1, weapon: 0}
        };

        this.getPageOfMessages = this.getPageOfMessages.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
    }

    componentDidMount() {
        document.getElementById("player1input").style.display = "none";
		document.getElementById("player2input").style.display = "none";
		this.setState({startDate: new Date().getTime()});
        setInterval(() => {
            this.getPageOfMessages();
            console.log(this.state.player1Message, this.state.player2Message);
        }, 2000);
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
			enemy.health -= me.damage;
		} else if (action.includes("gather")) {
			me.gold += 2;
		} else if (action.includes("steal")) {
			if (enemy.gold >= 1) {
				enemy.gold--;
				me.gold--;
			}
		} else if (action.includes("buy weapon")) {
			if (me.gold >= 5) {
				me.gold -= 5;
				me.damage += 2;
			}
		}  else if (action.includes("buy armor")) {
			if (me.gold >= 5) {
				me.gold -= 5;
				me.health += 10;
				me.armor = 1;
			}
		}


		this.updateState(player, me, enemy);
	}

	updateState(player, me, enemy) {
		if (player === 1) {
			this.setState({player1: me, player2: enemy});
		} else if (player === 2) {
			this.setState({player1: enemy, player2: me});
		}
	}

    handleMessage(message) {
		if (message.date < this.state.startDate) return ;
        if (message.email === this.props.emails.player1) {
            if (
                this.state.player1Message.date < message.date ||
                this.state.player1Message.date === undefined
            ) {
				this.setState({ player1Message: message });
				this.playerAction(1, message.snippet);
            }
        }
        if (message.email === this.props.emails.player2) {
            if (
                this.state.player2Message.date < message.date ||
                this.state.player2Message.date === undefined
            ) {
				this.setState({ player2Message: message });
				this.playerAction(2, message.snippet);
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
                <div className="game-container">
                    <div className="player1-container">
						<Player1 data={this.state.player1}></Player1>
					</div>
					<div className="global-tasks">
						<p>Attack: hit</p>
						<p>Get gold: gather</p>
						<p>Block attack: block</p>
						<p>Buy weapon (5 gold): buy weapon</p>
						<p>Buy armor (5 gold): buy armor</p>
					</div>
                    <div className="player2-container">
						<Player2 data={this.state.player2}></Player2>
					</div>
                </div>
				<p id="test-p">Lorem ipsum dalor Lorem ipsum dalor Lorem ipsum dalor Lorem ipsum dalor Lorem ipsum dalor Lorem ipsum dalor Lorem ipsum dalor Lorem ipsum dalor Lorem ipsum dalor </p>
            </div>
        );
    }
}
