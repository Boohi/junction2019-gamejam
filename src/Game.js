import React, { Component } from 'react';
import Player1 from './Player1';
import Player2 from './Player2';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hp_p1: 100,
            hp_p2: 100,
            img_p1: "https://res.cloudinary.com/teepublic/image/private/s--I8wuh43y--/t_Preview/b_rgb:ffffff,c_lpad,f_jpg,h_630,q_90,w_1200/v1560398750/production/designs/5055406_0.jpg",
            img_p2: "https://cdn11.bigcommerce.com/s-7va6f0fjxr/images/stencil/1280x1280/products/49070/65309/Girl-Stick-Figure-43-Vinyl-Decal-Sticker__36104.1506201870.jpg?c=2",
            power_p1: 10,
            power_p2: 20
        }
    }

    hit_p2() {
        this.setState((prevState, props) => ({
            hp_p2: prevState.hp_p2 - prevState.power_p1
        }));
    }

    hit_p1() {
        this.setState((prevState, props) => ({
            hp_p1: prevState.hp_p1 - prevState.power_p2
        }));
    }
    render() {
        return (
            <div>
                <Player1 health={this.state.hp_p1} image={this.state.img_p1}/>
                <Player2 health={this.state.hp_p2} image={this.state.img_p2}/>
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