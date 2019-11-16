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
    render() {
		return (
			<div>Welcome to BladeMail!</div>
		)
	}
}
