import React, { Component } from "react";
let clientId =
    "133675380584-86ac3ndr5m7il6b79l5lqr5jitc8g6a1.apps.googleusercontent.com";
let apiKey = "AIzaSyC86syVDiTJq6RTioJoXeEb17biIE0meXc";
const scopes =
    "https://www.googleapis.com/auth/gmail.readonly " +
    "https://www.googleapis.com/auth/gmail.send";
let discoveryDocs = [
    "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"
];

export default class StartScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
			player1Mail: "otto.maenpaa@gmail.com",
			player2Mail: "joonas.suonpera@gmail.com",
            player1Message: {},
            player2Message: {},
            newestMessage: {}
		};
		
		this.getPageOfMessages = this.getPageOfMessages.bind(this);
		this.handleMessage = this.handleMessage.bind(this);
    }

    componentDidMount() {
        this.handleClientLoad();
        setInterval(() => {
			this.getPageOfMessages();
			console.log(this.state.player1Message, this.state.player2Message);
        }, 2000);
        /* 		setInterval(() => {
			if (window.gapi && window.gapi.client) {
				console.log(window.gapi.client.gmail);
				messages = window.gapi.client.gmail.users.messages.list({
					'userId': 'me',
					'labelIds': 'INBOX',
					'maxResults': 10
				});
				console.log(messages);
			}
		}, 1000); */
    }

    componentDidUpdate(prevProps, prevState) {}

    handleClientLoad() {
        // Load the API client and auth2 library
        window.gapi.load("client:auth2", this.initClient);
    }
    initClient() {
        window.gapi.client
            .init({
                apiKey: apiKey,
                discoveryDocs: discoveryDocs,
                clientId: clientId,
                scope: scopes
            })
            .then(function() {
                // Listen for sign-in state changes.
                //window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
                // Handle the initial sign-in state.
                //this.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
                this.authorizeButton.onclick = this.handleAuthClick;
                this.signoutButton.onclick = this.handleSignoutClick;
            });
    }

    updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
            this.authorizeButton.style.display = "none";
            this.signoutButton.style.display = "block";
            this.makeApiCall();
        } else {
            this.authorizeButton.style.display = "block";
            this.signoutButton.style.display = "none";
        }
    }
    handleAuthClick(event) {
        window.gapi.auth2.getAuthInstance().signIn();
    }
    handleSignoutClick(event) {
        window.gapi.auth2.getAuthInstance().signOut();
    }
    // Load the API and make an API call.  Display the results on the screen.
    makeApiCall() {
        window.gapi.client.people.people
            .get({
                resourceName: "people/me",
                "requestMask.includeField": "person.names"
            })
            .then(function(resp) {
                var p = document.createElement("p");
                var name = resp.result.names[0].givenName;
                console.log(name);
                p.appendChild(document.createTextNode("Hello, " + name + "!"));
                document.getElementById("content").appendChild(p);
            });
	}
	
	handleMessage(message) {
		if (message.email === this.state.player1Mail) {
			if (this.state.player1Message.date < message.date || this.state.player1Message.date === undefined) {
				this.setState({player1Message: message});
			}
		}
		if (message.email === this.state.player2Mail) {
			if (this.state.player2Message.date < message.date || this.state.player2Message.date === undefined) {
				this.setState({player2Message: message});
			}
		}
	}

    getPageOfMessages(start, limit = 2) {
        /* return new Promise(function(resolve, reject) { */
            let messages = [];

            let getMessagesRequest = window.gapi.client.gmail.users.messages.list(
                {
                    userId: "me",
                    labelIds: "INBOX",
                    maxResults: limit
                }
            );

            getMessagesRequest.execute(response => {
                let numberOfMessageDetailsToFetch = response.messages.length;
                let messageIdToArrayIndexMap = {};

                response.messages.forEach((message, messageIndex) => {
                    //
                    // We put each message "stub" here. This means that "messages" will contain newest to oldest messages
                    // in the same order as you'd see them at gmail.com. Later, we'll retrieve the details for each message.
                    // When we do that, those details need to be put into the correct position/slot in "messages."
                    //
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
							snippet = snippet.split('&')[0];
							id = messageDetails.id;
                            if (header.name === "From") {
                                //console.log(messageDetails.payload.headers[i].value);
                                email = header.value.substring(
                                    header.value.lastIndexOf("<") + 1,
                                    header.value.lastIndexOf(">")
								);
							} else if (header.name === "Date") {
								date = new Date(header.value).getTime();
							}		
						}
						
					
						this.handleMessage({id: id, email: email, snippet: snippet, date: date});
                        //console.log(messageDetails.payload.headers[15].value);
                        //console.log(messageDetails.id, messageDetails.snippet, messageDetails.payload.headers[22].value, messageDetails.payload.headers[15].value);

                        //
                        // Replace the stub with the retrieved message. This allows us to get message details at different times
                        // (some take longer than others), but the message-with-details are in the same order as the original
                        // list we retrieved.
                        //
                        //messages[messageIndex] = parseMessageDetails(messageDetails)

                        numberOfMessageDetailsToFetch -= 1;
                        if (numberOfMessageDetailsToFetch === 0) {
							return ;
                            /* resolve(messages); */
                        }
                    });
                    /* console.log(message); */
                    /* this.getMessageBody(message); */
                    /* console.log(messages); */
                });
            });
        /* }); */ // promise
    }

    getMessageBody(message) {
        let encodedBody = "";

        function getHTMLPart(arr) {
            for (let x = 0; x <= arr.length; x++) {
                if (typeof arr[x].parts === "undefined") {
                    if (arr[x].mimeType === "text/html") {
                        return arr[x].body.data;
                    }
                } else {
                    return getHTMLPart(arr[x].parts);
                }
            }
            return "";
        }

        if (typeof message.parts === "undefined") {
            encodedBody = message.body.data;
        } else {
            encodedBody = getHTMLPart(message.parts);
        }
        encodedBody = encodedBody
            .replace(/-/g, "+")
            .replace(/_/g, "/")
            .replace(/\s/g, "");
        /* console.log(encodedBody); */
        return decodeURIComponent(escape(window.atob(encodedBody)));

        if (typeof message.parts === "undefined") {
            encodedBody = message.body && message.body.data; //'none' //message.body.data;
            encodedBody = encodedBody || "missing";
        } else {
            encodedBody = getHTMLPart(message.parts);
        }
        encodedBody = encodedBody
            .replace(/-/g, "+")
            .replace(/_/g, "/")
            .replace(/\s/g, "");
        return encodedBody;
    }

    render() {
        return <div></div>;
    }
    /* 	componentDidMount() {
		this.authClient();
		window.gapi.load('client:auth2', '');
	} */

    /* 	function initClient() {
		window.gapi.client.init({
			apiKey: apiKey,
			discoveryDocs: discoveryDocs,
			clientId: clientId,
			scope: scopes
		}).then(function () {
		  // Listen for sign-in state changes.
		  window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
		  // Handle the initial sign-in state.
		  updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
		  authorizeButton.onclick = handleAuthClick;
		  signoutButton.onclick = handleSignoutClick;
		});
	  } */

    /* 	async authClient() {
		window.gapi.client.init({
			apiKey: key,
			discoveryDocs: discoveryDocs,
			clientId: clientId,
			scope: scopes
		})
		let auth2 = await loadAuth2(clientId, scopes);
	}
	
	render() {
		return (
			<div>
				<h1>Hive goes to Junction 2019</h1>
				<h3>GAME JAM</h3>
				<div id="authorize-button"></div>
				<div id="signout-button"></div>
			</div>
		)
	} */
    /* 	constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }
    async componentDidMount() {
		let auth2 = await loadAuth2(clientId, scopes);

        if (auth2.isSignedIn.get()) {
            this.updateUser(auth2.currentUser.get())
        } else {
            this.attachSignin(document.getElementById('customBtn'), auth2);
        }
    }
    async componentDidUpdate() {
        if(!this.state.user) {
			let auth2 = await loadAuth2(clientId, '')
			window.gapi.client.load('gmail', 'v1', _ => {
				return true;
			 });
            this.attachSignin(document.getElementById('customBtn'), auth2);
		}
		let initialRequest;
		console.log(window.gapi.client);
		setInterval(() => {
			if (window.gapi.client) {
				initialRequest = window.gapi.client.gmail.users.messages.list({
					'userId': 'me'
				  });
				console.log(initialRequest);
			} else {
				console.log(window.gapi);
			}
		}, 2000)
    }
    updateUser(currentUser) {
        let name = currentUser.getBasicProfile().getName()
        let profileImg = currentUser.getBasicProfile().getImageUrl()
        this.setState({
            user: {
                name: name,
                profileImg: profileImg
            }
        })
    }
    attachSignin(element, auth2) {
        auth2.attachClickHandler(element, {},
            (googleUser) => {
                this.updateUser(googleUser);
            }, (error) => {
                console.log(JSON.stringify(error))
            });
    }
    signOut = () => {
        let auth2 = window.gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
            this.setState({ user: null })
            console.log('User signed out.');
        });
    }
    render() {
        if(this.state.user) {
            return (
                <div className="container">
                    <div id="" className="btn logout" onClick={this.signOut}>
                        Logout
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container">
                    <div id="customBtn" className="btn login">
                        Login
                    </div>
                </div>
            );
        }
    } */
}
