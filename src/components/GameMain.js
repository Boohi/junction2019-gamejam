import React, { Component } from "react";
import Player1 from "./Player1";
import Player2 from "./Player2";
import "./GameMain.scss";
import data from "./Data";

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
                snippet: "",
                action: 0,
                responseTime: 0,
                health: 10,
                gold: 2,
                damage: 2,
                armor: 0,
                weapon: 0,
                block: 0
            },
            player2: {
                snippet: "",
                action: 0,
                responseTime: 0,
                health: 10,
                gold: 2,
                damage: 2,
                armor: 0,
                weapon: 0,
                block: 0
            },
            showSnippet: 0,
            question: data[Math.floor(Math.random() * 35)]
        };

        this.getPageOfMessages = this.getPageOfMessages.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this);
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
            this.setState({ counter: Math.max(this.state.counter - 1, 0) });
            if (this.state.counter === 0 && flag === 0) {
                this.setState({ showSnippet: 1 });
                flag = 1;
                setTimeout(() => {
                    flag = 0;
                    this.playRound();
                }, 3000);
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
            me.snippet = "HIT";
            if (enemy.block) {
                if (Math.random() > 0.5) {
                    enemy.health = Math.max(0, enemy.health - me.damage);
                }
                enemy.block = 0;
            } else {
                let p_img;
                if (player === 1) {
                    p_img = "p2_img";
                } else {
                    p_img = "p1_img";
                }
                enemy.health = Math.max(0, enemy.health - me.damage);
                setTimeout(() => {
                    if (!document.getElementById(p_img)) return;
                    if (player === 1) {
                        document.getElementById(p_img).src =
                            "/images/Player2/Player2_" +
                            this.state.player2.armor +
                            "_" +
                            this.state.player2.weapon +
                            "_0.png";
                    } else {
                        document.getElementById(p_img).src =
                            "/images/Player1/Player1_" +
                            this.state.player1.armor +
                            "_" +
                            this.state.player1.weapon +
                            "_0.png";
                    }
                }, 1);
                setTimeout(() => {
                    if (!document.getElementById(p_img)) return;
                    let health;
                    if (enemy.health >= 8) {
                        health = 4;
                    } else if (enemy.health >= 6) {
                        health = 3;
                    } else if (enemy.health >= 4) {
                        health = 2;
                    } else if (enemy.health >= 2) {
                        health = 1;
                    } else {
                        health = 0;
                    }
                    if (player === 1) {
                        document.getElementById(p_img).src =
                            "/images/Player2/Player2_" +
                            this.state.player2.armor +
                            "_" +
                            this.state.player2.weapon +
                            "_" +
                            health +
                            ".png";
                    } else {
                        document.getElementById(p_img).src =
                            "/images/Player1/Player1_" +
                            this.state.player1.armor +
                            "_" +
                            this.state.player1.weapon +
                            "_" +
                            health +
                            ".png";
                    }
                }, 2000);
                if (enemy.health === 0) {
                    this.props.history.push({
                        pathname: "/win",
                        state: { winner: player }
                    });
                }
            }
        } else if (action.includes("gather")) {
            me.snippet = "GATHER";
            me.gold += 2;
        } else if (action.includes("steal")) {
			me.snippet = "STEAL";
			let p_img;
			if (player === 1) {
				p_img = "p2_img";
			} else {
				p_img = "p1_img";
			}
            if (enemy.block && enemy.gold >= 1) {
                if (Math.random() > 0.5) {
                    enemy.gold--;
					me.gold++;
                }
                enemy.block = 0;
            } else if (enemy.gold >= 1) {
                enemy.gold--;
				me.gold++;
				if (document.getElementById(p_img)) {
					let source = document.getElementById(p_img).src;
					document.getElementById(p_img).src = "/p" + player + "steal.png";
					setTimeout(() => {
						document.getElementById(p_img).src = source;
					}, 1500);
				}
            }
        } else if (action.includes("weapon")) {
            me.snippet = "BUY WEAPON";
            if (me.gold >= 5) {
                me.gold -= 5;
                me.damage += 2;
                me.weapon = 1;
            }
        } else if (action.includes("armor")) {
            me.snippet = "BUY ARMOR";
            if (me.gold >= 5) {
                me.gold -= 5;
                me.health += 10;
                me.armor = 1;
            }
        } else if (action.includes("eat")) {
            me.snippet = "EAT";
            if (me.gold >= 1) {
                me.gold--;
                me.health += 2;
            }
        } else if (action.includes("block")) {
            me.snippet = "BLOCK";
            me.block = 1;
        } else {
            me.snippet = "QUEST";
            var i;
            for (i = 0; i < this.state.question.answers.length; i++) {
                console.log(
                    action,
                    this.state.question.answers[i].toLowerCase()
                );
                if (
                    action.includes(
                        this.state.question.answers[i].toLowerCase()
                    )
                ) {
                    me.gold += this.state.question.difficulty * 2;
                    this.updateQuestion();
                    break;
                }
            }
        }
        this.updateState(player, me, enemy);
    }

    updateQuestion() {
        this.setState({ question: data[Math.floor(Math.random() * 35)] });
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
            this.playerAction(1, "hit");
            this.playerAction(2, "hit");
        } else if (player1Action === 0) {
            this.playerAction(2, player2Message);
            this.playerAction(1, "hit");
        } else if (player2Action === 0) {
            this.playerAction(1, player1Message);
            this.playerAction(2, "hit");
        } else if (
            this.state.player2.responseTime > this.state.player1.responseTime
        ) {
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
        this.setState({ player1, player2, counter: 60, showSnippet: 1 });
        setTimeout(() => {
            player1.snippet = "";
            player2.snippet = "";
            this.setState({ player1, player2, showSnippet: 0 });
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
                if (
                    this.state.player1.action === 1 &&
                    this.state.player2.action === 1
                ) {
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
                if (
                    this.state.player1.action === 1 &&
                    this.state.player2.action === 1
                ) {
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
        let { question } = this.state;
        return (
            <div>
                <img id="game-logo" src="/battlemail005.png" alt="logo"></img>
                <p className="host-email">junction2019gamejam@gmail.com</p>
                <div className="game-container">
                    <div className="player1-container">
                        <Player1
                            data={this.state.player1}
                            showSnippet={this.state.showSnippet}
                            snippet={this.state.player1Message.snippet}
                        ></Player1>
                    </div>
                    <div className="global-tasks">
                        <span>{this.state.counter}</span>
                        <p>
                            <img
                                className="move-icon"
                                src="../hit.png"
                                alt="attack"
                            />
                            <div className="move-description">hit</div>
                        </p>
                        <p>
                            <img
                                className="move-icon"
                                src="../steal.png"
                                alt="attack"
                            />
                            <div className="move-description">steal</div>
                        </p>
                        <p>
                            <img
                                className="move-icon"
                                src="../block.png"
                                alt="attack"
                            />
                            <div className="move-description">block</div>
                        </p>
                        <p>
                            <img
                                className="move-icon"
                                src="../eat.png"
                                alt="attack"
                            />
                            <div className="move-description">eat (1g)</div>
                        </p>
                        <p>
                            <img
                                className="move-icon"
                                src="../weapon.png"
                                alt="attack"
                            />
                            <div className="move-description">weapon (5g)</div>
                        </p>
                        <p>
                            <img
                                className="move-icon"
                                src="../armor.png"
                                alt="attack"
                            />
                            <div className="move-description">armor (5g)</div>
                        </p>
                    </div>
                    <div className="player2-container">
                        <Player2
                            data={this.state.player2}
                            showSnippet={this.state.showSnippet}
                            snippet={this.state.player2Message.snippet}
                        ></Player2>
                    </div>
                </div>
                <p id="test-p">{question.question}</p>
            </div>
        );
    }
}
