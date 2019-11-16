import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StartScreen from "./components/StartScreen";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import GameMain from "./components/GameMain";
import WinScreen from "./components/WinScreen";
let clientId =
    "133675380584-86ac3ndr5m7il6b79l5lqr5jitc8g6a1.apps.googleusercontent.com";
let apiKey = "AIzaSyC86syVDiTJq6RTioJoXeEb17biIE0meXc";
const scopes =
    "https://www.googleapis.com/auth/gmail.readonly " +
    "https://www.googleapis.com/auth/gmail.send";
let discoveryDocs = [
    "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"
];

function App() {
    let gapiChecker = setTimeout(() => {
        if (!window.gapi) {
            gapiChecker();
        } else {
            handleClientLoad();
        }
    }, 100);

    function handleAuthClick(event) {
        console.log(window.gapi);
        window.gapi.auth2.getAuthInstance().signIn();
    }

    function handleClientLoad() {
        // Load the API client and auth2 library
        window.gapi.load("client:auth2", initClient);
    }
    function initClient() {
        window.gapi.client.init({
            apiKey: apiKey,
            discoveryDocs: discoveryDocs,
            clientId: clientId,
            scope: scopes
        });
    }

    return (
        <div className="App">
            {window.gapi && (
                <div>
                    <div
                        className="authorize-button"
                        onClick={() => handleAuthClick()}
                    ></div>

                    <Router>
                        <div className="main-container">
                            <Route
                                exact
                                path="/"
                                component={StartScreen}
                            ></Route>
                            <Route
                                path="/game"
                                render={props => (
                                    <GameMain
                                        emails={{
                                            player1: document.getElementById(
                                                "player1input"
                                            ).value,
                                            player2: document.getElementById(
                                                "player2input"
                                            ).value
                                        }}
                                        {...props}
                                    />
                                )}
                            ></Route>
                            <Route
                                exact
                                path="/win"
                                component={WinScreen}
                            ></Route>
                            <div className="input-fields">
                                <div>
                                    <input
                                        type="email"
                                        id="player1input"
                                        placeholder="Player 1 email"
                                    ></input>
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        id="player2input"
                                        placeholder="Player 2 email"
                                    ></input>
                                </div>
                            </div>
                            <Link to="/game">Start New Game!</Link>
                        </div>
                    </Router>
                </div>
            )}
        </div>
    );
}

export default App;
