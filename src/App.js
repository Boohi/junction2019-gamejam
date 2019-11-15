import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StartScreen from "./components/StartScreen";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import GameMain from "./components/GameMain";

function App() {

    return (
        <div className="App">
            <Router>
                <div>
					<Link to="/game">Start New Game!</Link>
                    <Route exact path="/" component={StartScreen}></Route>
                    <Route path="/game" component={GameMain}></Route>
                </div>
            </Router>
        </div>
    );
}

export default App;
