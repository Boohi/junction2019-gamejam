import React, { Component } from 'react';
import Player1 from './Player1';
import Player2 from './Player2';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hp_p1: 100,
            hp_p2: 100,
            img_p1: "https://cdn11.bigcommerce.com/s-7va6f0fjxr/images/stencil/1280x1280/products/49070/65309/Girl-Stick-Figure-43-Vinyl-Decal-Sticker__36104.1506201870.jpg?c=2",
            img_p2: "https://cdn11.bigcommerce.com/s-7va6f0fjxr/images/stencil/1280x1280/products/49070/65309/Girl-Stick-Figure-43-Vinyl-Decal-Sticker__36104.1506201870.jpg?c=2",
            power_p1: 10,
            power_p2: 20,
            armor_p1: 5,
            armor_p2: 5
        }
    }

    hit_p2() {
        this.setState((prevState) => ({
            hp_p2: prevState.hp_p2 - prevState.power_p1 + prevState.armor_p2
        }));
    }

    hit_p1() {
        this.setState((prevState) => ({
            hp_p1: prevState.hp_p1 - prevState.power_p2 + prevState.armor_p1
        }));
    }
    
    render() {
        return (
            <div className="app_container">
                <Player1 armor={this.state.armor_p1} power={this.state.power_p1} health={this.state.hp_p1} image={this.state.img_p1}/>
                <Player2 armor={this.state.armor_p2} power={this.state.power_p2} health={this.state.hp_p2} image={this.state.img_p2}/>
                <div className="btn_container">
                    <button onClick={() => this.hit_p2()} className="p1_btn">HIT THE BITCH</button>
                </div>
                <div className="btn_container">
                    <button onClick={() => this.hit_p1()} className="p2_btn">HIT THE BITCH</button>
                </div>
            </div>
        )
    }
}

export default Game;