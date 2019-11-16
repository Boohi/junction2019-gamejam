import React, { Component } from "react";
import "./GameMain.scss";

export default class GameMain extends Component {
    constructor(props) {
        super(props);

        this.state = {
            player1Mail: "otto.maenpaa@gmail.com",
            player2Mail: "joonas.suonpera@gmail.com",
            player1Message: {},
			player2Message: {},
			player1: {health: 100, gold: 0, damage: 5, armor: 5},
			player2: {health: 100, gold: 0, damage: 5, armor: 5}
        };

        this.getPageOfMessages = this.getPageOfMessages.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
    }

    componentDidMount() {
		document.getElementById("player1input").style.display = "none";
		document.getElementById("player2input").style.display = "none";
        setInterval(() => {
            this.getPageOfMessages();
            console.log(this.state.player1Message, this.state.player2Message);
        }, 2000);
    }


    handleMessage(message) {
        if (message.email === this.props.emails.player1) {
            if (
                this.state.player1Message.date < message.date ||
                this.state.player1Message.date === undefined
            ) {
                this.setState({ player1Message: message });
            }
        }
        if (message.email === this.props.emails.player2) {
            if (
                this.state.player2Message.date < message.date ||
                this.state.player2Message.date === undefined
            ) {
                this.setState({ player2Message: message });
            }
        }
    }

    getPageOfMessages(start, limit = 5) {
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
                <h1>THE GAME</h1>
                <div className="game-container">
                    <div className="player1-container">
						<p>Player 1: {this.props.emails.player1}</p>
						<p>Latest message: {this.state.player1Message.snippet}</p>
					</div>
                    <div className="player2-container">
						<p>Player 2: {this.props.emails.player2}</p>
						<p>Latest message: {this.state.player2Message.snippet}</p>
					</div>
                </div>
            </div>
        );
    }
}
